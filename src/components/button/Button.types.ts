import { SyntheticEvent } from 'react';
import Icon from '../icon/Icon';
import { ButtonType } from './ButtonType';

export default interface ButtonProps {
    children: string;
    buttonType?: ButtonType;
    selected?: boolean;
    id?: string;
    onClick?: (event: SyntheticEvent, id: string|undefined) => void;
    icon?: Icon;
    subtext?: string|undefined;
}