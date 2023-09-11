import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownSelectComponent } from './dropdown-select/dropdown-select.component';
import { SearchBarComponent } from './search-bar/search-bar.component'
import { ComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [
        RangeSliderComponent,
        CheckboxComponent,
        DropdownSelectComponent,
        SearchBarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ComponentsModule
    ],
    exports: [
        DropdownSelectComponent,
        SearchBarComponent,
        CheckboxComponent,
        RangeSliderComponent
    ]
})
export class ReloadlyFormsModule { }
