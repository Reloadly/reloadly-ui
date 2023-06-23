import { NgModule } from '@angular/core';

import { ReloadlyQuickActionComponent } from './reloadly-quick-action/reloadly-quick-action.component';
import { CommonModule } from '@angular/common';
import { ReloadlyQuickActionTileComponent } from './reloadly-quick-action-tile/reloadly-quick-action-tile.component';

@NgModule({
    imports: [CommonModule],
    exports: [ReloadlyQuickActionComponent],
    declarations: [ReloadlyQuickActionComponent, ReloadlyQuickActionTileComponent],
    providers: [],
})
export class ReloadlyQuickActionModule { }
