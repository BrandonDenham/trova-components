import { SyntheticEvent } from 'react';
import { DragElementWrapper, DragSourceOptions } from 'react-dnd';
import { ButtonType } from './buttonType';
import { Colors } from '../../shared/constants/colors';

export default interface ButtonProps {
    children: string;
    buttonType?: ButtonType;
    selected?: boolean;
    id?: string;
    onClick?: (event: SyntheticEvent, id: string | undefined) => void;
    icon?: React.ReactNode;
    subtext?: string;
    ref?: DragElementWrapper<DragSourceOptions>;
    backgroundColor?: Colors;
    className?: string;
}
