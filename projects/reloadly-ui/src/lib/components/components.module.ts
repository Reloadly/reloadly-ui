import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SvgComponent } from './svg/svg.component';
import { TagComponent } from './tag/tag.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { TableComponent } from './table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationComponent } from './pagination/pagination.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SwitchComponent } from './switch/switch.component';
import { DateComponent } from './date/date.component';
import { SelectComponent } from './select/select.component';
import { InputDirective } from './input-group/directives/input.directive';
import { FormLabelComponent } from './form-group/form-label/form-label.component';
import { InputLabelComponent } from './input-group/input-label/input-label.component';
import { FormGroupDirective } from './form-group/directives/form-group.directive';
import { InputGroupDirective } from './input-group/directives/input-group.directive';
import { TableDirective } from './table/directives/table.directive';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ReloadlyModalModule } from './modal/reloadly-modal.module';
import { ButtonModule } from './button/button.module';
import { BadgeModule } from './badge/badge.module';
import { MenuModule } from './menu/menu.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { PreloaderComponent } from './preloader/preloader.component';
import { BreadcrumbsComponent } from './breadcrumb-group/breadcrumbs/breadcrumbs.component';
import { BreadcrumbItemComponent } from './breadcrumb-group/breadcrumb-item/breadcrumb-item.component';

@NgModule({
    declarations: [
        SvgComponent,
        FooterComponent,
        TagComponent,
        CustomerServiceComponent,
        TableComponent,
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
        BreadcrumbItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        NgxDatatableModule,
        NgxIntlTelInputModule,
        ReloadlyModalModule,
        ButtonModule,
        BadgeModule,
        MenuModule,
        TooltipModule
    ],
    exports: [
        SvgComponent,
        FooterComponent,
        TagComponent,
        CustomerServiceComponent,
        TableComponent,
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
        NgxIntlTelInputModule,
        ReloadlyModalModule,
        ButtonModule,
        BadgeModule,
        MenuModule,
        TooltipModule,
        BreadcrumbsComponent,
        BreadcrumbItemComponent
    ]
})
export class ComponentsModule { }
