export const selectCode = [
    {
        name: 'small',
        code: {
            html: `<reloadly-select [options]="options" size="small"></reloadly-select>`,
            ts: `options: SelectOptionItem[] = [
            { label: 'Option One', value: 'Option-1' },
            { label: 'Option Two', value: 'Option-2' },
            { label: 'Option Three', value: 'Option-3' },
            { label: 'Option Four', value: 'Option-4' }
        ];`
        }
    },
    {
        name: 'medium',
        code: {
            html: `<reloadly-select [options]="options"></reloadly-select>`
        }
    },
    {
        name: 'large',
        code: {
            html: `<reloadly-select [options]="options" size="large"></reloadly-select>`
        }
    },
    {
        name: 'input',
        code: {
            html: `<reloadly-select [options]="options" type="input"></reloadly-select>`
        }
    },
    {
        name: 'dropdown',
        code: {
            html: `<reloadly-select [options]="options" type="dropdown"></reloadly-select>`
        }
    },
    {
        name: 'error',
        code: {
            html: `<reloadly-select [options]="options" [error]="true" size="large" type="dropdown"></reloadly-select>`
        }
    },
    {
        name: 'disabled',
        code: {
            html: `<reloadly-select [options]="options" [disabled]="true" size="large" type="dropdown"></reloadly-select>`
        }
    }
]
