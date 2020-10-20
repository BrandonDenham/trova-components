import { SyntheticEvent } from 'react';

export interface SidebarProps {
    children: object;
    visible?: boolean;
}

export interface SidebarItemProps {
    title: string;
    subtitle: string;
    statusText?: string;
    statusTextColor?: string;
    selected?: boolean;
    id?: string;
    onClick?: (SyntheticEvent: SyntheticEvent, id: string) => void;
}

export interface SidebarMenuProps {
    open?: boolean;
    onToggle?: (arg0: boolean) => boolean;
    title: string;
    children: object;
}
