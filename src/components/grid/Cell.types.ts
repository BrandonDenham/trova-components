import { ReactNode } from 'react';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface CellProps extends SimpleComponent{
    children: ReactNode;
}
