import { SyntheticEvent } from 'react';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface UserItemProps extends SimpleComponent {
    title: string;
    subtitle?: string;
    selected?: boolean;
    id?: string;
    onClick?: (SyntheticEvent: SyntheticEvent, id: string | undefined) => void;
}