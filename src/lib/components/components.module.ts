import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg/svg.component';
import { TagComponent } from './tag/tag.component';
import { DateComponent } from './date/date.component';
//import { TableComponent } from './table/table.component';
import { SelectComponent } from './select/select.component';
import { SwitchComponent } from './switch/switch.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BreadcrumbItemComponent } from './breadcrumb-group/breadcrumb-item/breadcrumb-item.component';
import { ReloadlyModalOutletComponent } from './modal/reloadly-modal-outlet/reloadly-modal-outlet.component';
import { BreadcrumbsComponent } from './breadcrumb-group/breadcrumbs/breadcrumbs.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { InputLabelComponent } from './input-group/input-label/input-label.component';
import { InputGroupDirective } from './input-group/directives/input-group.directive';
import { FormGroupDirective } from './form-group/directives/form-group.directive';
import { FormLabelComponent } from './form-group/form-label/form-label.component';
import { InputDirective } from './input-group/directives/input.directive';
import { EmptyStateComponent } from './empty-state/empty-state.component'
import { PreloaderComponent } from './preloader/preloader.component';
import { TableDirective } from './table/directives/table.directive';
import { ReloadlyModalModule } from './modal/reloadly-modal.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { ButtonModule } from './button/button.module';
import { BadgeModule } from './badge/badge.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
    declarations: [
        SvgComponent,
        TagComponent,
        CustomerServiceComponent,
        //TableComponent,
        PaginationComponent,
        SidebarComponent,
        SwitchComponent,
        SelectComponent,
        FormGroupDirective,
        FormLabelComponent,
        InputDirective,
        InputGroupDirective,
        InputLabelComponent,
        TableDirective,
        DateComponent,
        PreloaderComponent,
        BreadcrumbsComponent,
        BreadcrumbItemComponent,
        EmptyStateComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReloadlyModalModule,
        ButtonModule,
        BadgeModule,
        MenuModule,
        TooltipModule
    ],
    exports: [
        SvgComponent,
        TagComponent,
        CustomerServiceComponent,
        //TableComponent,
        PaginationComponent,
        SidebarComponent,
        SwitchComponent,
        SelectComponent,
        FormLabelComponent,
        PreloaderComponent,
        FormGroupDirective,
        InputDirective,
        InputGroupDirective,
        InputLabelComponent,
        TableDirective,
        DateComponent,
        ReloadlyModalModule,
        ButtonModule,
        BadgeModule,
        MenuModule,
        TooltipModule,
        BreadcrumbsComponent,
        BreadcrumbItemComponent,
        ReloadlyModalOutletComponent,
        EmptyStateComponent
    ]
})
export class ComponentsModule { }
