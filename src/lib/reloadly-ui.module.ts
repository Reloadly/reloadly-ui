import { NgModule } from '@angular/core';
import { ReloadlyUiComponent } from './reloadly-ui.component';
import { ComponentsModule } from './components/components.module';
import { ReloadlyModal } from './components/modal/reloadly-modal';

@NgModule({
  declarations: [
    ReloadlyUiComponent
  ],
  imports: [
    ComponentsModule
  ],
  exports: [
    ReloadlyUiComponent,
    ComponentsModule
  ],
  providers: [ReloadlyModal]
})
export class ReloadlyUiModule { }
