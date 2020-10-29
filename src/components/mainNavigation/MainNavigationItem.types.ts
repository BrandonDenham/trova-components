import { SyntheticEvent } from 'react';

export default interface MainNavigationItemProps {
    content: string;
    selected?: boolean;
    id?: string;
    onClick?: (SyntheticEvent: SyntheticEvent, id: string|undefined) => void;
}
