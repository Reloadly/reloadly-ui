import { Injectable, ApplicationRef, createComponent, ComponentRef, Inject, EmbeddedViewRef, RendererFactory2, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ReloadlyQuickActionComponent } from './quick-action.component';
import { BehaviorSubject } from 'rxjs';
import { QuickAction, QuickActionInterface } from '../../models/quick-action';

@Injectable({
    providedIn: 'root'
})
export class ReloadlyQuickActionService {
    componentRef!: ComponentRef<ReloadlyQuickActionComponent>;
    componentInstance?: ReloadlyQuickActionComponent | null;
    renderer!: Renderer2;


    get isInitialized(): boolean {
        return !!this.componentRef;
    }

    constructor(
        private appRef: ApplicationRef,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.initializeOverlay();
    }


    initializeOverlay() {
        if(this.componentRef) {
            return;
        }
        this.componentRef = createComponent(ReloadlyQuickActionComponent, {
            environmentInjector: this.appRef.injector,
        });
        this.appRef.attachView(this.componentRef.hostView); // and detach later
        const asDomElement = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
        this.componentInstance = this.componentRef.instance;
        this.renderer = this.componentRef.instance.renderer;
        this.renderer.appendChild(this.document.body, asDomElement);
        this.componentRef.hostView.detectChanges();

        console.log('this.componentRef', this.componentRef);
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

