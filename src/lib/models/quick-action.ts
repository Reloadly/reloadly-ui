export enum QuickActionType { success = 'success', caution = 'caution', critical = 'critical', default = 'default' }
export enum QuickActionPosition { bottomLeft = 'bottomLeft', bottomRight = 'bottomRight', topLeft = 'topLeft', topRight = 'topRight' };

export interface QuickActionInterface {
    referenceId?: string;
    title?: string;
    message: string;
    type?: QuickActionType;
    actionText?: string;
    position?: QuickActionPosition;
    onActionClick?: (self: QuickAction) => void;
    autoDismiss?: boolean;
    dismissTimeout?: number;
    autoDismissTimeout?: number;
}
export class QuickAction implements QuickActionInterface {
    referenceId?: string | undefined;
    title?: string | undefined;
    message: string;
    type?: QuickActionType | undefined;
    actionText?: string | undefined;
    position?: QuickActionPosition | undefined;
    onActionClick?: ((self: QuickAction) => void) | undefined;
    autoDismiss?: boolean | undefined;
    dismissTimeout?: number | undefined;
    autoDismissTimeout?: number | undefined;
    transitioning = true;

    constructor(actionConstruct: QuickActionInterface) {
        this.message = actionConstruct.message;
        this.title = actionConstruct.title;
        this.referenceId = actionConstruct.referenceId ?? this.generateRefId();
        this.type = actionConstruct.type;
        this.actionText = actionConstruct.actionText;
        this.autoDismiss = actionConstruct.autoDismiss;
        this.dismissTimeout = actionConstruct.dismissTimeout;
        this.position = actionConstruct.position;
        this.onActionClick = actionConstruct.onActionClick;
        this.autoDismissTimeout = actionConstruct.autoDismissTimeout;
        setTimeout(() => {
            this.toggleTransition();
        }, this.dismissTimeout ?? 500);
    }

    /**
     * Toggles the transition state of the quick action
     * @memberof QuickAction
     */
    toggleTransition() {
        this.transitioning = !this.transitioning;
    }

    /**
     * Generates a random reference id
     * @private
     * @param {number} [length=16]
     * @return {*}  {string}
     * @memberof QuickAction
     */
    private generateRefId(length: number = 16): string {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }
}
