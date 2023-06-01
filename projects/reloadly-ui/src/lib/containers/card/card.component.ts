import { Component, ContentChild, ElementRef, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'reloadly-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() title?: string;
}
