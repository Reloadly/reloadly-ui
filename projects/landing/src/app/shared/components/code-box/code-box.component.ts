import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { codeModel } from './models';

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
    activeTab: string = 'html';
    @Input('code') code: codeModel = { html: '', ts: '' };
    @Input('title') title = '';
    selectedCodeSource: string = '';
    //@Output('sourceChange') sourceChange = new EventEmitter<string>();

    constructor() {

    }

    ngOnInit() {
        this.selectSource('html');
    }

    getSectionId() {
        return this.title.replaceAll(" ", "-").toLowerCase();
    }

    copyCode(trigger: any) {
        this.copyToClipboard(this.selectedCodeSource);
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

    selectSource(input: 'ts' | 'html') {
        //this.sourceChange.emit(input);
        this.activeTab = input;
        this.selectedCodeSource = this.code[input] || '';
    }
}
