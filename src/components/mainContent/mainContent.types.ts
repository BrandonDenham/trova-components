import { ReactNode } from 'react';
import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export default interface MainContentProps extends SimpleComponent {
    children: ReactNode;
}
