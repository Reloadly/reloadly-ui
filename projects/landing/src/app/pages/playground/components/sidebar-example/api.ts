import { apiInterface } from '../../../../shared/components/api-table/models';

export const api: apiInterface[] = [
    {
        input: 'links',
        type: 'object',
        interface: "{[{label: 'About Us', link: 'about-us'}]}",
        required: true
    },
    {
        input: 'linkClicked',
        type: 'Method',
        description: 'Specify your custom method that will handle link click event',
    },
    {
        input: 'isHorizontal',
        type: 'boolean',
        description: 'Horizontal layout for the nav',
    },
    {
        input: 'isVertical',
        type: 'boolean',
        description: 'Vertical layout for the nav',
        default: true
    },
    {
        input: 'activeMenu',
        type: 'object',
        interface: "{[{label: 'About Us', link: 'about-us'}]}",
        description: 'Specify the default active link',
    }
]
