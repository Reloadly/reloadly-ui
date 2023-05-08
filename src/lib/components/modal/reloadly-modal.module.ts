import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadlyModalContainerComponent } from './reloadly-modal-container/reloadly-modal-container.component';
import { RootViewContainers } from './reloadly-modal';



@NgModule({
  declarations: [ReloadlyModalContainerComponent],
  imports: [CommonModule],
  providers: [{ provide: RootViewContainers, useValue: new RootViewContainers }]
})
export class ReloadlyModalModule { }
