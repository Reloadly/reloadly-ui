import { SelectableItem } from '../../models/selectable-item';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SelectableViewType } from '../../enums/selectable-view-type';
import { SelectableViewStyle } from '../../enums/selectable-view-style';

@Component({
    selector: 'reloadly-selectable-grid',
    templateUrl: './selectable-grid.component.html',
    styleUrls: ['./selectable-grid.component.scss']
})
export class SelectionGridComponent {
    @Input() list: SelectableItem[] = [];
    @Input() viewType: SelectableViewType = SelectableViewType.grid;
    @Input() viewStyle: SelectableViewStyle = SelectableViewStyle.start;
    @Output() onChange: EventEmitter<SelectableItem | null> = new EventEmitter();
    selectedItem?: SelectableItem | undefined;


    select(item: SelectableItem) {
        if (item == this.selectedItem) {
            this.selectedItem = undefined;
            this.onChange.emit(null);
        } else {
            this.selectedItem = item;
            this.onChange.emit(item);
        }
    }
}
