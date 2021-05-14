import { FieldProps } from '../field/field.types';
import { TextareaSize } from './textareaSize';

export default interface TextAreaProps extends FieldProps<string> {
    detail?: string;
    placeholder?: string;
    size?: TextareaSize;
    disabled?: boolean;
    disabledText?: string;
    expandable?: boolean;
}
