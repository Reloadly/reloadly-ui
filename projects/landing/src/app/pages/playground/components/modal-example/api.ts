import { apiInterface } from '../../../../shared/components/api-table/models';

export const api: apiInterface[] = [
    {
        input: 'variant',
        type: 'string',
        values: '"neutral" | "info" | "positive" | "warning" | "negative" | "urgent"',
        default: 'neutral'
    }
]
