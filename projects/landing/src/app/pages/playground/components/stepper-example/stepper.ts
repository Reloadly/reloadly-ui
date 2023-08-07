export const stepperCode = [
    {
        name: "stepper",
        code: {
            html: `<reloadly-stepper #stepper (finishedSteps)="printDone()">
    <reloadly-step>
        <div class="row">
            <h3 class="mb-4">Buttons</h3>
            <button reloadly-button class="mr-4 mt-4" [rounded]="true" [variant]="'filled'">
                Toggle Disable
            </button>

            <button reloadly-button class="mr-4 mt-4 custom-button-class" [rounded]="true"
                [variant]="'filled'">
                Filled
            </button>

            <button reloadly-button class="mr-4 mt-4 custom-button-class" [rounded]="true"
                [variant]="'outlined'">
                Outlined
            </button>
        </div>
    </reloadly-step>
    <reloadly-step>
        <div class="row">
            <h3 class="mb-4">Switch</h3>
            <reloadly-switch size="small" type="default" label="Label" description="Description"
                [toggle]="true"></reloadly-switch>

            <reloadly-switch size="small" type="default" label="Label" description="Description"
                [disabled]="true"></reloadly-switch>

            <reloadly-switch size="small" type="livemode" label="Label" description="Description"
                [toggle]="true"></reloadly-switch>
        </div>
    </reloadly-step>
    <reloadly-step>
        <div class="row">
            <h3 class="mb-4">Badges</h3>
            <span class="mr-4 mt-4 inline-block">
                <reloadly-badge [variant]="'positive'" [showIcon]="true">
                    Succeeded
                </reloadly-badge>
            </span>
            <span class="mr-4 mt-4 inline-block">
                <reloadly-badge [variant]="'negative'" [showIcon]="true">
                    Failed
                </reloadly-badge>
            </span>
            <span class="mr-4 mt-4 inline-block">
                <reloadly-badge [variant]="'warning'" [showIcon]="true">
                    Attention
                </reloadly-badge>
            </span>
        </div>
    </reloadly-step>
</reloadly-stepper>

<button reloadly-button [color]="'secondary'" class="ml-4 mt-4" (click)="prev()">Previous</button>
<button reloadly-button color="secondary" class="mr-4 mt-4" style="float:right"
    (click)="next()">Next</button>`,
            ts: `@ViewChild('stepper') stepper!: StepperComponent;

next() {
    this.stepper.moveToNext()
}

prev() {
    this.stepper.moveToPrevious()
}`
        }
    }
]
