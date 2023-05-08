import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[reloadlyInputGroup]'
})
export class InputGroupDirective {

    constructor(private el: ElementRef) {
        this.setMainClass();
    }

    setMainClass() {
        this.el.nativeElement.classList.add('input-group')
    }

}
