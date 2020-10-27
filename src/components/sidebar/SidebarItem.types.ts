import { SyntheticEvent } from 'react';

export default interface SidebarItemProps {
    title: string;
    subtitle: string;
    statusText?: string;
    statusTextColor?: string;
    selected?: boolean;
    id?: string;
    onClick?: (SyntheticEvent: SyntheticEvent, id: string|undefined) => void;
}