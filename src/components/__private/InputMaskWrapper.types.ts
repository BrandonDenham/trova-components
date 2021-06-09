import { FieldProps } from '../field/field.types';

export interface InputMaskProps extends FieldProps<string> {
    openCalendar: () => void;
    closeCalendar: () => void;
}
