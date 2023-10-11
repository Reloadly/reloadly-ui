import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SvgComponent } from './svg/svg.component';
import { TagComponent } from './tag/tag.component';
import { SelectComponent } from './select/select.component';
import { SwitchComponent } from './switch/switch.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BreadcrumbItemComponent } from './breadcrumb-group/breadcrumb-item/breadcrumb-item.component';
import { ReloadlyModalOutletComponent } from './modal/reloadly-modal-outlet/reloadly-modal-outlet.component';
import { ReloadlyBreadcrumbsComponent } from './breadcrumb-group/breadcrumbs/breadcrumbs.component';
import { InputLabelComponent } from './input-group/input-label/input-label.component';
import { InputGroupDirective } from './input-group/directives/input-group.directive';
import { FormGroupDirective } from './form-group/directives/form-group.directive';
import { FormLabelComponent } from './form-group/form-label/form-label.component';
import { InputDirective } from './input-group/directives/input.directive';
import { ReloadlyAccordionModule } from './accordion/accordion.module';
import { PreloaderComponent } from './preloader/preloader.component';
import { ReloadlyModalModule } from './modal/reloadly-modal.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { ButtonModule } from './button/button.module';
import { BadgeModule } from './badge/badge.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
    declarations: [
        SvgComponent,
        TagComponent,
        PaginationComponent,
        SidebarComponent,
        SwitchComponent,
        SelectComponent,
        FormGroupDirective,
        FormLabelComponent,
        InputDirective,
        InputGroupDirective,
        InputLabelComponent,
        PreloaderComponent,
        ReloadlyBreadcrumbsComponent,
        BreadcrumbItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReloadlyModalModule,
        ReloadlyAccordionModule,
        ButtonModule,
        BadgeModule,
        MenuModule,
        TooltipModule
    ],
    exports: [
        SvgComponent,
        TagComponent,
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
        ReloadlyModalModule,
        ButtonModule,
        BadgeModule,
        MenuModule,
        TooltipModule,
        ReloadlyBreadcrumbsComponent,
        ReloadlyAccordionModule,
        BreadcrumbItemComponent,
        ReloadlyModalOutletComponent
    ]
})
export class ComponentsModule { }
