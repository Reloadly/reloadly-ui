import { apiInterface } from '../../../../shared/components/api-table/models';

export const api: apiInterface[] = [
    {
        input: 'size',
        type: 'string',
        default: 'medium',
        values: "'small' | 'medium'"
    },
    {
        input: 'type',
        type: 'string',
        default: 'default',
        values: "'default' | 'livemode'",
        description: 'Live mode has a orange background'
    },
    {
        input: 'labelPosition',
        type: 'string',
        default: 'before',
        values: "'before' | 'after'"
    },
    {
        input: 'label',
        type: 'string',
        description: 'Custom label for the input'
    },
    {
        input: 'description',
        type: 'string',
        description: 'Custom description for the input'
    },
    {
        input: 'toggle',
        type: 'boolean',
        default: 'false',
        description: 'Controls the status of the input, toggled/un-toggled'
    },
    {
        input: 'toggleChange',
        type: 'Event',
        description: 'Pass your custom method that will be triggered every time the switch will be toggled'
    }
]
