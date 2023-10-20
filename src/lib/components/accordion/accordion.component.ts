import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { ReloadlyAccordionItem } from './directives/accordion-item.directive';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'reloadly-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    animations: [
        trigger('contentExpansion', [
            state('expanded', style({ height: '*', opacity: 1, visibility: 'visible' })),
            state('collapsed', style({ height: '0px', opacity: 0, visibility: 'hidden' })),
            transition('expanded <=> collapsed',
                animate('200ms cubic-bezier(.37,1.04,.68,.98)')),
        ])
    ]
})
export class ReloadlyAccordionComponent {
    expanded = new Set<number>();
    @Input() collapsing = true;
    @Input() width: string = '176px';
    @ContentChildren(ReloadlyAccordionItem) items: QueryList<ReloadlyAccordionItem> = new QueryList();

    getToggleState = (index: number) => {
        return this.toggleState.bind(this, index);
    };

    toggleState = (index: number) => {
        if (this.expanded.has(index)) {
            this.expanded.delete(index);
        } else {
            if (this.collapsing) {
                this.expanded.clear();
            }
            this.expanded.add(index);
        }
    };
}

