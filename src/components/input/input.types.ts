import { FieldProps } from '../field/field.types';
import { ComponentWidth } from './componentWidth';

export default interface InputProps extends FieldProps<string> {
    detail?: string;
    placeholder?: string;
    size?: ComponentWidth;
    icon?: React.ReactNode;
    disabled?: boolean;
    disabledText?: string;
    type?: string;
}
