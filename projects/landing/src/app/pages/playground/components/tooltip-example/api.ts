import { apiInterface } from '../../../../shared/components/api-table/models';

export const api: apiInterface[] = [
    {
        input: 'position',
        type: 'string',
        default: "'top-center'",
        values: "'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center'"
    },
    {
        input: 'reloadly-tooltip',
        type: 'string',
        description: 'Tooltip content'
    }
]
