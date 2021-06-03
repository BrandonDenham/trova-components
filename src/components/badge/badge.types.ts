import { Colors } from '../../shared/constants/colors';
import { SyntheticEvent } from 'react';
export default interface BadgeProps {
    text: string;
    backgroundColor?: string;
    color?: Colors;
    onClick?: (event: SyntheticEvent) => void;
}
