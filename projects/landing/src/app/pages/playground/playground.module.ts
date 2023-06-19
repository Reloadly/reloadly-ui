import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadlyUiModule } from 'reloadly-ui';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { PlaygroundComponent } from './playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { SharedModule } from '../../shared/shared.module';
import { ButtonExampleComponent } from './components/button-example/button-example.component';
import { BadgeExampleComponent } from './components/badge-example/badge-example.component';
import { BreadcrumbsExampleComponent } from './components/breadcrumbs-example/breadcrumbs-example.component';
import { ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
    imports: [
        CommonModule,
        ReloadlyUiModule,
        PlaygroundRoutingModule,
        ReactiveFormsModule,
        //HighlightModule,
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
        TooltipExampleComponent
    ],
    providers: [
        //{
        //    provide: HIGHLIGHT_OPTIONS,
        //    useValue: {
        //        coreLibraryLoader: () => import('highlight.js/lib/core'),
        //        languages: {
        //            css: () => import('highlight.js/lib/languages/css'),
        //            html: () => import('highlight.js/lib/languages/html')
        //        }
        //    }
        //}
    ]
})
export class PlaygroundModuleModule { }
