import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReloadlyStepperComponent } from './stepper.component';

describe('ReloadlyStepperComponent', () => {
    let component: ReloadlyStepperComponent;
    let fixture: ComponentFixture<ReloadlyStepperComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ReloadlyStepperComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ReloadlyStepperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
