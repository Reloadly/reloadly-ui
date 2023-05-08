import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { inputText } from 'src/lib/utils/domHelpers';
import { AppFormModule } from '../form.module';
import { RangeSliderComponent } from '../range-slider/range-slider.component';

import { FormExampleComponent } from './form-example.component';

describe('FormExampleComponent', () => {
  let component: FormExampleComponent;
  let fixture: ComponentFixture<FormExampleComponent>;
  let el: DebugElement, form: DebugElement;
  let componentSpy: jasmine.Spy<() => void>;

  let urlInput: HTMLInputElement,
    ipInput: HTMLInputElement,
    altIp: HTMLInputElement,
    paymentProcessor: HTMLSelectElement,
    secretKey: HTMLInputElement,
    authIp: HTMLTextAreaElement,
    role: HTMLSelectElement,
    slider: RangeSliderComponent,
    button: HTMLButtonElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormExampleComponent],
      imports: [AppFormModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FormExampleComponent);
    component = fixture.componentInstance;
    componentSpy = spyOn(component, 'submit');
    el = fixture.debugElement;
    form = el.query(By.css('form[data-select="test"]'));

    urlInput = form.query(By.css('#url')).nativeElement;
    ipInput = form.query(By.css('#ip')).nativeElement;
    altIp = form.query(By.css('#alt-ip')).nativeElement;
    paymentProcessor = form.query(By.css('#payment-processor')).nativeElement;
    secretKey = form.query(By.css('#secret-key')).nativeElement;
    authIp = form.query(By.css('#auth-ip')).nativeElement;
    role = form.query(By.css('#role')).nativeElement;
    slider = form.query(By.directive(RangeSliderComponent)).componentInstance;
    button = form.query(By.css('#submit-button')).nativeElement;

    fixture.detectChanges();
  });

  it('should create a form', () => {
    expect(component).toBeTruthy();
  });

  it('should accept inputs', fakeAsync(() => {
    inputText(urlInput, 'https://www.relodly.com');
    inputText(ipInput, '127.0.0.1');
    inputText(altIp, '127.0.0.1');
    inputText(secretKey, 'xxxxxx');
    inputText(authIp, 'textarea input');

    paymentProcessor.value = 'stripe/flutterwave';
    paymentProcessor.dispatchEvent(new Event('change'));
    role.value = 'admin';
    role.dispatchEvent(new Event('change'));

    const sliderMax = slider.max;
    inputText(slider.input.nativeElement, sliderMax.toString());

    tick();
    fixture.detectChanges();

    // test range slider
    let values = component.form.value;
    expect(values['balance']).toBe(sliderMax);
    expect(values['balancePercentage']).toBe(100);
    inputText(slider.input.nativeElement, Math.round(sliderMax / 4).toString());
    tick();
    fixture.detectChanges();
    values = component.form.value;
    const divide = Math.round(sliderMax / 4);
    expect(values['balance']).toBe(divide);
    expect(values['balancePercentage']).toBe(Math.round((divide / sliderMax) * 100));

    button.click();

    expect(values).toEqual({
      url: 'https://www.relodly.com',
      ip: '127.0.0.1',
      balance: 23,
      balancePercentage: 26,
      payments: {
        processor: 'stripe/flutterwave',
        secKey: 'xxxxxx',
        authIp: 'textarea input'
      }
    });
    expect(component.submit).toHaveBeenCalledTimes(1);
  }));

  it('should disable input when set to disabled', () => {
    component.controls['url'].disable();
    component.controls['ip'].disable();
    component.controls['altIp'].disable();
    component.controls['role'].disable();
    component.controls['balance'].disable();
    component.controls['balancePercentage'].disable();
    component.payments['processor'].disable();
    component.payments['secKey'].disable();
    component.payments['authIp'].disable();
    slider.disabled = true;

    fixture.detectChanges();

    expect(urlInput.disabled).toBeTruthy();
    expect(urlInput.matches(':disabled')).toBeTruthy();
    expect(ipInput.disabled).toBeTruthy();
    expect(ipInput.matches(':disabled')).toBeTruthy();
    expect(altIp.disabled).toBeTruthy();
    expect(altIp.matches(':disabled')).toBeTruthy();
    expect(paymentProcessor.disabled).toBeTruthy();
    expect(paymentProcessor.matches(':disabled')).toBeTruthy();
    expect(secretKey.disabled).toBeTruthy();
    expect(secretKey.matches(':disabled')).toBeTruthy();
    expect(authIp.disabled).toBeTruthy();
    expect(authIp.matches(':disabled')).toBeTruthy();
    expect(role.disabled).toBeTruthy();
    expect(role.matches(':disabled')).toBeTruthy();
    expect(slider.disabled).toBeTruthy();
    expect(slider.input.nativeElement.matches(':disabled')).toBeTruthy();
  })
});
