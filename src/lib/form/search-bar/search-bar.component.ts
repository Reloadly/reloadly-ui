import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'reloadly-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
    @Input() placeholder: string = 'Search';
    @Input() size: 'small' | 'medium' | 'large' = 'medium';
    @Input() query: string = '';
    @Output() queryChange: EventEmitter<string> = new EventEmitter();

    constructor() { }

}
