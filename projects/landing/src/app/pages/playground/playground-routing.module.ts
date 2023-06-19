import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './playground.component';
import { ButtonExampleComponent } from './components/button-example/button-example.component';
import { BadgeExampleComponent } from './components/badge-example/badge-example.component';
import { BreadcrumbsExampleComponent } from './components/breadcrumbs-example/breadcrumbs-example.component';
import { DateExampleComponent } from './components/date-example/date-example.component';
//import { FormExampleComponent } from './components/form-example/form-example.component';
import { InputGroupExampleComponent } from './components/input-group-example/input-group-example.component';
import { MenuExampleComponent } from './components/menu-example/menu-example.component';
import { SelectExampleComponent } from './components/select-example/select-example.component';
import { SidebarExampleComponent } from './components/sidebar-example/sidebar-example.component';
import { SwitchExampleComponent } from './components/switch-example/switch-example.component';
import { TooltipExampleComponent } from './components/tooltip-example/tooltip-example.component';
//import { StepperExampleComponent } from '../../components/stepper-example/stepper-example.component';

const routes: Routes = [{
    path: '',
    component: PlaygroundComponent,
    children: [
        {
            path: 'badge',
            component: BadgeExampleComponent
        },
        {
            path: 'breadcrumbs',
            component: BreadcrumbsExampleComponent
        },
        {
            path: 'button',
            component: ButtonExampleComponent
        },
        {
            path: 'date-picker',
            component: DateExampleComponent
        },
        //{
        //    path: 'form',
        //    component: FormExampleComponent
        //},
        {
            path: 'input-group',
            component: InputGroupExampleComponent
        },
        {
            path: 'menu',
            component: MenuExampleComponent
        },
        {
            path: 'select',
            component: SelectExampleComponent
        },
        {
            path: 'sidebar',
            component: SidebarExampleComponent
        },
        //{
        //    path: 'stepper',
        //    component: StepperExampleComponent
        //},
        {
            path: 'switch',
            component: SwitchExampleComponent
        },
        {
            path: 'tooltip',
            component: TooltipExampleComponent
        }
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class PlaygroundRoutingModule { }
