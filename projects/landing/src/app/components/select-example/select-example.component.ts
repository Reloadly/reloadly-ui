import { Component } from '@angular/core';

@Component({
    selector: 'app-select-example',
    templateUrl: './select-example.component.html',
    styleUrls: ['./select-example.component.scss']
})
export class SelectExampleComponent {
    options = [
        { label: 'Option One', value: 'Option-1' },
        { label: 'Option Two', value: 'Option-2' },
        { label: 'Option Three', value: 'Option-3' },
        { label: 'Option Four', value: 'Option-4' }
    ];
}
