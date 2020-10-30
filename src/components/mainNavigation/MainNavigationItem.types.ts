import { SyntheticEvent } from 'react';

export default interface MainNavigationItemProps {
    content: string;
    selected?: boolean;
    id?: string;
    onClick?: (event: SyntheticEvent, id: string|undefined) => void;
}
