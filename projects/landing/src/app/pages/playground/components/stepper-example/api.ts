import { apiInterface } from '../../../../shared/components/api-table/models';

export const apiStepper: apiInterface[] = [
    {
        input: 'showBullets',
        type: 'boolean',
        default: true,
        description: 'Controls whether to show navigation bullets or not.'
    },
    {
        input: '(reachedLastStep)',
        type: 'Event',
    },
    {
        input: '(finishedSteps)',
        type: 'Event',
    }
]
