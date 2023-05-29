import { DOCUMENT } from '@angular/common';
import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Output,
    Renderer2,
    ViewChild
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'reloadly-range-slider',
    templateUrl: './range-slider.component.html',
    styleUrls: ['./range-slider.component.scss']
})
export class RangeSliderComponent implements OnInit, AfterViewInit, OnDestroy {
    @Input() min!: number;
    @Input() max!: number;
    @Input() symbol: string = '';
    @Input() showInput: boolean = true;
    @Input() baseSize: number = 30;
    @Input() disabled!: boolean;
    @Output() currentValue = new EventEmitter<number>();
    @Output() currentPercentage = new EventEmitter<number>();

    @ViewChild('range') range!: ElementRef;
    @ViewChild('knob') knob!: ElementRef;
    @ViewChild('input') input!: ElementRef;

    private knobListeners = new Array<() => void>;
    private windowListeners = new Array<() => void>;
    private window;

    private value = new Subject<[value: number, percentage: number]>();

    constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) {
        this.window = document.defaultView;
    }

    ngOnInit(): void {
        this.value.subscribe(currentValue => {
            this.currentValue.emit(currentValue[0]);
            this.currentPercentage.emit(currentValue[1]);
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
            this.renderer.listen(this.knob.nativeElement, 'touchstart', event => this.enableSlide(event)),
        ];
    }

    ngOnDestroy(): void {
        this.windowListeners.forEach(eventEnder => eventEnder());
        this.knobListeners.forEach(eventEnder => eventEnder());
    }

    public inputChanged(event: Event): void {
        const value = parseInt((event.target as HTMLInputElement).value) || 0;
        const difference = this.max - this.min;
        const percentage = Math.round((value / difference) * 100);
        this.value.next([value, percentage]);
        this.moveSlider(percentage);
    }

    private changeValue(percentage: number): void {
        const value = Math.round((percentage / 100) * this.max);
        this.value.next([value, percentage]);
        this.renderer.setProperty(this.input.nativeElement, 'value', value);
    }

    private enableSlide(event: Event): void {
        this.windowListeners.forEach(eventEnder => eventEnder());
        this.windowListeners = [
            this.renderer.listen(this.window, 'mouseup', event => this.disableSlide(event)),
            this.renderer.listen(this.window, 'touchend', event => this.disableSlide(event)),
            // we want the user to be able to slide, even if his finger is outside the slider
            // and that's why we used window
            this.renderer.listen(this.window, 'mousemove', event => this.adjustSlider(event)),
            this.renderer.listen(this.window, 'touchmove', event => this.adjustSlider(event))
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

            event.preventDefault();
            let percentage = this.clip(Math.round((xLength / slider.offsetWidth) * 100));

            this.window?.requestAnimationFrame(() => {
                this.moveSlider(percentage);
            });
            this.changeValue(percentage);
        }
    }

    private clip(number: number, min = 0, max = 100): number {
        if (number < min) return min;
        if (number > max) return max;
        return number;
    }

    private moveSlider(percentage: number): void {
        percentage = this.clip(percentage);
        const sliderWidth = this.range.nativeElement.offsetWidth - this.knob.nativeElement.offsetWidth;
        let x = Math.round((percentage / 100) * sliderWidth);
        x = this.clip(x, 0, sliderWidth);
        this.knob.nativeElement.style.left = x + "px";
    }

}
