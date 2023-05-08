import { Component, ViewChild } from '@angular/core';
import { NgxIntlTelInputComponent } from 'ngx-intl-tel-input';

@Component({
    selector: 'app-input-group-example',
    templateUrl: './input-group-example.component.html',
    styleUrls: ['./input-group-example.component.scss']
})
export class InputGroupExampleComponent {
    phoneInputError = true;
    phoneInputDisabled = true;
    @ViewChild("phoneInputDisabled", { static: false }) telInput!: NgxIntlTelInputComponent

    ngAfterViewInit() {
        this.telInput?.setDisabledState(true)
    }
}
