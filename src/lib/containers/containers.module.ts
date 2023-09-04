import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionGridComponent } from './selection-grid/selectable-grid.component';
import { ComponentsModule } from '../components/components.module';
import { ReloadlyStepperComponent } from './stepper/stepper.component';
import { StepComponent } from './stepper/step/step.component';
import { ReloadlyFormsModule } from '../form/form.module';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ReloadlyStepperComponent,
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
        ReloadlyStepperComponent,
        StepComponent,
        CardComponent
    ]
})
export class ReloadlyContainersModule { }
