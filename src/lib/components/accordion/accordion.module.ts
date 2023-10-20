import { NgModule } from '@angular/core';
import { ReloadlyAccordionComponent } from './accordion.component';
import { ReloadlyAccordionItem } from "./directives/accordion-item.directive";
import { ReloadlyAccordionItemContent } from "./directives/accordion-item-content.directive";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule],
  exports: [
    ReloadlyAccordionComponent,
    ReloadlyAccordionItem,
    ReloadlyAccordionItemContent,

  ],
  declarations: [
    ReloadlyAccordionComponent,
    ReloadlyAccordionItem,
    ReloadlyAccordionItemContent,
  ],
  providers: [],
})
export class ReloadlyAccordionModule { }
