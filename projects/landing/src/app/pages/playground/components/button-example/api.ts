import { apiInterface } from '../../../../shared/components/api-table/models';

export const api: apiInterface[] = [
    {
        input: 'rounded',
        type: 'boolean',
        description: 'Specifies button corners',
        default: false
    },
    {
        input: 'variant',
        type: 'string',
        values: '"filled" | "outlined" | "text" | "elevated" | "tonal"',
        default: 'filled'
    },
    {
        input: 'color',
        type: 'string',
        values: '"primary" | "secondary" | "white" | "danger"',
        default: 'primary'
    },
    {
        input: 'size',
        type: 'string',
        values: '"xs" | "sm" | "lg" | "xl"',
        default: 'lg'
    }
]
