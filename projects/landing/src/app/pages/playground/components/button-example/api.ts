import { apiInterface } from '../../../../shared/components/api-table/models';

export const api: apiInterface[] = [
    {
        input: 'rounded',
        type: 'boolean',
        description: 'Specifies button corners'
    },
    {
        input: 'variant',
        type: 'string',
        values: '"filled" | "outlined" | "text" | "elevated" | "tonal"',
    },
    {
        input: 'color',
        type: 'string',
        values: '"primary" | "secondary" | "white" | "danger"',
    },
    {
        input: 'size',
        type: 'string',
        values: '"xs" | "sm" | "lg" | "xl"',
    },
    {
        input: 'disabled',
        type: 'boolean',
        values: 'true | false',
    }
]
