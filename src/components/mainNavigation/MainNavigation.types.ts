import { SyntheticEvent } from 'react';

export default interface MainNavigationProps {
    children: object;
    showItems?: boolean;
    onShowItems?: (arg0: boolean) => boolean;
    onDismissItems?: (arg0: boolean) => boolean;
    logoUrl: string;
    hasAlerts: boolean;
    visible?: boolean;
    onClickAlerts?: (SyntheticEvent: SyntheticEvent|undefined) => void;
    profileImageUrl: string;
    onClickProfileImage?: (SyntheticEvent: SyntheticEvent|undefined) => void;
    secondaryItems?: object;
    anchor?: boolean;
}
