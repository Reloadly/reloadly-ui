import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-tile',
  templateUrl: './list-tile.component.html',
  styleUrls: ['./list-tile.component.scss']
})
export class ListTileComponent {
  @Input() title: string = '';
  @Input() subTitle: string = '';
  @Input() thirdLine: string = '';
  @Input() tag: string = 'Successful';

}
