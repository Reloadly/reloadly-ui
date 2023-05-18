import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    Output,
    QueryList,
    Renderer2,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { StepComponent } from './step/step.component';

@Component({
    selector: 'reloadly-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements AfterContentInit, AfterViewInit, OnDestroy {
    private _currentIndex = 0;
    private last = 0;
    private viewResolved = false;
    private oldViews: [any, any] = [null, null];

    @ContentChildren(StepComponent) contents!: QueryList<StepComponent>;
    @ContentChildren(StepComponent, { read: ViewContainerRef }) contentsRef!: QueryList<ViewContainerRef>;
    @ViewChild('target') container!: ElementRef;
    @Output() finishedSteps = new EventEmitter<void>;
    @Input() set currentIndex(value: number) {
        this._currentIndex = value;
        this.displayStep();
    }
    get currentIndex() { return this._currentIndex }

    constructor(private renderer: Renderer2) { }

    ngAfterContentInit(): void {
        let counter = 0;
        this.contents.forEach(c => c.index = counter++);
        this.last = --counter;
        setTimeout(() => this.moveToNext(), 1000)
    }

    ngAfterViewInit(): void {
        this.viewResolved = true;
        this.displayStep();
    }

    ngOnDestroy(): void {
        this.contentsRef.forEach(c => c.clear());
    }

    moveToNext(): void {
        this.currentIndex = this.clamp(this.currentIndex + 1);
    }

    moveToPrevious(): void {
        this.currentIndex = this.clamp(this.currentIndex - 1);
    }

    moveToIndex(index: number): void {
        this.currentIndex = this.clamp(index);
    }

    private displayStep(): void {
        if (this.viewResolved) {
            const [currentSlide, nextSlide] = this.contents
                .filter(c => c.index == this.currentIndex || c.index == this.currentIndex + 1)
                .map(c => c.el.nativeElement);
            this.hideOld(this.oldViews);
            this.oldViews = [currentSlide, nextSlide];
            this.renderer.appendChild(this.container.nativeElement, currentSlide);
            if (nextSlide) {
                this.renderer.appendChild(this.container.nativeElement, nextSlide);
                this.animate();
            } else {
                this.finishedSteps.emit();
            }
        }
    }

    private hideOld([current, next]: [any, any]): void {
        if (current) this.renderer.removeChild(this.container.nativeElement, current);
        if (next) this.renderer.removeChild(this.container.nativeElement, next);
    }

    private animate(): void {

    }

    private clamp(number: number, min = 0, max = this.last): number {
        if (number < min) return min;
        if (number > max) return max;
        return number;
    }
}
