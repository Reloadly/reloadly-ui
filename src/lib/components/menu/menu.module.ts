import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDirective } from './directives/menu.directive';
import { MenuDividerComponent } from './menu-divider/menu-divider.component';
import { MenuSectionComponent } from './menu-section/menu-section.component';
import { MenuComponent } from './menu.component';
import { MenuItemDirective } from './directives/menu-item.directive';



@NgModule({
    declarations: [
        MenuDividerComponent,
        MenuDirective,
        MenuComponent,
        MenuItemDirective,
        MenuSectionComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MenuDividerComponent,
        MenuDirective,
        MenuComponent,
        MenuItemDirective,
        MenuSectionComponent,
    ]
})
export class MenuModule { }
