/*
 * Public API Surface of reloadly-ui
 */

//@TODO: please review this file, seems to me that some components are exported multi times. Ex: export * from component.module and then individual components also. Ideally, we would export from modules, component, containers, form..
import { SelectableItem } from './lib/models/selectable-item';
import { CardComponent } from './lib/containers/card/card.component';
import { SearchBarComponent } from './lib/form/search-bar/search-bar.component';
import { MenuDirective } from './lib/components/menu/directives/menu.directive';
import { ButtonDirective } from './lib/components/button/directives/button.directive';
import { RangeSliderComponent } from './lib/form/range-slider/range-slider.component';
import { BadgeComponent, BadgeVariant } from './lib/components/badge/badge.component';
import { MenuItemDirective } from './lib/components/menu/directives/menu-item.directive';
import { InputDirective } from './lib/components/input-group/directives/input.directive';
import { CheckBoxValue, CheckboxComponent } from './lib/form/checkbox/checkbox.component';
import { DropdownSelectComponent } from './lib/form/dropdown-select/dropdown-select.component';
import { ReloadlyQuickActionService } from './lib/components/quick-action/quick-action.service';
import { FormLabelComponent } from './lib/components/form-group/form-label/form-label.component';
import { FormGroupDirective } from './lib/components/form-group/directives/form-group.directive';
import { InputGroupDirective } from './lib/components/input-group/directives/input-group.directive';
import { ReloadlyQuickActionComponent } from './lib/components/quick-action/quick-action.component';
import { ReloadlyBreadcrumbsComponent } from './lib/components/breadcrumb-group/breadcrumbs/breadcrumbs.component';
import { QuickAction, QuickActionInterface, QuickActionPosition, QuickActionType } from './lib/models/quick-action';
import { ReloadlyModalOutletComponent } from './lib/components/modal/reloadly-modal-outlet/reloadly-modal-outlet.component';
import { BreadcrumbItemComponent } from './lib/components/breadcrumb-group/breadcrumb-item/breadcrumb-item.component';
import { DropdownConfig, SelectComponent, SelectOptionItem } from './lib/components/select/select.component';
import { InputLabelComponent } from './lib/components/input-group/input-label/input-label.component';
import { SelectionGridComponent } from './lib/containers/selection-grid/selectable-grid.component';
import { MenuDividerComponent } from './lib/components/menu/menu-divider/menu-divider.component';
import { MenuSectionComponent } from './lib/components/menu/menu-section/menu-section.component';
import { ReloadlyAccordionComponent } from './lib/components/accordion/accordion.component';
import { TooltipDirective } from './lib/components/tooltip/directive/tooltip.directive';
import { PaginationComponent } from './lib/components/pagination/pagination.component';
import { PreloaderComponent } from './lib/components/preloader/preloader.component';
import { SidebarComponent } from './lib/components/sidebar/sidebar.component';
import { TooltipComponent } from './lib/components/tooltip/tooltip.component';
import { ReloadlyStepperComponent } from './lib/containers/stepper/stepper.component';
import { StepComponent } from './lib/containers/stepper/step/step.component';
import { SwitchComponent } from './lib/components/switch/switch.component';
import { SelectableViewStyle } from './lib/enums/selectable-view-style';
import { SelectableViewType } from './lib/enums/selectable-view-type';
import { MenuComponent } from './lib/components/menu/menu.component';
import { TagComponent } from './lib/components/tag/tag.component';
import { SvgComponent } from './lib/components/svg/svg.component';
import { TableDirective } from './lib/directives/table.directive';
export * from './lib/reloadly-ui.module';

export * from './lib/components/components.module';
export {
    SvgComponent,
    TagComponent,
    PaginationComponent,
    SidebarComponent,
    SwitchComponent,
    SelectComponent,
    SelectOptionItem,
    FormLabelComponent,
    FormGroupDirective,
    InputDirective,
    InputGroupDirective,
    InputLabelComponent,
    TableDirective,
    PreloaderComponent,
    DropdownConfig,
    ReloadlyBreadcrumbsComponent,
    BreadcrumbItemComponent
};

export * from './lib/form/form.module';
export {
    DropdownSelectComponent,
    SearchBarComponent,
    CheckboxComponent,
    CheckBoxValue,
    RangeSliderComponent
};

export * from './lib/components/button/button.module';
export { ButtonDirective };

export * from './lib/components/badge/badge.module';
export { BadgeComponent, BadgeVariant };

export * from './lib/components/menu/menu.module';
export { MenuComponent, MenuDirective, MenuDividerComponent, MenuSectionComponent, MenuItemDirective };

export * from './lib/components/tooltip/tooltip.module';
export { TooltipComponent, TooltipDirective };

export * from './lib/components/modal/reloadly-modal.module';
export * from './lib/components/modal/reloadly-modal';
export * from './lib/components/modal/reloadly-dialog-ref';
export { ReloadlyModalOutletComponent };

export * from './lib/containers/containers.module';
export {
    CardComponent,
    SelectionGridComponent,
    ReloadlyStepperComponent,
    StepComponent,
};

export {
    SelectableItem,
    SelectableViewStyle,
    SelectableViewType
};

export * from './lib/directives/directives.module';

export * from './lib/components/quick-action/quick-action.module';
export { ReloadlyQuickActionComponent, ReloadlyQuickActionService };
export { QuickAction, QuickActionInterface, QuickActionPosition, QuickActionType };

export * from './lib/components/accordion/accordion.module';
export { ReloadlyAccordionComponent };
