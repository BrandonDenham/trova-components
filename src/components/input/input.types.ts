import { FieldProps } from '../field/field.types';
import { InputSize } from './inputSize';

export default interface InputProps extends FieldProps<string> {
    detail?: string;
    placeholder?: string;
    size?: InputSize;
    icon?: React.ReactNode;
    disabled?: boolean;
    disabledText?: string;
}
