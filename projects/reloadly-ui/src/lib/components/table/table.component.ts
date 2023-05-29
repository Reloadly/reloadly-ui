import { Component, Input } from '@angular/core';
//import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
    selector: 'reloadly-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {
    @Input() rows: any[] = [];
    @Input() columns: any[] = [];

    //ColumnMode: ColumnMode = ColumnMode.force;


    onSelect(column: any) {
    }

}
