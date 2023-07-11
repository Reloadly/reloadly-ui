export const buttonsCode = [
    {
        name: "buttons",
        code: {
            html: `<button reloadly-button (click)="disabled=!disabled" class="mr-4 mt-4" [rounded]="true"
    [variant]="'filled'">
    Toggle Disable
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [rounded]="true" [variant]="'filled'"
    [disabled]="disabled">
    Filled
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [rounded]="true" [variant]="'outlined'"
    [disabled]="disabled">
    Outlined
</button>

<button reloadly-button [class]="dynamicClass" [rounded]="true" [variant]="'text'" [disabled]="disabled">
    Text
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [rounded]="true" [variant]="'elevated'"
    [disabled]="disabled">
    Elevated
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [rounded]="true" [variant]="'tonal'"
    [disabled]="disabled">
    Tonal
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class-xl" [size]="'xl'" [color]="'primary'"
    [rounded]="false" [variant]="'filled'" [disabled]="disabled">
    Rectangular Xl
</button>`
        }
    },
    {
        name: 'secondaryButtons',
        code: {
            html: `<button reloadly-button class="mr-4 mt-4 custom-button-class-xl" [size]="'xl'" [color]="'secondary'"
    [rounded]="false" [variant]="'filled'" [disabled]="disabled">
    Rectangular Xl
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'secondary'" [rounded]="true"
    [variant]="'filled'" [disabled]="disabled">
    Filled
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'secondary'" [rounded]="true"
    [variant]="'outlined'" [disabled]="disabled">
    Outlined
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'secondary'" [rounded]="true"
    [variant]="'text'" [disabled]="disabled">
    Text
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'secondary'" [rounded]="true"
    [variant]="'elevated'" [disabled]="disabled">
    Elevated
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'secondary'" [rounded]="true"
    [variant]="'tonal'" [disabled]="disabled">
    Tonal
</button>`
        }
    },
    {
        name: 'dangerButtons',
        code: {
            html: `<button reloadly-button class="mr-4 mt-4 custom-button-class-xl" [size]="'xl'" [color]="'danger'"
    [rounded]="false" [variant]="'filled'" [disabled]="disabled">
    Rectangular Xl
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'danger'" [rounded]="true"
    [variant]="'filled'" [disabled]="disabled">
    Filled
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'danger'" [rounded]="true"
    [variant]="'outlined'" [disabled]="disabled">
    Outlined
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'danger'" [rounded]="true"
    [variant]="'text'" [disabled]="disabled">
    Text
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'danger'" [rounded]="true"
    [variant]="'elevated'" [disabled]="disabled">
    Elevated
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'danger'" [rounded]="true"
    [variant]="'tonal'" [disabled]="disabled">
    Tonal
</button>`
        }
    },
    {
        name: 'whiteButtons',
        code: {
            html: `<button reloadly-button class="mr-4 mt-4 custom-button-class-xl" [size]="'xl'" [color]="'white'"
    [rounded]="false" [variant]="'filled'" [disabled]="disabled">
    Rectangular Xl
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'white'" [rounded]="true"
    [variant]="'filled'" [disabled]="disabled">
    Filled
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'white'" [rounded]="true"
    [variant]="'outlined'" [disabled]="disabled">
    Outlined
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'white'" [rounded]="true"
    [variant]="'text'" [disabled]="disabled">
    Text
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'white'" [rounded]="true"
    [variant]="'elevated'" [disabled]="disabled">
    Elevated
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [color]="'white'" [rounded]="true"
    [variant]="'tonal'" [disabled]="disabled">
    Tonal
</button>`
        }
    },
    {
        name: 'smallButtons',
        code: {
            html: `<button reloadly-button class="mr-4 mt-4" [size]="'xs'" [color]="'primary'" [rounded]="false"
    [variant]="'filled'" [disabled]="disabled">
    Button
</button>

<button reloadly-button class="mr-4 mt-4" [size]="'xs'" [color]="'white'" [rounded]="false"
    [variant]="'filled'" [disabled]="disabled">
    Button
</button>

<button reloadly-button class="mr-4 mt-4" [size]="'xs'" [color]="'danger'" [rounded]="false"
    [variant]="'filled'" [disabled]="disabled">
    Button
</button>

<button reloadly-button class="mr-4 mt-4" [size]="'xs'" [color]="'primary'" [rounded]="false"
    [variant]="'outlined'" [disabled]="disabled">
    Button
</button>`
        }
    },
    {
        name: 'iconButtons',
        code: {
            html: `<button reloadly-button class="mr-4 mt-4 custom-button-class" [rounded]="true" [variant]="'filled'"
    [disabled]="disabled">
    <div class="example-icon">
        <svg>
            <use xlink:href="#plus-icon"></use>
        </svg>
    </div>
    <span class="ml-auto mr-auto">
        Filled
    </span>
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [rounded]="true" [variant]="'outlined'"
    [disabled]="disabled">
    <div class="example-icon">
        <svg>
            <use xlink:href="#plus-icon"></use>
        </svg>
    </div>
    <span class="ml-auto mr-auto">
        Outlined
    </span>
</button>

<!-- ******DYNAMIC CLASS EXAMPLE****** -->
<button reloadly-button [class]="dynamicClass" [rounded]="true" [variant]="'text'" [disabled]="disabled">
    <div class="example-icon">
        <svg>
            <use xlink:href="#plus-icon"></use>
        </svg>
    </div>
    <span class="ml-auto mr-auto">
        Text
    </span>
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [rounded]="true" [variant]="'elevated'"
    [disabled]="disabled">
    <div class="example-icon">
        <svg>
            <use xlink:href="#plus-icon"></use>
        </svg>
    </div>
    <span class="ml-auto mr-auto">
        Elevated
    </span>
</button>

<button reloadly-button class="mr-4 mt-4 custom-button-class" [rounded]="true" [variant]="'tonal'"
    [disabled]="disabled">
    <div class="example-icon">
        <svg>
            <use xlink:href="#plus-icon"></use>
        </svg>
    </div>
    <span class="ml-auto mr-auto">
        Tonal
    </span>
</button>

<button reloadly-button class="mr-4 mt-4" [size]="'xs'" [color]="'primary'" [rounded]="false"
    [variant]="'filled'" [disabled]="disabled">
    <span class="ml-auto mr-auto">
        Button
    </span>
    <div class="example-icon-alt ml-1">
        <svg>
            <use xlink:href="#plus-icon-rounded-white"></use>
        </svg>
    </div>
</button>`
        }
    }
]
