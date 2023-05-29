import { AfterViewInit, Component, ViewChild } from '@angular/core';
//import { StepperComponent } from '../../../../../../src/lib/containers/stepper/stepper.component'; @TODO: something is not good here

@Component({
    selector: 'app-stepper-example',
    templateUrl: './stepper-example.component.html'
})
export class StepperExampleComponent implements AfterViewInit {
    //@ViewChild('stepper') stepper!: StepperComponent;
    private forward = true;

    ngAfterViewInit(): void {
        setInterval(() => this.forward = !this.forward, 10000);
        //setInterval(() => this.forward ? this.stepper.moveToNext() : this.stepper.moveToPrevious(), 1000);
    }

    printDone(): void {
        console.log('Stepper reached end');
    }
}
