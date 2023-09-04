import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[reloadlyInput]'
})
export class InputDirective {
    @Input() hasError: boolean = false;
    @Input() size: InputSize = 'medium';
    @Input() disabled: boolean = false; // @TODO throws a warning when used with Reactive forms
    @Input() set isDisabled(value: boolean) { // @TODO quick fix
        this.disabled = value;
        this.ngOnChanges();
    };
    public nativeElement: HTMLInputElement;

    constructor(private el: ElementRef) {
        this.nativeElement = el.nativeElement;
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
        if (this.hasError) {
            this.el.nativeElement.classList.add('error-input');

            return;
        }
        this.el.nativeElement.classList.remove('error-input');
    }

    checkDisabled() {
        this.el.nativeElement.disabled = this.disabled;
        if (this.disabled) {
            this.el.nativeElement.classList.add('disabled-input');
            return;
        }
        this.el.nativeElement.classList.remove('disabled-input');
    }


}

type InputSize = 'small' | 'medium' | 'large'
