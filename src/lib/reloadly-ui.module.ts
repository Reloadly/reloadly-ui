import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { ReloadlyModal } from './components/modal/reloadly-modal';
import { DirectivesModule } from './directives/directives.module';
@NgModule({
    imports: [ComponentsModule, DirectivesModule],
    exports: [ComponentsModule, DirectivesModule],
    providers: [ReloadlyModal]
})
export class ReloadlyUiModule { }
