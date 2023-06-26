import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';
import { CodeBoxComponent } from './components/code-box/code-box.component';
import { ApiTableComponent } from './components/api-table/api-table.component';
import { HighlightModule } from 'ngx-highlightjs';
import { ReloadlyUiModule } from 'reloadly-ui';


@NgModule({
    imports: [
        CommonModule,
        ReloadlyUiModule,
        HighlightModule
    ],
    declarations: [
        TabsComponent,
        TabComponent,
        CodeBoxComponent,
        ApiTableComponent
    ],
    exports: [
        TabsComponent,
        TabComponent,
        CodeBoxComponent,
        ApiTableComponent
    ],

})
export class SharedModule { }
