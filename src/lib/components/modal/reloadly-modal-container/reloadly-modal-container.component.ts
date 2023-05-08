import { Component, ComponentRef, ElementRef, HostListener, Injector, OnDestroy, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { ReloadlyModal } from '../reloadly-modal';
import { ReloadlyDialogRef } from '../reloadly-dialog-ref';

@Component({
  selector: 'reloadly-modal-container',
  templateUrl: './reloadly-modal-container.component.html',
  styleUrls: ['./reloadly-modal-container.component.scss']
})
export class ReloadlyModalContainerComponent implements OnDestroy {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('hostingComponent', { read: ViewContainerRef, static: true })
  hostingComponent !: ViewContainerRef;
  dialogRef !: ReloadlyDialogRef;

  constructor(private renderer: Renderer2) { }

  @HostListener('document:keydown.escape', ['$event']) onEscapeKey(event: KeyboardEvent) {
    if (this.dialogRef)
      this.dialogRef.closeDialog();
  }

  showDialog(componentClass: any, dialogRef: ReloadlyDialogRef, injector: Injector): void {
    if (this.hostingComponent.createComponent(componentClass, { injector }))
      this.dialogRef = dialogRef;
  }

  playDismissAnimation(): void {
    this.renderer.removeClass(this.wrapper.nativeElement, 'rld-dialog-in');
    void this.wrapper.nativeElement.offsetWidth; // important for DOM reflow recalculation
    this.renderer.addClass(this.wrapper.nativeElement, 'rld-dialog-out');
  }

  ngOnDestroy(): void {
    this.hostingComponent.clear();
  }
}
