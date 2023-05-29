import { Component } from '@angular/core';

@Component({
    selector: 'app-button-example',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonExampleComponent {
    disabled: boolean = false;
    dynamicClass: string = 'mr-4 mt-4 custom-button-class'
}
