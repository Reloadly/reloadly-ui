import { Component, Input } from '@angular/core';

@Component({
  selector: 'reloadly-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.scss']
})
export class InputLabelComponent {
    @Input() type:FormLabelType = 'heading';
}

type FormLabelType = 'heading' | 'subheading'