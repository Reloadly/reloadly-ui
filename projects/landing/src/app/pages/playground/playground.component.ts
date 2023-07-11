import { Component, Renderer2, ViewContainerRef } from '@angular/core';
import { RootViewContainers } from 'reloadly-ui';

@Component({
    selector: 'app-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent {
    constructor(
        private rootView: RootViewContainers,
        private viewContainerRef: ViewContainerRef,
        private renderer: Renderer2
    ) {

        rootView.renderer = this.renderer;
        rootView.viewContainerRef = this.viewContainerRef;

    }

}
