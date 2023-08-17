import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-empty-state', //@TODO: I don't think this is being used anywhere
    templateUrl: './empty-state.component.html',
    styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
    @Input() title = ''
    @Input() description = ''

}
