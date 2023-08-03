import { Component } from '@angular/core';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeBoxModel, codeModel } from '../../../../shared/components/code-box/models';
import { CheckBoxValue, SelectOptionItem } from 'reloadly-ui';
import { FormControl, FormGroup } from '@angular/forms';
import { inputCode } from './input';
import { api } from './api';

@Component({
    selector: 'app-input-group-example',
    templateUrl: './input-group-example.component.html',
    styleUrls: ['./input-group-example.component.scss'],
})
export class InputGroupExampleComponent {
    inputCode = inputCode;
    date = new Date();
    api: apiInterface[] = api;
    options: SelectOptionItem[] = [
        { label: 'Option One', value: 'Option-1' },
        { label: 'Option Two', value: 'Option-2' },
        { label: 'Option Three', value: 'Option-3' },
        { label: 'Option Four', value: 'Option-4' }
    ];


    form!: FormGroup;
    controls!: { [k: string]: FormControl };
    checkboxesForm!: FormGroup;
    checkboxes!: { [k: string]: FormControl<boolean> };
    paymentForm!: FormGroup;
    payments!: { [k: string]: FormControl };


    constructor() {

    }

    ngOnInit(): void {
        this.controls = {
            url: new FormControl(),
            ip: new FormControl(),
            altIp: new FormControl({ value: '', disabled: true }),
            role: new FormControl({ value: '', disabled: true }),
            balance: new FormControl(),
            balancePercentage: new FormControl()
        }
        this.checkboxes = {
            acceptTerms: new FormControl(),
            endUserLicense: new FormControl(),
            newsletters: new FormControl(),
            notifications: new FormControl()
        }

        this.payments = {
            processor: new FormControl(),
            secKey: new FormControl(),
            authIp: new FormControl()
        }

        this.form = new FormGroup(this.controls);
        this.paymentForm = new FormGroup(this.payments);
        this.checkboxesForm = new FormGroup(this.checkboxes);
        this.form.addControl('checkboxes', this.checkboxesForm);
        this.form.addControl('payments', this.paymentForm);
    }

    getCodeSample(name: string): codeModel {
        return this.inputCode.filter((item: codeBoxModel) => name === item.name)[0].code
    }


    setRangeAmount(amount: number) {
        this.form.get('balance')?.setValue(amount);
    }

    setRangePercentage(percentage: number) {
        this.form.get('balancePercentage')?.setValue(percentage);
    }

    checkBoxClicked(box: CheckBoxValue | string): void {
        console.log(box);
    }
}
