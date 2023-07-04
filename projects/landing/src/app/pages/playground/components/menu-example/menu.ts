export const menuCode = [
    {
        name: "menu",
        code: `<button class="mr-4 mt-4" reloadly-button #menuTrigger [reloadly-menu]="menu">
    Menu
</button>

<ng-template #menu>
    <reloadly-menu [trigger]="menuTrigger">
        <button (click)="action()" reloadly-menu-item>Edit</button>
    </reloadly-menu>
</ng-template>`
    },
    {
        name: 'dividerMenu',
        code: `<button class="mr-4 mt-4" reloadly-button #dividerMenuTrigger [reloadly-menu]="dividerMenu">
    Menu with divider
</button>
<ng-template #dividerMenu>
    <reloadly-menu [trigger]="dividerMenuTrigger">
        <button reloadly-menu-item>
            Available Item 1
        </button>
        <button reloadly-menu-item>
            Available Item 2
        </button>
        <button reloadly-menu-item>
            Available Item 3
        </button>
        <reloadly-menu-divider></reloadly-menu-divider>
        <button reloadly-menu-item>
            Available Item 3
        </button>
        <button reloadly-menu-item>
            Available Item 4
        </button>
        <button reloadly-menu-item>
            Available Item 6
        </button>
    </reloadly-menu>
</ng-template>`
    },
    {
        name: 'sectionMenu',
        code: `<button class="mr-4 mt-4" reloadly-button #sectionMenuTrigger [reloadly-menu]="sectionMenu">
    Menu with section
</button>
<ng-template #sectionMenu>
    <reloadly-menu [trigger]="sectionMenuTrigger">
        <reloadly-menu-section>
            Section 1
        </reloadly-menu-section>
        <button reloadly-menu-item>
            Available action 1
        </button>
        <button reloadly-menu-item>
            Available action 2
        </button>
        <button reloadly-menu-item>
            Available action 3
        </button>
        <reloadly-menu-divider></reloadly-menu-divider>
        <reloadly-menu-section>
            Section 2
        </reloadly-menu-section>
        <button reloadly-menu-item>
            Available action 5
        </button>
        <button reloadly-menu-item>
            Available action 6
        </button>
        <button reloadly-menu-item>
            Available action 7
        </button>
    </reloadly-menu>
</ng-template>`
    }
]
