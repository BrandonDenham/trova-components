import { ReactNode } from 'react';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface TableHeadProps extends SimpleComponent{
    children: ReactNode;
}
