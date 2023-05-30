import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { StepperExampleComponent } from './stepper-example/stepper-example.component';
import { InputGroupExampleComponent } from './input-group-example/input-group-example.component';
import { BadgeExampleComponent } from './badge-example/badge-example.component';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { DateExampleComponent } from './date-example/date-example.component';
import { SelectExampleComponent } from './select-example/select-example.component';
import { SidebarExampleComponent } from './sidebar-example/sidebar-example.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { TooltipExampleComponent } from './tooltip-example/tooltip-example.component';
import { FormGroupExampleComponent } from './form-group-example/form-group-example.component';
import { MenuExampleComponent } from './menu-example/menu-example.component';
import { ReloadlyUiModule } from 'projects/reloadly-ui/src/lib/reloadly-ui.module';

@NgModule({
    imports: [
        ReloadlyUiModule,
        FormsModule,
        CommonModule,
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
        //StepperExampleComponent,
        FormGroupExampleComponent,
        InputGroupExampleComponent
    ],
    exports: [
        BadgeExampleComponent,
        ButtonExampleComponent,
        SelectExampleComponent,
        DateExampleComponent,
        DateExampleComponent,
        SidebarExampleComponent,
        SwitchExampleComponent,
        TooltipExampleComponent,
        MenuExampleComponent,
        //StepperExampleComponent,
        FormGroupExampleComponent,
        InputGroupExampleComponent,
        FormGroupExampleComponent
    ]
})
export class ComponentsModule { }
