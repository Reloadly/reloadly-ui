import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.scss']
})
export class CustomerServiceComponent {
  @Input() show = true;

}
