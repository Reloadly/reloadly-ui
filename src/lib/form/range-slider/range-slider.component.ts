import { DOCUMENT } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    Renderer2,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import { ReplaySubject, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'reloadly-range-slider',
    templateUrl: './range-slider.component.html',
    styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    @Input() set min(value: number) { this._min = Math.max(0, value) };
    @Input() set max(value: number) { this._max = Math.max(this.min, value) };
    @Input() symbol: string = '';
    @Input() showInput: boolean = true;
    @Input() baseSize: number = 30;
    @Input() disabled!: boolean;
    @Input() fontSize: string = '16px';
    @Input() showLabel: boolean = false;
    @Input() set currentValue(value: number) { this.setCurrentValue(value) };
    @Output() currentValueChange = new EventEmitter<number>();
    @Output() currentPercentage = new EventEmitter<number>();

    @ViewChild('range') range!: ElementRef;
    @ViewChild('knob') knob!: ElementRef;
    @ViewChild('input') input!: ElementRef;

    public get min(): number { return this._min }
    public get max(): number { return this._max }

    private knobListeners = new Array<() => void>;
    private windowListeners = new Array<() => void>;
    private window;

    private _min = 0;
    private _max = 0;
    private value: number = 0;
    private values = new Subject<[value: number, percentage: number, emitEvent: boolean]>();
    private subs: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
        this.window = document.defaultView;
    }

    ngOnInit(): void {
        this.values.pipe(takeUntil(this.subs))
            .subscribe(currentValue => {
                const emitEvent = currentValue[2];
                if (emitEvent) {
                    this.currentValueChange.emit(currentValue[0]);
                    this.currentPercentage.emit(currentValue[1]);
                }
            });
    }

    ngAfterViewInit(): void {
        if (this.min > this.max) {
            const swap = this.min;
            this.min = this.max;
            this.max = swap;
        }

        this.knobListeners = [
            this.renderer.listen(this.knob.nativeElement, 'mousedown', event => this.enableSlide(event)),
            // @TODO
            // this.renderer.listen(this.knob.nativeElement, 'touchstart', event => this.enableSlide(event)),
        ];
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ((changes?.['currentValue']?.['currentValue'] && this.max) || (changes?.['max']?.['currentValue'] && this.value)) {
            this.setCurrentValues(changes['currentValue']['currentValue'], false);
        }
    }

    ngOnDestroy(): void {
        this.windowListeners.forEach(eventEnder => eventEnder());
        this.knobListeners.forEach(eventEnder => eventEnder());
        this.subs.next(true);
        this.subs.complete();
    }

    public inputChanged(event: Event): void {
        this.setCurrentValues(parseInt((event.target as HTMLInputElement).value) || 0);
    }

    get formattedValue(): string {
        return (this.symbol ? (this.symbol + ' ') : '') + (+this.value ?? '');
    }

    get formattedMin(): string {
        return (this.symbol ?? '') + (+this.min);
    }

    get formattedMax(): string {
        return (this.symbol ?? '') + (+this.max);
    }

    private setCurrentValue(value: number): void {
        this.value = value;
    }

    private setCurrentValues(value: number, emitEvent = true) {
        const difference = this.max - this.min;
        let mappedValue = Math.max(value, this.min) - this.min;
        const percentage = Math.round((mappedValue / difference) * 100);
        this.values.next([value, percentage, emitEvent]);
        this.value = value;
        this.moveSlider(percentage);
    }

    private changeValue(percentage: number, emitEvent = true): void {
        const difference = this.max - this.min;
        const value = Math.round((percentage / 100) * difference) + this.min;
        this.values.next([value, percentage, emitEvent]);
        this.renderer.setProperty(this.input.nativeElement, 'value', value);
        this.value = value;
    }

    private enableSlide(event: Event): void {
        this.windowListeners.forEach(eventEnder => eventEnder());
        this.windowListeners = [
            this.renderer.listen(this.window, 'mouseup', event => this.disableSlide(event)),
            // this.renderer.listen(this.window, 'touchend', event => this.disableSlide(event)),
            // we want the user to be able to slide, even if his finger is outside the slider
            // and that's why we used window
            this.renderer.listen(this.window, 'mousemove', event => this.adjustSlider(event)),
            // @TODO
            // this.renderer.listen(this.window, 'touchmove', event => this.adjustSlider(event))
        ]
    }

    private disableSlide(event: Event): void {
        this.windowListeners.forEach(eventEnder => eventEnder());
    }

    private adjustSlider(event: any): void {
        if (!this.disabled) {
            const slider = this.range.nativeElement;

            let xLength = Math.round(event.clientX - slider.getBoundingClientRect().left);
            if (event.type == 'touchmove') {
                xLength = event.touches[0].pageX - slider.getBoundingClientRect().left; // TODO test on touchscreen devices
            }

            let percentage = this.clamp(Math.round((xLength / slider.offsetWidth) * 100));
            this.window?.requestAnimationFrame(() => {
                this.moveSlider(percentage);
            });
            this.changeValue(percentage);
        }
    }

    private clamp(number: number, min = 0, max = 100): number {
        if (number < min) return min;
        if (number > max) return max;
        return number;
    }

    private moveSlider(percentage: number): void {
        percentage = this.clamp(percentage);
        const sliderWidth = this.range?.nativeElement.offsetWidth - this.knob?.nativeElement.offsetWidth;
        let x = Math.round((percentage / 100) * sliderWidth);
        x = this.clamp(x, 0, sliderWidth);
        if (this.knob?.nativeElement) this.knob.nativeElement.style.left = x + "px";
    }

}
