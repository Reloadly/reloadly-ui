import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: "[accordionContent]"
})
export class ReloadlyAccordionItemContent {
    constructor(public templateRef: TemplateRef<any>) {}

}
