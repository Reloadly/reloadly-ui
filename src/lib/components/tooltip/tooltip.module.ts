import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directive/tooltip.directive';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [
        TooltipComponent,
        TooltipDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
      TooltipComponent,
      TooltipDirective,
  ]
})
export class TooltipModule { }
