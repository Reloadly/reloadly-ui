import { NgModule } from '@angular/core';
import { TableDirective } from './table.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [
        TableDirective
    ],
    declarations: [
        TableDirective
    ],
    providers: [],
})
export class DirectivesModule { }
