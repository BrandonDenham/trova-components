import { RefObject } from 'react';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface MenuProps extends SimpleComponent {
    open?: boolean;
    onToggle?: (arg0: boolean) => boolean;
    title: string;
    children: object;
    referenceRef: RefObject<HTMLElement>;
}
