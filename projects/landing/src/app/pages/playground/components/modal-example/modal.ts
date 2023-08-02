export const menuCode = [
    {
        name: "menu",
        code: {
            html: `<button class="mr-4 mt-4" (click)="openModal()">
    Open modal
</button>`,
            ts: `import { ReloadlyModal } from 'reloadly-ui';

constructor(
    private modal: ReloadlyModal
) {}

openModal() {
    const dialog = this.modal.openDialog(ConfirmationDialogComponent, {
        data: 'Hello from my modal'
    });
    dialog.onAccept$.subscribe(() => {
        const resp = dialog.getCustomSharedData<{ resp: string }>().getValue();
        console.log(resp);
    });
}`
        }
    }
]
