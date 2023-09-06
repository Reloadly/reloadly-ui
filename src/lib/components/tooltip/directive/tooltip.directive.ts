import { ApplicationRef, ComponentRef, Directive, ElementRef, EmbeddedViewRef, HostListener, Injector, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { TooltipComponent } from '../tooltip.component';

@Directive({
    selector: '[reloadly-tooltip]',
    exportAs: "reloadly-tooltip"
})
export class TooltipDirective {
    isOpen: boolean = false;
    @Input('reloadly-tooltip') tooltip: string = '';
    @Input() position: Position = "top-center";
    @Input('reloadly-tooltip-color') background: string = "white";
    private componentRef: ComponentRef<TooltipComponent> | null = null;

    constructor(
        private elementRef: ElementRef,
        private appRef: ApplicationRef,
        private viewContainerRef: ViewContainerRef,
        private injector: Injector,
        private renderer: Renderer2,
    ) { }

    ngOnChanges() {
        if (this.componentRef !== null) {
            this.componentRef.instance.text = this.tooltip;
        }
    }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.show()
    }

    @HostListener('window:scroll')
    onScroll(): void {
        this.resetPosition();
    }

    private setTooltipComponentProperties() {
        if (this.componentRef !== null) {
            this.componentRef.instance.text = this.tooltip;
            this.setPosition()
        }
    }

    private resetPosition() {
        if (!this.isOpen) return;
        this.setPosition();
    }

    private setPosition() {
        const { left, right, bottom, top, width } =
            this.elementRef.nativeElement.getBoundingClientRect();
        if (this.componentRef !== null) {
            switch (this.position) {
                case "top-left":
                    this.componentRef.instance.top = top - 10
                    this.componentRef.instance.left = left;
                    this.componentRef.instance.class = "top-left"
                    break;
                case "top-center":
                    this.componentRef.instance.top = top - 10
                    this.componentRef.instance.left = (width / 2) + left;
                    this.componentRef.instance.class = "top-center"
                    break;
                case "top-right":
                    this.componentRef.instance.top = top - 10
                    this.componentRef.instance.right = window.innerWidth - right;
                    this.componentRef.instance.class = "top-right"
                    break;
                case "bottom-left":
                    this.componentRef.instance.top = bottom + 10
                    this.componentRef.instance.left = left;
                    this.componentRef.instance.class = "bottom-left"
                    break;
                case "bottom-center":
                    this.componentRef.instance.top = bottom + 10;
                    this.componentRef.instance.left = (width / 2) + left;
                    this.componentRef.instance.class = "bottom-center"
                    break;
                case "bottom-right":
                    this.componentRef.instance.top = bottom + 10
                    this.componentRef.instance.right = window.innerWidth - right;
                    this.componentRef.instance.class = "bottom-right"
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
        this.isOpen = false;
    }

    show() {
        if (this.componentRef === null) {
            this.componentRef = this.viewContainerRef.createComponent(TooltipComponent, { injector: this.injector });
            const domElem =
                (this.componentRef.hostView as EmbeddedViewRef<any>)
                    .rootNodes[0] as HTMLElement;
            document.body.appendChild(domElem);
            this.setTooltipComponentProperties();
            this.isOpen = true;

            // Add event listener for draging
            this.enableListenForDragging();

            // Customize
            this.customizeToolTip(domElem);
        }
    }

    private enableListenForDragging() {
        this.renderer.listen(this.elementRef.nativeElement, 'mousedown', () => this.listenForDragging());
        this.renderer.listen(this.elementRef.nativeElement, 'touchstart', () => this.listenForDragging());
    }

    private listenForDragging() {
        this.renderer.listen("document", 'mousemove', () => this.resetPosition());
        this.renderer.listen("document", 'touchmove', () => this.resetPosition());
    }
    
    private customizeToolTip(element: HTMLElement) {
        // Switch to center position for small items
        if (element.offsetWidth <= 30) {
            this.position = this.position.includes('top') ? 'top-center' : 'bottom-center';
            this.resetPosition();
        }
    
        // Customize color
        if (['white', '#FFF', '#FFFFFF', 'rgb(255,255,255)'].includes(this.background)) return;
    
        const tooltipElement = element.querySelector('.reloadly-tooltip');
        const caretElement = element.querySelector('.caret');
    
        this.renderer.setStyle(tooltipElement, "color", "white");
        this.renderer.setStyle(tooltipElement, "background", this.background);
        this.renderer.setStyle(caretElement, "background", this.background);
    }
    

}

type Position = "top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"
