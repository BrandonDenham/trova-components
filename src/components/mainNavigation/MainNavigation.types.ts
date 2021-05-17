import { ReactElement, ReactNode, SyntheticEvent } from 'react';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';
import { MenuItem } from '../menu';

export default interface MainNavigationProps extends SimpleComponent {
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
    menuItems?: Array<ReactElement<typeof MenuItem>>;
}
