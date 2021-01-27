import { ReactNode } from 'react';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface RowProps extends SimpleComponent {
    children: ReactNode;
}
