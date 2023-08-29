import { Component, Input } from '@angular/core';

@Component({
  selector: 'reloadly-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() title?: string;
}
