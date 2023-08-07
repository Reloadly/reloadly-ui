import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { apiInterface } from '../../../../shared/components/api-table/models';
import { codeModel } from '../../../../shared/components/code-box/models';
import { StepperComponent } from 'reloadly-ui';
import { stepperCode } from './stepper';
import { apiStepper } from './api';

@Component({
    selector: 'app-stepper-example',
    templateUrl: './stepper-example.component.html'
})
export class StepperExampleComponent implements AfterViewInit {
    @ViewChild('stepper') stepper!: StepperComponent;
    private forward = true;

    stepperCode = stepperCode;
    apiStepper: apiInterface[] = apiStepper;

    ngAfterViewInit(): void {
        //setInterval(() => this.forward = !this.forward, 10000);
        //setInterval(() => this.forward ? this.stepper.moveToNext() : this.stepper.moveToPrevious(), 1000);
    }

    next() {
        this.stepper.moveToNext()
    }

    prev() {
        this.stepper.moveToPrevious()
    }

    printDone(): void {
        console.log('Stepper reached end'); //@TODO: this output event is not working
    }

    getCodeSample(): codeModel {
        return this.stepperCode[0].code
    }
}
