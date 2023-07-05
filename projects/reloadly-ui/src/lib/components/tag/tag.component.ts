import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tag', //@TODO: should't this be reloadly-tag ?
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss']
})
export class TagComponent {
    @Input() type: 'success' | 'failed' | 'none' | 'warring' | 'processing' = 'success';
    @Input() iconId: string | null = null;
    @Input() text: string = '';
}
