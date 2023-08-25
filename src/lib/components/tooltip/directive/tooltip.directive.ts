import { ApplicationRef, ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Injector, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from '../tooltip.component';

@Directive({
    selector: '[reloadly-tooltip]',
    exportAs: "reloadly-tooltip"
})
export class TooltipDirective {
    @Input('reloadly-tooltip') tooltip: string = '';
    @Input() position: Position = "top-center"
    private componentRef: ComponentRef<TooltipComponent> | null = null;

    constructor(
        private elementRef: ElementRef,
        private appRef: ApplicationRef,
        private viewContainerRef: ViewContainerRef,
        private injector: Injector
    ) { }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.show()
    }

    private setTooltipComponentProperties() {
        if (this.componentRef !== null) {
            this.componentRef.instance.text = this.tooltip;
            this.setPosition()
        }
    }

    private setPosition() {
        const { left, right, bottom, top } =
            this.elementRef.nativeElement.getBoundingClientRect();

        if (this.componentRef !== null) {
            switch (this.position) {
                case "top-left":
                    this.componentRef.instance.top = top - 10
                    this.componentRef.instance.left = left
                    this.componentRef.instance.class += "top-left"
                    break;
                case "top-center":
                    this.componentRef.instance.top = top - 10
                    this.componentRef.instance.left = (right - left) / 2 + left
                    this.componentRef.instance.class += "top-center"
                    break;
                case "top-right":
                    this.componentRef.instance.top = top - 10
                    this.componentRef.instance.left = (right - left) / 2 + left
                    this.componentRef.instance.class += "top-right"
                    break;
                case "bottom-left":
                    this.componentRef.instance.top = bottom + 10
                    this.componentRef.instance.left = left
                    this.componentRef.instance.class += "bottom-left"
                    break;
                case "bottom-center":
                    this.componentRef.instance.top = bottom + 10;
                    this.componentRef.instance.left = (right - left) / 2 + left
                    this.componentRef.instance.class += "bottom-center"
                    break;
                case "bottom-right":
                    this.componentRef.instance.top = bottom + 10
                    this.componentRef.instance.left = (right - left) / 2 + left
                    this.componentRef.instance.class += "bottom-right"
                    break;
                default:
                    break;
            }
        }
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.destroy();
    }

    ngOnDestroy(): void {
        this.destroy();
    }

    destroy(): void {
        if (this.componentRef !== null) {
            this.appRef.detachView(this.componentRef!.hostView);
            this.componentRef?.destroy();
            this.componentRef = null;
        }
    }

    hide() {
        this.destroy();
    }

    show() {
        if (this.componentRef === null) {
            this.componentRef = this.viewContainerRef.createComponent(TooltipComponent, { injector: this.injector });
            const domElem =
                (this.componentRef.hostView as EmbeddedViewRef<any>)
                    .rootNodes[0] as HTMLElement;
            document.body.appendChild(domElem);
            this.setTooltipComponentProperties()
        }
    }

}

type Position = "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"
