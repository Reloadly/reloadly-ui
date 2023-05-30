import { Component, Input } from '@angular/core';

@Component({
  selector: 'reloadly-form-label',
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.scss']
})
export class FormLabelComponent {
    @Input() type:FormLabelType = 'heading';
}

type FormLabelType = 'heading' | 'subheading'
