import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionGridComponent } from './selection-grid/selectable-grid.component';
import { ComponentsModule } from '../components/components.module';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './stepper/step/step.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ReloadlyFormsModule } from '../form/form.module';

@NgModule({
    declarations: [
        StepperComponent,
        StepComponent,
        CardComponent,
        SelectionGridComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        FormsModule,
        ReloadlyFormsModule
    ],
    exports: [
        SelectionGridComponent,
        StepperComponent,
        StepComponent,
        CardComponent
    ]
})
export class ReloadlyContainersModule { }
