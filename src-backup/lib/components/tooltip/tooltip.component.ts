import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'reloadly-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

    @Input() text: string = ''
    left: number = 0;
    top: number = 0;
    right: number = 0;
    bottom: number = 0;
    class: string = ''

    ngOnInit(): void {
    }

}

