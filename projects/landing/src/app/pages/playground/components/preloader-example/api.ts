import { apiInterface } from '../../../../shared/components/api-table/models';

export const api: apiInterface[] = [
    {
        input: 'variant',
        type: 'string',
        description: '3 variants for using the preloader component',
        values: '"v2" | "v3" | "v4"',
        required: false
    }
]
