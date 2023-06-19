import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';


@NgModule({
    imports: [],
    declarations: [
        TabsComponent,
        TabComponent
    ],
    exports: [
        TabsComponent,
        TabComponent
    ],

})
export class SharedModule { }
