export enum QuickActionType { success = 'success', caution = 'caution', critical = 'critical', default = 'default' }
export enum QuickActionPosition { bottomLeft = 'bottomLeft', bottomRight = 'bottomRight', topLeft = 'topLeft', topRight = 'topRight' };

export interface QuickAction {
    referenceId?: string;
    title?: string;
    message: string;
    type?: QuickActionType;
    actionText?: string;
    position?: QuickActionPosition;
    onActionClick?: (self: QuickAction) => void;
}
