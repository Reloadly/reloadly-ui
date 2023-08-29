import { NgModule } from '@angular/core';
import { OutsideClickDirective } from './outside-click.directive';
import { TableDirective } from './table.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [
        OutsideClickDirective,
        TableDirective
    ],
    declarations: [
        OutsideClickDirective,
        TableDirective
    ],
    providers: [],
})
export class DirectivesModule { }
