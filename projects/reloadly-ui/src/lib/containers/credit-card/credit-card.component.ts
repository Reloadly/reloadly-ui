import { Component, Input } from '@angular/core';

@Component({
    selector: 'reloadly-credit-card',
    templateUrl: './credit-card.component.html',
    styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent {
    @Input() holderName: string = '';
    @Input() cardNumber: string = '';
    @Input() expireMonth: number = 1;
    @Input() expireYear: number = 2023;
    @Input() visaProvider: 'VISA' | 'AMEX' | 'MASTERCARD' | 'DISCOVER' | 'DINERS' | 'JCB' | 'CHINA_UNION_PAY' | undefined;
    @Input() maskCardNumber = true;
    @Input() cardWidth: string = '384px';
    @Input() cardHeight: string = '225px';
    @Input() minify: boolean = false;
    get providerLogo(): string {
        switch (this.visaProvider) {
            case 'VISA':
                return 'visa-icon'
            case 'AMEX':
                return 'american-express'
            case 'CHINA_UNION_PAY':
                return 'union-pay'
            case 'DINERS':
                return 'diners'
            case 'DISCOVER':
                return 'discover';
            case 'JCB':
                return 'jcb'
            case 'MASTERCARD':
                return 'master-card'
            default:
                return 'visa'
        }
    }
}
