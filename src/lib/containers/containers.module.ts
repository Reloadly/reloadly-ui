import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionCardComponent } from './action-card/action-card.component';
import { SelectionGridComponent } from './selection-grid/selectable-grid.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ListTileComponent } from './list-tile/list-tile.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';

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
    SharedModule,
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
