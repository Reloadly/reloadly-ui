import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormExampleComponent } from './form-example/form-example.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropdownSelectComponent } from './dropdown-select/dropdown-select.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { SearchBarComponent } from './search-bar/search-bar.component'

@NgModule({
  declarations: [
    FormExampleComponent,
    RangeSliderComponent,
    CheckboxComponent,
    DropdownSelectComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SelectDropDownModule
  ],
  exports: [
    FormExampleComponent,
    DropdownSelectComponent,
    SearchBarComponent,
    CheckboxComponent
  ]
})
export class AppFormModule { }

