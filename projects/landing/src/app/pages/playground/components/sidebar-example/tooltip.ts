export const sidebarCode = [
    {
        name: 'vertical',
        code: {
            html: `<reloadly-sidebar [links]="links" (linkClicked)="linkClicked($event)"></reloadly-sidebar>`,
            ts: `links: Array<Item> = [
{
    label: 'Overview',
    link: ''
},
{
    label: 'API Keys',
    link: ''
},
{
    label: 'Webhooks',
    link: ''
},
{
    label: 'API Logs',
    link: ''
}]


linkClicked(item: Item) {
    console.log("item ", item);
    //navigate here (item.link)
}`
        }
    },
    {
        name: 'horizontal',
        code: {
            html: `<reloadly-sidebar [links]="altLinks" [isHorizontal]="true" [activeItem]="altLinks[1]" (linkClicked)="linkClicked($event)"></reloadly-sidebar>`,
            ts: `altLinks: Array<Item> = [
{
    label: 'Airtime',
    link: ''
},
{
    label: 'Giftcards',
    link: 'giftcards'
},
{
    label: 'Utility Payment',
    link: ''
},
{
    label: 'Payment History',
    link: ''
}]

linkClicked(item: Item) {
    console.log("item ", item);
    //navigate here (item.link)
}`
        }
    }
]
