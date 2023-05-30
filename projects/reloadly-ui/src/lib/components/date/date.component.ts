import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'reloadly-date',
    templateUrl: './date.component.html',
    styleUrls: ['./date.component.scss']
})
export class DateComponent {
    formattedDate: string = '';
    @Input() disabled: boolean = false;
    @Input() hasError: boolean = false;
    @Input() size: InputSize = 'medium';
    @Input() date!: Date;
    @Output() dateChanged: EventEmitter<any> = new EventEmitter();
    constructor() { }

    ngOnChanges() {
        if (this.date) {
            console.log('yes')
            this.formattedDate = this.formatDate()
        }
    }

    formatDate() {
        const yyyy = this.date.getFullYear();
        let mm:any = this.date.getMonth() + 1;
        let dd:any = this.date.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return yyyy + '/' + mm + '/' + dd;
    }

    checkFormat(event: any) {
        return (/[\d.]/.test(event.key));
    }

    valueChanged(newDate: string) {
        let oldDate = this.formattedDate.replaceAll('/', '');
        newDate = newDate.replaceAll('/', '');

        if (newDate.length < 4) {
            this.formattedDate = newDate;
            return;
        }
        if (newDate.length == 4 && newDate.length > oldDate.length) {
            this.formattedDate = `${newDate}/`;
            return;
        }
        if (newDate.length < 6) {
            this.formattedDate = `${newDate.slice(0, 4)}/${newDate.slice(4)}`;
            return;
        }
        if (newDate.length == 6 && newDate.length > oldDate.length) {
            this.formattedDate = `${newDate.slice(0, 4)}/${newDate.slice(4)}/`;
            return;
        }
        if (newDate.length < 8) {
            this.formattedDate = `${newDate.slice(0, 4)}/${newDate.slice(4, 6)}/${newDate.slice(6)}`;
            return;
        }

        this.formattedDate = `${newDate.slice(0, 4)}/${newDate.slice(4, 6)}/${newDate.slice(6)}`;
        if (!this.checkDateIsValid()) {
            this.hasError = true;
            return;
        }
        this.hasError = false;
        this.date = new Date(this.formattedDate);
        this.dateChanged.emit(this.date)

    }

    checkDateIsValid() {
        let month = parseInt(this.formattedDate.split('/')[1]);
        if (month > 12) return false;

        let day = parseInt(this.formattedDate.split('/')[2]);
        if (day > 31) return false;

        return true;
    }

}

type InputSize = 'small' | 'medium' | 'large'
