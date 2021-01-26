import { ReactNode } from 'react';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface TableBodyProps extends SimpleComponent{
    children: ReactNode;
}
