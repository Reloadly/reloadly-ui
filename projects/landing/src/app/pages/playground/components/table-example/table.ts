export const tooltipCode = [
    {
        name: 'table',
        code: {
            html: `<table reloadly-table>
    <thead>
        <tr class="border-b border-gray-200">
            <th>
                Amount
            </th>
            <th>
                Status
            </th>
            <th>
                Transaction
            </th>
            <th>
                Ip
            </th>
            <th>
                Time
            </th>
            <th>

            </th>

        </tr>
    </thead>
    <tbody>
        <tr *ngFor="let log of [1,1,1]">
            <td class="amount-column">
                {{log}}
            </td>
            <td>
                <reloadly-badge [variant]="'positive'" *ngIf="log==1" [showIcon]="true">
                    Succeeded
                </reloadly-badge>
                <reloadly-badge [variant]="'negative'" *ngIf="log==2" [showIcon]="true">
                    Failed
                </reloadly-badge>
                <reloadly-badge [variant]="'warning'" *ngIf="log==3" [showIcon]="true">
                    Attention
                </reloadly-badge>
            </td>
            <td>
                {{log}}
            </td>
            <td>
                {{log}}
            </td>
            <td>
                {{log}}
            </td>
            <td>
                <button reloadly-button color="white" size='xs' variant="text">
                    <svg class="more-icon">
                        <use xlink:href="#more"></use>
                    </svg>
                </button>
            </td>
        </tr>
    </tbody>
</table>`
        }
    }
]
