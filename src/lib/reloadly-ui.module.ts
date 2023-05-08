import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { ReloadlyModal } from './components/modal/reloadly-modal';

@NgModule({
  imports: [ComponentsModule],
  exports: [ComponentsModule],
  providers: [ReloadlyModal]
})
export class ReloadlyUiModule { }
