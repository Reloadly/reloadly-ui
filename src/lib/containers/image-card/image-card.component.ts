import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {

    @Input() imageUrl: string = 'https://loremflickr.com/640/360';
    @Input() title?: string;
    @Input() cardSize: 'sm' | 'md' | 'lg' = 'sm';

}
