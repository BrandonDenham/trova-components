import { FieldProps } from '../field/field.types';

export default interface ToggleProps extends FieldProps<boolean> {
    detail?: string;
    disabled?: boolean;
    disabledText?: string;
}
