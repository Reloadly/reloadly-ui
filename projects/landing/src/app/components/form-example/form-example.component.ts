import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CheckBoxValue } from '../../../../../reloadly-ui/src/lib/form/checkbox/checkbox.component';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit {
  form!: FormGroup;
  controls!: { [k: string]: FormControl };
  checkboxesForm!: FormGroup;
  checkboxes!: { [k: string]: FormControl<boolean> };
  paymentForm!: FormGroup;
  payments!: { [k: string]: FormControl };

  constructor() { }

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

  submit(): void {
    console.log(this.form.value);
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
