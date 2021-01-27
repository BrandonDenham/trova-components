import { SyntheticEvent } from 'react';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface MainNavigationItemProps extends SimpleComponent {
    content: string;
    selected?: boolean;
    id?: string;
    onClick?: (event: SyntheticEvent, id: string | undefined) => void;
}
