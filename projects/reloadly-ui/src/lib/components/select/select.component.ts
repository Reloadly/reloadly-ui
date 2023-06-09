import { Component, ElementRef, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';

@Component({
    selector: 'reloadly-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true,
        }
    ]
})
export class SelectComponent implements OnInit, OnChanges, ControlValueAccessor {
    showDropdown: boolean = false;
    searchQuery: string = '';
    initialValue: string | null = null;
    private list = new BehaviorSubject<Array<SelectOptionItem>>([]);
    @Input() selectedOption: SelectOptionItem | null = null;

    @Input() size: 'small' | 'medium' | 'large' = 'medium';
    @Input() type: 'input' | 'dropdown' = 'input';
    @Input() placeholder: string = 'Choose one';
    @Input() dropdownConfig: DropdownConfig = new DropdownConfig();
    @Input() options: Array<SelectOptionItem> = [];
    @Input() selectedIndex = 0;
    @Input() selectedValue = '';
    @Input() error: boolean = false;
    @Input() disabled: boolean = false;
    @Output() selectedOptionChange: EventEmitter<SelectOptionItem | null> = new EventEmitter();

    filteredList$ = this.list.pipe(map(options => this.filterMethod(options)));

    private onTouched: Function = () => { };
    private onChanged: Function = (item: SelectOptionItem | null) => { };

    constructor(private eRef: ElementRef) { }

    writeValue(item: SelectOptionItem | null): void {
        if (typeof item === 'string') {
            this.selectedOption = this.options.filter((option) => option.value === item)[0]
            this.initialValue = item
        } else {
            this.selectedOption = item;
        }
    }

    registerOnChange(fn: any): void {
        this.onChanged = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    @HostListener('document:click', ['$event'])
    clickout(event: any) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.showDropdown = false;
        }
    }

    ngOnInit(): void {
        if (!this.selectedOption) this.selectedOption = this.options[this.options.length] ?? null;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes?.['options'])
            this.list.next(changes['options']['currentValue']);
        if (this.initialValue) {
            this.selectedOption = this.options.filter((option) => option.value === this.initialValue)[0]
            this.initialValue = null
        }
        if (changes?.['selectedIndex']) {
            this.selectedOption = this.options[changes['selectedIndex']['currentValue']];
            this.onChanged(this.selectedOption?.value);
        }
        if (changes?.['selectedValue']) {
            this.selectedIndex = Math.max(this.options.findIndex(option => option.value == changes['selectedValue']['currentValue']), 0);
            this.selectedOption = this.options.length > 0 ? this.options[this.selectedIndex] : null;
            this.onChanged(this.selectedOption?.value);
        }
    }

    filterList() {
        this.list.next(this.options);
    }

    toggleDropdown() {
        if (this.type == 'input' || this.disabled) return;
        this.showDropdown = !this.showDropdown;
        this.searchQuery = '';
        this.filterList();
    }

    optionChanged(event: any) {
        this.onTouched();
        // this.selectedOptionChange.emit(this.selectedOption);
        this.writeValue(event)
        this.onChanged(this.selectedOption?.value);
    }

    selectOption(item: SelectOptionItem) {
        this.onTouched();
        this.toggleDropdown();
        // this.selectedOptionChange.emit(item);
        this.writeValue(item)
        this.onChanged(item.value);
    }

    private filterMethod = (values: SelectOptionItem[]): SelectOptionItem[] => {
        if (Array.isArray(values))
            return values.filter(item => {
                return item.label.toLowerCase().includes(this.searchQuery.toLowerCase())
                    || item.value.toLowerCase().includes(this.searchQuery.toLowerCase())
                    || this.searchQuery == '';
            });
        else
            return [];
    }

}

export interface SelectOptionItem {
    label: string,
    value: string
}

export class DropdownConfig {
    search: boolean = true;
    searchPlaceholder?: string = 'Search';
    height?: string = 'auto';
    noResultsFound?: string = 'No results found!'
}
