import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionCardComponent } from './action-card/action-card.component';
import { SelectionGridComponent } from './selection-grid/selectable-grid.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ListTileComponent } from './list-tile/list-tile.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ComponentsModule } from '../components/components.module';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './stepper/step/step.component';
import { FormsModule } from '@angular/forms';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CardComponent } from './card/card.component';
import { ReloadlyFormsModule } from '../form/form.module';

@NgModule({
    declarations: [
        ActionCardComponent,
        ImageCardComponent,
        ListTileComponent,
        SelectionGridComponent,
        ProductDetailsComponent,
        StepperComponent,
        StepComponent,
        CreditCardComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        ReloadlyFormsModule
    ],
    exports: [
        ActionCardComponent,
        ImageCardComponent,
        ListTileComponent,
        SelectionGridComponent,
        ProductDetailsComponent,
        StepperComponent,
        StepComponent,
        CardComponent,
        CreditCardComponent
    ]
})
export class ReloadlyContainersModule { }
