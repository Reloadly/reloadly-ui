import { DOCUMENT } from '@angular/common';
import { ComponentRef, EmbeddedViewRef, Inject, Injectable, InjectionToken, Injector, Renderer2, ViewContainerRef } from '@angular/core';
import { ReloadlyModalContainerComponent } from './reloadly-modal-container/reloadly-modal-container.component';
import { ReloadlyDialogRef } from './reloadly-dialog-ref';
import { takeLast } from 'rxjs';

export const RELOADLY_DIALOG_DATA = new InjectionToken<Object>('Data passed to dialog');

@Injectable()
export class RootViewContainers {
    public viewContainerRef: ViewContainerRef | null = null;
    public renderer: Renderer2 | null = null
}

@Injectable()
export class ReloadlyModal {
    private modalContainerRef: ComponentRef<ReloadlyModalContainerComponent> | null = null;
    private modalContainer: ReloadlyModalContainerComponent | null = null;

    constructor(
        private injector: Injector,
        private rootView: RootViewContainers,
        @Inject(DOCUMENT) private document: Document
    ) { }

    public openDialog(componentClass: any, data: any = null): ReloadlyDialogRef {
        this.instantiateModalContainerToDOMBody();
        const [dialogRef, personalInjector] = this.instantiateDialog(data);
        const injector = this.cloneRealInjector(personalInjector);
        this.showDynamicComponent(componentClass, dialogRef, injector);
        this.registerDialogForClose(dialogRef);

        return dialogRef;
    }

    private registerDialogForClose(dialog: ReloadlyDialogRef): void {
        dialog.onClose$.pipe(takeLast(1)).subscribe(() => {
            if (this.modalContainer) this.modalContainer.playDismissAnimation();
            // timeout 301 corresponds to the duration in reloadly-modal-container.component.scss + 1
            setTimeout(() => this.destroyModalContainerFromDOMBody(), 301);
            (dialog as any) = null;
        });
    }

    private showDynamicComponent(componentClass: any, dialogRef: ReloadlyDialogRef, injector: Injector): void {
        if (!this.modalContainer) return console.error("Error showing modal");
        this.modalContainer.showDialog(componentClass, dialogRef, injector);
    }

    private instantiateDialog(componentData: any): [ReloadlyDialogRef, Injector] {
        if (!this.modalContainer) this.instantiateModalContainerToDOMBody();
        const personalDialogRef = this.createPersonalDialogRefForComponent();
        const personalInjector = this.createPersonalInjectorForComponent(componentData, personalDialogRef);

        return [personalDialogRef, personalInjector];
    }

    private createPersonalDialogRefForComponent(): ReloadlyDialogRef {
        return new ReloadlyDialogRef;
    }

    private createPersonalInjectorForComponent(componentData: Object, dialogRef: ReloadlyDialogRef): Injector {
        let injectionTokens = new Map;
        injectionTokens.set(RELOADLY_DIALOG_DATA, componentData);
        injectionTokens.set(ReloadlyDialogRef, dialogRef);
        return injectionTokens;
    }

    private cloneRealInjector(injectorTokens: Injector | Map<InjectionToken<any>, Object>): Injector {
        class PrivateInjector implements Injector {
            constructor(
                private realInjector: Injector,
                private fakeInjector: Injector | Map<InjectionToken<any>, Object>
            ) { }

            get(token: InjectionToken<any>, notFoundValue?: any): any {
                const value = this.fakeInjector.get(token);
                if (typeof value !== 'undefined') {
                    return value;
                }
                return this.realInjector.get<any>(token, notFoundValue);
            }
        }

        return new PrivateInjector(this.injector, injectorTokens);
    }

    private instantiateModalContainerToDOMBody(): void {
        this.destroyModalContainerFromDOMBody();
        if (this.rootView.renderer && this.rootView.viewContainerRef) {
            this.modalContainerRef = this.rootView.viewContainerRef
                .createComponent(ReloadlyModalContainerComponent, { injector: this.injector });
            const asDomElement = (this.modalContainerRef.hostView as EmbeddedViewRef<any>).rootNodes[0];
            this.rootView.renderer.appendChild(this.document.body, asDomElement);
            this.modalContainer = this.modalContainerRef.instance;
        }
    }

    private destroyModalContainerFromDOMBody(): void {
        if (this.modalContainerRef) {
            this.modalContainerRef.destroy();
        }
        this.modalContainerRef = null;
        this.modalContainer = null;
    }

}
