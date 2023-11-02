import { ContentChild, Directive, Input } from "@angular/core";
import { ReloadlyAccordionItemContent } from "./accordion-item-content.directive";

@Directive({
    selector: "reloadly-accordion-item"
})
export class ReloadlyAccordionItem {
    @Input() title = "";
    @Input() disabled = false;
    @Input() expanded = false;
    @ContentChild(ReloadlyAccordionItemContent) content?: ReloadlyAccordionItemContent;

    constructor() {}

}
