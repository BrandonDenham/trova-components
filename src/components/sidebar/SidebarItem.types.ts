import { SyntheticEvent } from 'react';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface SidebarItemProps extends SimpleComponent {
    title: string;
    subtitle: string;
    statusText?: string;
    statusTextColor?: string;
    selected?: boolean;
    id?: string;
    onClick?: (SyntheticEvent: SyntheticEvent, id: string | undefined) => void;
}