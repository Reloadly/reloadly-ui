import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
    selector: 'app-tabs',
    template: `
        <div class="tabs">
            <ul class="nav nav-tabs">
                <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
                    <a>{{tab.title}}</a>
                </li>
            </ul>
        </div>
        <ng-content></ng-content>
    `,
    styles: [
        `
        .tabs li.active a {
            border-bottom-color: hsl(0, 0%, 21%);
            color: hsl(0, 0%, 21%);
        }
        .tab-close {
            color: gray;
            text-align: right;
            cursor: pointer;
        }
        .tabs .active a {
            border-bottom-color: hsl(0, 0%, 21%);
            color: hsl(0, 0%, 21%);
        }
    `]
})
export class TabsComponent implements AfterContentInit {

    @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

    // contentChildren are set
    ngAfterContentInit() {
        // get all active tabs
        let activeTabs = this.tabs.filter((tab) => tab.active);

        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    selectTab(tab: any) {
        // deactivate all tabs
        this.tabs.toArray().forEach(tab => tab.active = false);

        // activate the tab the user has clicked on.
        tab.active = true;
    }
}
