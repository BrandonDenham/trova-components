import { ReactNode, SyntheticEvent } from 'react';

export default interface MainNavigationProps {
    children: ReactNode;
    showItems?: boolean;
    onShowItems?: () => void;
    onDismissItems?: () => void;
    logoUrl: string;
    hasAlerts: boolean;
    visible?: boolean;
    onClickAlerts?: (event: SyntheticEvent | undefined) => void;
    profileImageUrl: string;
    onClickProfileImage?: (event: SyntheticEvent | undefined) => void;
    secondaryItems?: object;
    anchor?: boolean;
    className?: string;
}
