import { FieldProps } from '../field/field.types';
import { ComponentWidth } from '../input/componentWidth';

export default interface DateTimeProps extends FieldProps<string> {
    detail?: string;
    placeholder?: string;
    size?: ComponentWidth;
    icon?: React.ReactNode;
    disabled?: boolean;
    disabledText?: string;
}

export interface DateTimeComponentProps extends FieldProps<string> {
    detail?: string;
    placeholder?: string;
    size?: ComponentWidth;
    icon?: React.ReactNode;
    disabled?: boolean;
    disabledText?: string;
    timeFormat?: string | boolean;
    dateFormat?: string | boolean;
}
