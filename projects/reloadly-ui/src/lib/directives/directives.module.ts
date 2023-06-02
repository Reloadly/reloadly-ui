import { NgModule } from '@angular/core';
import { OutsideClickDirective } from './outside-click.directive';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule],
    exports: [OutsideClickDirective],
    declarations: [OutsideClickDirective],
    providers: [],
})
export class ReloadlyUiDirectivesModule { }
