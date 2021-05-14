import { ReactNode, RefObject } from 'react';
import { VariationPlacement } from '@popperjs/core';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface MenuProps extends SimpleComponent {
    title: string;
    children: Array<ReactNode>;
    targetRef: RefObject<HTMLElement>;
    placement?: VariationPlacement;
}
