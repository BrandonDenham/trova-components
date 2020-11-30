import { ReactNode } from 'react';
import { Colors } from '../../shared/constants/colors';
import { CardAlignment } from './cardAlignment';

export default interface CardProps {
    children: ReactNode;
    backgroundColor?: Colors;
    alignment?: CardAlignment;
}
