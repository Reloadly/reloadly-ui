import { Component } from '@angular/core';

@Component({
    selector: 'app-dropdown-select',
    templateUrl: './dropdown-select.component.html',
    styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectComponent {
    config: any = {
        search: true ,
        height: 'auto',
        placeholder: 'Select a country',
        limitTo: 0,
        moreText: 'more',
        noResultsFound: 'No results found!',
        searchPlaceholder: 'Search',
        clearOnSelection: false,
        enableSelectAll: false,
        displayKey: "description", 
        customComparator: ()=>{}, 
        searchOnKey: undefined, 
        inputDirection: 'ltr'
    }
    dropdownOptions: Array<any> = [
        'Nigeria',
        'United Kingdom',
        'United States of America'
    ]
    dataModel: any;
}
