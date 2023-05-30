import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Input, TemplateRef, ViewContainerRef, EmbeddedViewRef, Inject } from '@angular/core';
import { MenuComponent } from '../menu.component';

@Directive({
    selector: '[reloadly-menu]'
})
export class MenuDirective {
    @Input('reloadly-menu') menu: TemplateRef<MenuComponent> | undefined;
    menuRef: EmbeddedViewRef<MenuComponent> | undefined;

    constructor(
        private viewContainerRef: ViewContainerRef,
        @Inject(DOCUMENT) private document: Document
    ) {
    }

    @HostListener('click')
    onClick(): void {
        if (this.isContainerEmpty() && this.menu) {
            this.menuRef = this.viewContainerRef.createEmbeddedView(this.menu);
            this.document?.addEventListener('wheel', this.blockScroll, { passive: false });
            return;
        }
        this.document?.removeEventListener('wheel', this.blockScroll);
        return this.destroy()
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    destroy(): void {
        this.viewContainerRef.clear();
    }

    private isContainerEmpty(): boolean {
        return this.viewContainerRef.length === 0;
    }

    blockScroll(e: any) {
        e.preventDefault();
    }

}
