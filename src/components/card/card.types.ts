import { ReactNode } from 'react';
import { Colors } from '../../shared/constants/colors';

export default interface CardProps {
    children: ReactNode;
    backgroundColor?: Colors;
}
