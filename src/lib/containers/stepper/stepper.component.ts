import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    Output,
    QueryList,
    Renderer2,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { StepComponent } from './step/step.component';
import { DOCUMENT } from '@angular/common';

class AnimationOrb {
    constructor(
        private actionFunction: () => void,
        private thisVariable: any) { }
    play(): void {
        this.actionFunction.apply(this.thisVariable);
    }
}

@Component({
    selector: 'reloadly-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class ReloadlyStepperComponent implements AfterContentInit, AfterViewInit, OnDestroy {
    private last = 0;
    private _currentIndex = 0;
    private viewResolved = false;
    private cont!: HTMLElement;
    private animationQueue: Array<AnimationOrb> = new Array;

    @ContentChildren(StepComponent) contents!: QueryList<StepComponent>;
    @ContentChildren(StepComponent, { read: ViewContainerRef }) contentsRef!: QueryList<ViewContainerRef>;
    @ViewChild('target') container!: ElementRef;
    @Output() finishedSteps = new EventEmitter<void>;
    @Output() reachedLastStep = new EventEmitter<void>;
    @Input() showBullets = true;
    @Input() set currentIndex(value: number) {
        if (this._currentIndex != value) {
            const action = this._currentIndex < value ? this.slideLeft : this.slideRight;
            this._currentIndex = value;

            if (this.animationQueue.length < 1) {
                this.animationQueue.push(new AnimationOrb(action, this));
                this.animationQueue.pop()!.play();
            } else {
                this.animationQueue.push(new AnimationOrb(action, this));
            }
        }
    }
    get currentIndex() { return this._currentIndex }

    constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

    ngAfterContentInit(): void {
        let counter = 0;
        this.contents.forEach(c => c.index = counter++);
        this.last = --counter;
    }

    ngAfterViewInit(): void {
        this.viewResolved = true;
        this.cont = this.container.nativeElement;
        this.initSteps();
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

    finish(): void {
        this.finishedSteps.emit();
    }

    private initSteps(): void {
        if (this.viewResolved) {
            const [firstStep, nextSlide] = this.contents
                .filter(c => c.index == this.currentIndex || c.index == this.currentIndex + 1)
                .map(c => c.el.nativeElement);
            this.renderer.appendChild(this.container.nativeElement, firstStep);
            if (nextSlide) this.renderer.appendChild(this.container.nativeElement, nextSlide);
        }
    }

    private slideRight(): void {
        if (this.viewResolved && this.currentIndex >= 0) {
            // first remove next view
            const [newInsert, previousOld, rightSideOfOld] = this.contents
                .filter(c => c.index == this.currentIndex
                    || c.index == this.currentIndex + 1
                    || c.index == this.currentIndex + 2)
                .map(c => c.el.nativeElement);
            if (rightSideOfOld) this.kickOutNext(rightSideOfOld);
            this.undoHidePrevious();

            // then reset previous view just in case it has transforms, and then attach it
            this.renderer.setStyle(newInsert, 'transition', 'none');
            this.renderer.setStyle(newInsert, 'transform', 'translateX(0)');
            this.renderer.insertBefore(this.cont, newInsert, previousOld);

            // then play slide animation
            this.renderer.setStyle(newInsert, 'transform', 'translateX(-100%)');
            this.renderer.setStyle(previousOld, 'transition', 'none');
            this.renderer.setStyle(previousOld, 'transform', 'translateX(-100%)');

            // unfocus any buttons or inputs
            (this.document?.activeElement as any)?.blur();

            setTimeout(() => {
                this.renderer.setStyle(previousOld, 'transition', 'transform 500ms ease-out');
                this.renderer.setStyle(newInsert, 'transition', 'transform 500ms ease-out');
                this.renderer.setStyle(newInsert, 'transform', 'translateX(0)');
                this.renderer.setStyle(previousOld, 'transform', 'translateX(0)');
                this.renderer.listen(newInsert, 'transitionend', () => {
                    const nextAnimation = this.animationQueue.pop();
                    if (nextAnimation) nextAnimation.play();
                })
            }, 10);
        }
    }

    private slideLeft(): void {
        if (this.viewResolved) {
            // first play slide animation
            this.renderer.setStyle(this.cont.firstChild, 'transform', 'translateX(-100%)');
            this.renderer.setStyle(this.cont.lastChild, 'transform', 'translateX(-100%)');

            // unfocus any buttons or inputs
            (this.document?.activeElement as any)?.blur();

            // then attach new view
            const [currentSlide, nextSlide] = this.contents
                .filter(c => c.index == this.currentIndex || c.index == this.currentIndex + 1)
                .map(c => c.el.nativeElement);
            if (nextSlide) {
                setTimeout(() => {
                    this.kickOutPrevious();
                    this.renderer.setStyle(currentSlide, 'transition', 'none');
                    this.renderer.setStyle(currentSlide, 'transform', 'translateX(0)');
                    this.renderer.appendChild(this.cont, nextSlide);

                    // reset
                    setTimeout(() => {
                        this.renderer.setStyle(currentSlide, 'transition', 'transform 500ms ease-out');
                        this.renderer.listen(currentSlide, 'transitionend', () => {
                            const nextAnimation = this.animationQueue.pop();
                            if (nextAnimation) nextAnimation.play();
                        })
                    }, 10);
                }, 500); // corresponds to transform 500ms of stepper.component.scss
            } else {
                this.hidePrevious();
                this.reachedLastStep.emit();
            }
        }
    }

    private kickOutPrevious(): void {
        this.undoHidePrevious();
        this.renderer.removeChild(this.cont, this.cont.firstChild);
    }

    private kickOutNext(nextChild: HTMLElement): void {
        this.renderer.removeChild(this.cont, nextChild);
    }

    private hidePrevious(): void {
        this.renderer.setStyle(this.cont.firstChild, 'visibility', 'hidden');
    }

    private undoHidePrevious(): void {
        this.renderer.setStyle(this.cont.firstChild, 'visibility', 'visible');
    }

    private clamp(number: number, min = 0, max = this.last): number {
        if (number < min) return min;
        if (number > max) return max;
        return number;
    }
}
