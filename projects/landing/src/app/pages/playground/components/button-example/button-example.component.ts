import { Component } from '@angular/core';

@Component({
    selector: 'app-button-example',
    templateUrl: './button-example.component.html',
    styleUrls: ['./button-example.component.scss'],
})
export class ButtonExampleComponent {
    disabled: boolean = false;
    dynamicClass: string = 'mr-4 mt-4 custom-button-class';
    //code: string = `<button reloadly-button (click)="disabled=!disabled" class="mr-4 mt-4" [rounded]="true" [variant]="'filled'">Toggle Disable</button>`;
    code = `   curl --location
    --request POST 'https://topups.reloadly.com/topups'
    --header 'Authorization: Bearer YOUR_ACCESS_TOKEN_HERE'
    --header 'Accept: application/com.reloadly.topups-v1+json'
    --header 'Content-Type: application/json'
    --data-raw '{
      "operatorId":"341",
      "amount":"10",
      "useLocalAmount": false,
      "customIdentifier": "This is example identifier 092",
      "recipientPhone": {
          "countryCode": "NG",
          "number": "08147658721"
      },
      "senderPhone": {
          "countryCode": "CA",
          "number": "1231231231"
      }
    }'`
}
