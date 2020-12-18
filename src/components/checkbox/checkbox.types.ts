import { FieldProps } from '../field/field.types';

export default interface CheckboxProps extends FieldProps<boolean> {
    detail?: string;
    disabled?: boolean;
    disabledText?: string;
}
