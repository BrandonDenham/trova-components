import { Colors } from '../../shared/constants/colors';
import { SyntheticEvent } from 'react';
export default interface BadgeProps {
    label?: string;
    backgroundColor?: string;
    color?: Colors;
    fontSize?: number;
    borderRadius?: number;
    onClick?: (event: SyntheticEvent) => void;
}
