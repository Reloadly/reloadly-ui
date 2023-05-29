import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentToggleComponent } from './environment-toggle/environment-toggle.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HowToComponent } from './how-to/how-to.component';
import { SvgComponent } from './svg/svg.component';
import { TagComponent } from './tag/tag.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { TableComponent } from './table/table.component';
//import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PaginationComponent } from './pagination/pagination.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { SidebarExampleComponent } from '../../../../landing/src/app/components/sidebar-example/sidebar-example.component';
import { SwitchComponent } from './switch/switch.component';
//import { SwitchExampleComponent } from '../../../../landing/src/app/components/switch-example/switch-example.component';
import { SelectComponent } from './select/select.component';
//import { SelectExampleComponent } from '../../../../landing/src/app/components/select-example/select-example.component';
//import { TooltipExampleComponent } from '../../../../landing/src/app/components/tooltip-example/tooltip-example.component';
//import { MenuExampleComponent } from './menu/menu-example/menu-example.component';
import { DateComponent } from './date/date.component';
//import { DateExampleComponent } from '../../../../landing/src/app/components/date-example/date-example.component';
import { InputDirective } from './input-group/directives/input.directive';
//import { FormGroupExampleComponent } from './form-group/form-group-example/form-group-example.component';
import { FormLabelComponent } from './form-group/form-label/form-label.component';
import { InputLabelComponent } from './input-group/input-label/input-label.component';
//import { InputGroupExampleComponent } from './input-group/input-group-example/input-group-example.component';
import { FormGroupDirective } from './form-group/directives/form-group.directive';
import { InputGroupDirective } from './input-group/directives/input-group.directive';
import { TableDirective } from './table/directives/table.directive';
//import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ReloadlyModal } from './modal/reloadly-modal';
import { ReloadlyModalModule } from './modal/reloadly-modal.module';
import { ButtonModule } from './button/button.module';
import { BadgeModule } from './badge/badge.module';
import { MenuModule } from './menu/menu.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SvgComponent,
        FooterComponent,
        HowToComponent,
        EnvironmentToggleComponent,
        TagComponent,
        CustomerServiceComponent,
        TableComponent,
        PaginationComponent,
        //ButtonExampleComponent,
        //BadgeExampleComponent,
        SidebarComponent,
        //SidebarExampleComponent,
        SwitchComponent,
        //SwitchExampleComponent,
        SelectComponent,
        //SelectExampleComponent,
        //TooltipExampleComponent,
        //MenuExampleComponent,
        //FormGroupExampleComponent,
        FormGroupDirective,
        FormLabelComponent,
        InputDirective,
        InputGroupDirective,
        InputLabelComponent,
        //InputGroupExampleComponent,
        TableDirective,
        DateComponent,
        //DateExampleComponent,
        PreloaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        //NgxDatatableModule,
        //NgxIntlTelInputModule,
        ReloadlyModalModule,
        ButtonModule,
        BadgeModule,
        MenuModule,
        TooltipModule
    ],
    exports: [
        HeaderComponent,
        SvgComponent,
        FooterComponent,
        HowToComponent,
        EnvironmentToggleComponent,
        TagComponent,
        CustomerServiceComponent,
        TableComponent,
        PaginationComponent,
        //ButtonExampleComponent,
        //BadgeExampleComponent,
        SidebarComponent,
        //SidebarExampleComponent,
        SwitchComponent,
        //SwitchExampleComponent,
        SelectComponent,
        //SelectExampleComponent,
        //TooltipExampleComponent,
        //MenuExampleComponent,
        FormLabelComponent,
        //FormGroupExampleComponent,
        PreloaderComponent,
        FormGroupDirective,
        InputDirective,
        InputGroupDirective,
        InputLabelComponent,
        //InputGroupExampleComponent,
        TableDirective,
        DateComponent,
        //DateExampleComponent,
        //NgxIntlTelInputModule,
        ReloadlyModalModule,
        ButtonModule,
        BadgeModule,
        MenuModule,
        TooltipModule
    ],
    providers: [ReloadlyModal]
})
export class ComponentsModule { }
