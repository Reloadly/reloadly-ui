import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-code-box',
    templateUrl: 'code-box.component.html',
    styleUrls: ['./code-box.component.scss']
})

export class CodeBoxComponent implements OnInit {
    codeViewOpen = false;
    disabled: boolean = false;
    dynamicClass: string = 'mr-4 mt-4 custom-button-class';
    tooltipTextCopy = 'Copy'
    tooltipTextCode = 'View code';
    @Input('code') code = ``;
    @Input('title') title = '';

    constructor() {

    }

    ngOnInit() { }

    getSectionId() {
        return this.title.replaceAll(" ", "-").toLowerCase();
    }

    copyCode(trigger: any) {
        this.copyToClipboard(this.code);
        this.tooltipTextCopy = 'Copied';

        setTimeout(() => {
            trigger.show();
        }, 200);

        setTimeout(() => {
            trigger.hide();
            this.tooltipTextCopy = 'Copy to clipboard';
        }, 1000);
    }

    copyToClipboard(value: string) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = value;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }

    toggleCodeView() {
        this.codeViewOpen = !this.codeViewOpen;

        this.tooltipTextCode = (this.codeViewOpen ? 'Hide ' : 'View ') + 'code';
    }
}
