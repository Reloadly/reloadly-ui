import { Component, ViewContainerRef } from '@angular/core';
import { ReloadlyModal } from '../reloadly-modal';

@Component({
  selector: 'reloadly-modal-outlet',
  templateUrl: './reloadly-modal-outlet.component.html',
  styleUrls: ['./reloadly-modal-outlet.component.scss']
})
export class ReloadlyModalOutletComponent {
    constructor(private viewContainerRef: ViewContainerRef, private modal: ReloadlyModal) {
        modal.setViewContainerRef(viewContainerRef);
    }
}
