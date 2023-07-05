import { apiInterface } from '../../../../shared/components/api-table/models';

export const api: apiInterface[] = [
    {
        input: 'size',
        type: 'string',
        default: 'medium',
        values: "'small' | 'medium' | 'large'"
    },
    {
        input: 'hasError',
        type: 'boolean',
        default: 'false',
    }
]
