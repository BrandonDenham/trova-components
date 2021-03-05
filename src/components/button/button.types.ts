import { SyntheticEvent } from 'react';
import { DragElementWrapper, DragSourceOptions } from 'react-dnd';

import { ButtonType } from './buttonType';
import { Colors } from '../../shared/constants/colors';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';
import { ButtonSize } from './buttonSize';

export default interface ButtonProps extends SimpleComponent{
    children: string;
    buttonType?: ButtonType;
    selected?: boolean;
    id?: string;
    onClick?: (event: SyntheticEvent, id: string | undefined) => void;
    icon?: React.ReactNode;
    subtext?: string;
    ref?: DragElementWrapper<DragSourceOptions>;
    backgroundColor?: Colors;
    size?: ButtonSize;
}
