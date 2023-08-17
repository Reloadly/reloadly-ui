import { Injectable, ApplicationRef, createComponent, ComponentRef, Inject, EmbeddedViewRef, Renderer2 } from '@angular/core';
import { QuickAction, QuickActionInterface } from '../../models/quick-action';
// import { ReloadlyQuickActionComponent } from './quick-action.component';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ReloadlyQuickActionService {
    componentRef!: any; // ComponentRef<ReloadlyQuickActionComponent>; // @TODO fix circular dependency
    componentInstance?: any; // ReloadlyQuickActionComponent | null; // @TODO fix circular dependency
    renderer!: Renderer2;

    get isInitialized(): boolean {
        return !!this.componentRef;
    }

    constructor(
        private appRef: ApplicationRef,
        @Inject(DOCUMENT) private document: Document
    ) { this.initializeOverlay(); }

    initializeOverlay() {
        if (this.componentRef) {
            return;
        }
        // @TODO fix circular dependency
        // this.componentRef = createComponent(ReloadlyQuickActionComponent, {
        //     environmentInjector: this.appRef.injector,
        // });
        this.appRef.attachView(this.componentRef.hostView); // and detach later
        const asDomElement = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
        this.componentInstance = this.componentRef.instance;
        this.renderer = this.componentRef.instance.renderer;
        this.renderer.appendChild(this.document.body, asDomElement);
        this.componentRef.hostView.detectChanges();
    }

    /**
     * Shows a quick action
     * @param {QuickActionInterface} data
     * @return {*}  {QuickAction}
     * @memberof ReloadlyQuickActionService
     */
    showQuickAction(data: QuickActionInterface): QuickAction {
        return this.componentInstance!.showQuickAction(data);
    }

    /**
     * Dismisses a quick action
     * @param {QuickAction} action
     * @memberof ReloadlyQuickActionService
     */
    dismissQuickAction(action: QuickAction) {
        return this.componentInstance!.dismissQuickAction(action);
    }
}

