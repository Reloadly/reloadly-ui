import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[reloadlyInput]'
})
export class InputDirective {
    @Input() disabled: boolean = false;
    @Input() hasError: boolean = false;
    @Input() size: InputSize = 'medium';
    constructor(private el: ElementRef) {
        this.setMainClass();
    }

    ngOnChanges() {
        this.checkHeight();
        this.checkError();
        this.checkDisabled();
    }

    setMainClass() {
        this.el.nativeElement.classList.add('input-container')
    }

    checkHeight() {
        this.el.nativeElement.classList.add(`input-${this.size}`);
    }

    checkError() {
        if(this.hasError) {
            this.el.nativeElement.classList.add('error-input');
            
            return;
        }
        this.el.nativeElement.classList.remove('error-input');
    }

    checkDisabled() {
        this.el.nativeElement.disabled = this.disabled;
        if(this.disabled) {
            this.el.nativeElement.classList.add('disabled-input');
            
            return;
        }
        this.el.nativeElement.classList.remove('disabled-input');
    }

    
}

type InputSize = 'small' | 'medium' | 'large'
