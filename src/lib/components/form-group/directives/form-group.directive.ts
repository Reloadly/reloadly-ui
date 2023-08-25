import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[reloadlyFormGroup]'
})
export class FormGroupDirective {
    @Input() hasError: boolean = false;
    constructor(private el: ElementRef) {
        this.setMainClass();
    }

    ngOnChanges() {
        this.checkError();
    }

    setMainClass() {
        this.el.nativeElement.classList.add('form-container')
    }

    checkError() {
        if(this.hasError) {
            this.el.nativeElement.classList.add('formHasError');
            
            return;
        }
        this.el.nativeElement.classList.remove('formHasError');
    }

}
