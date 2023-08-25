import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReloadlyQuickActionTileComponent } from './reloadly-quick-action-tile/reloadly-quick-action-tile.component';
import { ReloadlyQuickActionComponent } from './quick-action.component';

@NgModule({
    imports: [CommonModule],
    exports: [ReloadlyQuickActionComponent],
    declarations: [ReloadlyQuickActionComponent, ReloadlyQuickActionTileComponent],
    providers: [],
})
export class ReloadlyQuickActionModule { }
