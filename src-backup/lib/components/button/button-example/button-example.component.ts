import { Component } from '@angular/core';

@Component({
    selector: 'reloadly-button-example',
    templateUrl: './button-example.component.html',
    styleUrls: ['./button-example.component.scss']
})
export class ButtonExampleComponent {
    disabled: boolean = false;
    dynamicClass: string = 'mr-4 mt-4 custom-button-class'
}
