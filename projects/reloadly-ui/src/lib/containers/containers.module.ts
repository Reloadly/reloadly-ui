import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionCardComponent } from './action-card/action-card.component';
import { SelectionGridComponent } from './selection-grid/selectable-grid.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ListTileComponent } from './list-tile/list-tile.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [
        ActionCardComponent,
        ImageCardComponent,
        ListTileComponent,
        SelectionGridComponent,
        ProductDetailsComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule
    ],
    exports: [
        ActionCardComponent,
        ImageCardComponent,
        ListTileComponent,
        SelectionGridComponent,
        ProductDetailsComponent
    ]
})
export class ContainersModule { }
