import { NgModule } from '@angular/core';
import { ReloadlyUiModule } from 'reloadly-ui';
import { BadgeExampleComponent } from './badge-example/badge.component';
import { ButtonExampleComponent } from './button-example/button.component';
import { SelectExampleComponent } from './select-example/select-example.component';
import { DateExampleComponent } from './date-example/date-example.component';
import { SidebarExampleComponent } from './sidebar-example/sidebar-example.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';
import { MenuExampleComponent } from './menu-example/menu-example.component';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ReloadlyUiModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        BadgeExampleComponent,
        ButtonExampleComponent,
        SelectExampleComponent,
        DateExampleComponent,
        DateExampleComponent,
        SidebarExampleComponent,
        SwitchExampleComponent,
        TooltipExampleComponent,
        MenuExampleComponent,
        FormGroupExampleComponent
    ]
})
export class ComponentsModule { }
