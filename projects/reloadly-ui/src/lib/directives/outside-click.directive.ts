import {
    Directive,
    EventEmitter,
    HostListener,
    Output,
    ElementRef,
    Input,
} from '@angular/core';

@Directive({
    selector: '[outsideClick]',
})
export class OutsideClickDirective {
    @Input()
    identifier?: string;
    @Output()
    outsideClick: EventEmitter<String> = new EventEmitter<String>();

    @HostListener('document:mousedown', ['$event', '$event.target'])
    public onClick(event: MouseEvent, targetElement: HTMLElement): void {
        let clickedComponent = targetElement;
        let inside = false;
        do {
            if (clickedComponent === this.elementRef.nativeElement) {
                inside = true;
                break;
            } else {
                clickedComponent = clickedComponent?.parentNode as HTMLElement;
            }
        } while (clickedComponent);
        if (!inside && this.elementRef.nativeElement.id == this.identifier) {
            this.outsideClick.emit(this.identifier);
        }
    }

    constructor(private elementRef: ElementRef) { }
}
