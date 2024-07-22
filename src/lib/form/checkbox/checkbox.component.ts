import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject, ReplaySubject, map, filter, takeUntil, tap, take, skip } from 'rxjs';
import { FormControl } from '@angular/forms';

export interface CheckBoxValue {
    name: string,
    label: string,
    isChecked: boolean
}

type BorderColoring = 'color' | 'fade' | 'shaden';
type FillColoring = 'color' | 'fade' | 'transparent';

@Component({
    selector: 'reloadly-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    animations: [
        trigger('showHide', [
            state('visible', style({
                opacity: 0.3
            })),
            state('invisible', style({
                opacity: 0
            })),
            transition('visible => invisible', [animate('150ms ease-out')]),
            transition('invisible => visible', [animate('150ms ease-in')])
        ]),
        trigger('squareBorderColor', [
            state('shaden', style({
                color: 'var(--rld-shadest)',
                borderColor: 'var(--rld-shadest)'
            })),
            transition('* => shaden', [animate('150ms ease-out')]),
            state('fade', style({
                color: 'var(--rld-grey)',
                borderColor: 'var(--rld-grey)'
            })),
            transition('* <=> fade', [animate('150ms ease-out')]),
            state('color', style({
                color: 'var(--rld-violet)',
                borderColor: 'var(--rld-violet)'
            }))
        ]),
        trigger('squareFillColor', [
            state('color', style({
                borderColor: 'var(--rld-violet)',
                backgroundColor: 'var(--rld-violet)'
            })),
            state('fade', style({
                color: 'var(--rld-grey)',
                borderColor: 'var(--rld-grey)',
                backgroundColor: 'var(--rld-grey)'
            })),
            state('transparent', style({
                color: 'var(--rld-grey)',
                borderColor: 'var(--rld-grey)'
            }))
        ]),
        trigger('ripple', [
            state('extrude', style({
                // to maintain last keyframe state
                opacity: 0.6,
                transform: 'scale(1)'
            })),
            transition('* => extrude', [animate('200ms ease-out', keyframes([
                style({ opacity: 0, transform: 'scale(0)', offset: 0 }),
                style({ opacity: 0.6, transform: 'scale(1)', offset: 1 })
            ]))])
        ]),
        trigger('coloredBackground', [
            state('color', style({
                zIndex: 1,
                color: 'var(--rld-violet-3)',
                opacity: 1
            }))
        ])
    ]
})
export class CheckboxComponent implements OnInit, AfterViewInit, OnDestroy {
    @Output() change: EventEmitter<CheckBoxValue | string> = new EventEmitter();
    @Input() name: string = '';
    @Input() label: string = '';
    @Input() control!: FormControl | null;
    @Input() set disabled(value: boolean) { this.state.disabled.next(value) };
    @Input() set checked(value: boolean) {
        if (this.hasViewInit.getValue()) this.setIsCheckedNoEmit(value);
        else this.hasViewInit.pipe(filter(v => v == true), take(1)).subscribe(() => this.setIsCheckedNoEmit(value));
    };

    @ViewChild('checkBox') checkBox!: ElementRef;
    @ViewChild('disc') disc!: ElementRef;
    @ViewChild('view') view!: ElementRef;
    @ViewChild('input') inputElement!: ElementRef;

    public get isHovered(): boolean { return this.state.isHovered }
    public get isFocused(): boolean { return this.state.isFocused }
    public get isPressed(): boolean { return this.state.isPressed }
    public get isChecked(): boolean { return this.state.isChecked.getValue().value }
    public get disabled(): boolean { return this.state.disabled.getValue() }

    public get isChecked$(): BehaviorSubject<boolean> { return this.state.isChecked.pipe(map(v => v.value)) as BehaviorSubject<boolean> }
    public get disabled$(): BehaviorSubject<boolean> { return this.state.disabled }

    public set isChecked(value: boolean) {
        this.state.isChecked.next({ value });
        this.htmlInputElement.checked = value;
    }

    private state = {
        isHovered: false,
        isFocused: false,
        isPressed: false,
        isChecked: new BehaviorSubject<{ value: boolean, metadata?: any }>({ value: false, metadata: null }),
        disabled: new BehaviorSubject(false),
    };
    private listeners = new Array<() => void>;
    private subs: ReplaySubject<boolean> = new ReplaySubject(1);
    private hasViewInit: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
        if (!this.control) {
            this.state.isChecked
                .pipe(skip(1), takeUntil(this.subs))
                .subscribe(status => {
                    if (!(status?.metadata && status.metadata?.noEmit)) {
                        this.change.emit({
                            name: this.name,
                            isChecked: status.value,
                            label: this.label
                        })
                    }
                });
        } else {
            this.state.isChecked
                .pipe(
                    tap(checked => {
                        if (checked?.metadata && checked.metadata?.noEmit)
                            (this.control as FormControl).setValue(checked.value, { emitEvent: false });
                        else (this.control as FormControl).setValue(checked.value);
                    }),
                    skip(1),
                    takeUntil(this.subs)
                ).subscribe(() => {
                    this.change.emit('Use FormControl.value or FormControl.valueChanges instead, since you supplied a FormControl in [control]')
                });
            this.control.valueChanges.subscribe((v: boolean) => this.setIsCheckedNoEmit(v));
        }
    }

    ngAfterViewInit(): void {
        this.listenForHovered();
        this.listenForFocused();
        this.listenForPressed();
        this.hasViewInit.next(true);
    }

    public get borderColoring(): BorderColoring | null {
        if (this.disabled && !this.state.isPressed) return 'fade';
        if (this.state.isFocused && !this.isChecked) return 'shaden';
        if (this.state.isPressed || this.isChecked) return 'color';
        else return null;
    }

    public get fillColoring(): FillColoring {
        if (this.disabled && this.isChecked) return 'fade';
        if (this.disabled) return 'transparent';
        if (this.isChecked) return 'color';
        else return 'transparent';
    }

    public get htmlInputElement(): HTMLInputElement {
        return this.inputElement.nativeElement;
    }

    public onLabelClick(): void {
        this.onFocused();
        // onPressed mutates isChecked, so onPressed must be inside the if condition
        if (!this.isChecked) {
            setTimeout(() => this.onPressed(), 100);
        } else {
            setTimeout(() => this.onPressed(), 100);
            setTimeout(() => this.onLeave(), 200);
        }
    }

    ngOnDestroy(): void {
        this.listeners.forEach(eventEnder => eventEnder());
        this.subs.next(true);
        this.subs.complete();
    }

    private onHovered = (): void => {
        this.state.isHovered = true;
    }

    private onLeave = (): void => {
        this.state.isHovered = false;
        this.state.isPressed = false;
    }

    private onFocused = (): void => {
        if (!this.disabled) {
            this.state.isFocused = true;
        }
    }

    private onPressed = (): void => {
        if (!this.disabled) {
            this.state.isChecked.next({ value: !this.state.isChecked.getValue().value });
            setTimeout(() => {
                this.state.isFocused = false;
                this.state.isPressed = true;
            }, 50);
        }
    }

    private listenForHovered(): void {
        this.listeners.concat([
            this.renderer.listen(this.checkBox.nativeElement, 'mouseover', this.onHovered),
            this.renderer.listen(this.checkBox.nativeElement, 'mouseleave', this.onLeave)
        ]);
    }

    private listenForFocused(): void {
        this.listeners.concat([
            this.renderer.listen(this.checkBox.nativeElement, 'mousedown', this.onFocused)
        ]);
    }

    private listenForPressed(): void {
        this.listeners.concat([
            this.renderer.listen(this.checkBox.nativeElement, 'mouseup', this.onPressed)
        ]);
    }

    private setIsCheckedNoEmit(value: boolean): void {
        this.state.isChecked.next({ value, metadata: { noEmit: true } });
        this.htmlInputElement.checked = value;
    }
}
