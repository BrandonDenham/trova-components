import { ReactNode } from 'react';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface TableProps extends SimpleComponent {
    children: ReactNode;
}
