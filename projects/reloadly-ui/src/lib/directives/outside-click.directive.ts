import {
    Directive,
    EventEmitter,
    HostListener,
    Output,
    ElementRef,
  } from '@angular/core';

  @Directive({
    selector: '[outsideClick]',
  })
  export class OutsideClickDirective {
    @Output()
    outsideClick: EventEmitter<MouseEvent> = new EventEmitter();

    @HostListener('document:mousedown', ['$event'])
    onClick(event: MouseEvent): void {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.outsideClick.emit(event);
      }
    }

    constructor(private elementRef: ElementRef) {}
  }
