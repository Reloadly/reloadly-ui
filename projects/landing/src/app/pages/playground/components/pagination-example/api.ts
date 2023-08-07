import { apiInterface } from '../../../../shared/components/api-table/models';

export const api: apiInterface[] = [
    {
        input: 'changePage',
        type: 'Event',
        description: 'Pass your own method that will handle the page count and refreshing the data',
        required: true
    },
    {
        input: 'page',
        type: 'number',
        description: 'Current page',
        required: true
    },
    {
        input: 'size',
        type: 'number',
        required: true,
        description: 'The number of items to display on each page.'
    },
    {
        input: 'total',
        type: 'number',
        description: 'The total number of items in the collection.'
    },

]
