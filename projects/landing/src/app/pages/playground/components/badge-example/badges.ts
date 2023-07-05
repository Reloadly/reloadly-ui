export const badgesCode = [
    {
        name: "badges",
        code: `<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'neutral'">
        Neutral
    </reloadly-badge>
</span>
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'info'">
        Info
    </reloadly-badge>
</span>
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'positive'">
        Positive
    </reloadly-badge>
</span>
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'warning'">
        Warning
    </reloadly-badge>
</span>
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'negative'">
        Negative
    </reloadly-badge>
</span>
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'urgent'">
        Urgent
    </reloadly-badge>
</span>`
    },
    {
        name: 'defaultIcons',
        code: `<span class="mr-4 mt-4 inline-block">
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
</span>`
    },
    {
        name: 'customIcons',
        code: `<!-- *****NEUTRAL WITH ICON******* -->
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'neutral'">
        <div class="example-icon mr-1">
            <svg>
                <use xlink:href="#info-badge-neutral"></use>
            </svg>
        </div>
        Neutral
    </reloadly-badge>
</span>
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'neutral'">
        Neutral
        <div class="example-icon ml-1">
            <svg>
                <use xlink:href="#info-badge-neutral"></use>
            </svg>
        </div>
    </reloadly-badge>
</span>

<!-- *****INFO WITH ICON******* -->
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'info'">
        <div class="example-icon mr-1">
            <svg>
                <use xlink:href="#info-badge-info"></use>
            </svg>
        </div>
        Info
    </reloadly-badge>
</span>
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'info'">
        Info
        <div class="example-icon ml-1">
            <svg>
                <use xlink:href="#info-badge-info"></use>
            </svg>
        </div>
    </reloadly-badge>
</span>

<!-- *****POSITIVE WITH ICON******* -->
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'positive'">
        <div class="example-icon mr-1">
            <svg>
                <use xlink:href="#info-badge-positive"></use>
            </svg>
        </div>
        Positive
    </reloadly-badge>
</span>
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'positive'">
        Positive
        <div class="example-icon ml-1">
            <svg>
                <use xlink:href="#info-badge-positive"></use>
            </svg>
        </div>
    </reloadly-badge>
</span>

<!-- *****WARNING WITH ICON******* -->
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'warning'">
        <div class="example-icon mr-1">
            <svg>
                <use xlink:href="#info-badge-warning"></use>
            </svg>
        </div>
        Warning
    </reloadly-badge>
</span>
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'warning'">
        Warning
        <div class="example-icon ml-1">
            <svg>
                <use xlink:href="#info-badge-warning"></use>
            </svg>
        </div>
    </reloadly-badge>
</span>

<!-- *****NEGATIVE WITH ICON******* -->
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'negative'">
        <div class="example-icon mr-1">
            <svg>
                <use xlink:href="#info-badge-negative"></use>
            </svg>
        </div>
        Negative
    </reloadly-badge>
</span>
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'negative'">
        Negative
        <div class="example-icon ml-1">
            <svg>
                <use xlink:href="#info-badge-negative"></use>
            </svg>
        </div>
    </reloadly-badge>
</span>

<!-- *****URGENT WITH ICON******* -->
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'urgent'">
        <div class="example-icon mr-1">
            <svg>
                <use xlink:href="#info-badge-urgent"></use>
            </svg>
        </div>
        Urgent
    </reloadly-badge>
</span>
<span class="mr-4 mt-4 inline-block">
    <reloadly-badge [variant]="'urgent'">
        Urgent
        <div class="example-icon ml-1">
            <svg>
                <use xlink:href="#info-badge-urgent"></use>
            </svg>
        </div>
    </reloadly-badge>
</span>`
    }
]
