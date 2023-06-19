import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-input-group-example',
    templateUrl: './input-group-example.component.html',
    styleUrls: ['./input-group-example.component.scss'],
})
export class InputGroupExampleComponent {
    phoneInputError = true;
    phoneInputDisabled = true;

}
