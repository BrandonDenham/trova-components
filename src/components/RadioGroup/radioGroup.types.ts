import { FieldProps } from '../field/field.types';
import Option from '../dropdown/option.types';

export default interface RadioGroupProps extends FieldProps<string> {
    children: Option[];
    disabled?: boolean;
}
