import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadlyModalContainerComponent } from './reloadly-modal-container/reloadly-modal-container.component';
import { ReloadlyModalOutletComponent } from './reloadly-modal-outlet/reloadly-modal-outlet.component';
import { ReloadlyModal } from './reloadly-modal';

@NgModule({
    declarations: [ReloadlyModalContainerComponent, ReloadlyModalOutletComponent],
    imports: [CommonModule],
    exports: [ReloadlyModalOutletComponent],
    providers: [{ provide: ReloadlyModal, useExisting: ReloadlyModal }]
})
export class ReloadlyModalModule { }
