import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaygroundComponent } from './playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { ReloadlyUiDirectivesModule, ReloadlyUiModule } from 'reloadly-ui';
import { ButtonExampleComponent } from './components/button-example/button-example.component';
import { BadgeExampleComponent } from './components/badge-example/badge-example.component';
import { BreadcrumbsExampleComponent } from './components/breadcrumbs-example/breadcrumbs-example.component';
import { DateExampleComponent } from './components/date-example/date-example.component';
import { FormExampleComponent } from './components/form-example/form-example.component';
import { FormGroupExampleComponent } from './components/form-group-example/form-group-example.component';
import { InputGroupExampleComponent } from './components/input-group-example/input-group-example.component';
import { MenuExampleComponent } from './components/menu-example/menu-example.component';
import { SelectExampleComponent } from './components/select-example/select-example.component';
import { SidebarExampleComponent } from './components/sidebar-example/sidebar-example.component';
import { StepperExampleComponent } from './components/stepper-example/stepper-example.component';
import { SwitchExampleComponent } from './components/switch-example/switch-example.component';
import { TooltipExampleComponent } from './components/tooltip-example/tooltip-example.component';
import { TableExampleComponent } from './components/table-example/table-example.component';
import { ConfirmationDialogComponent } from './components/modal-example/confirmation-dialog/confirmation-dialog.component';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';
import { PaginationExampleComponent } from './components/pagination-example/pagination-example.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ReloadlyUiModule,
        ReloadlyUiDirectivesModule,
        PlaygroundRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        PlaygroundComponent,
        SidebarComponent,
        BadgeExampleComponent,
        BreadcrumbsExampleComponent,
        ButtonExampleComponent,
        DateExampleComponent,
        FormExampleComponent,
        FormGroupExampleComponent,
        InputGroupExampleComponent,
        MenuExampleComponent,
        SelectExampleComponent,
        SidebarExampleComponent,
        StepperExampleComponent,
        SwitchExampleComponent,
        TooltipExampleComponent,
        TableExampleComponent,
        ModalExampleComponent,
        ConfirmationDialogComponent,
        PaginationExampleComponent
    ],
    providers: []
})
export class PlaygroundModuleModule { }
