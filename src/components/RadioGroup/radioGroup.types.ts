import { FieldProps } from '../field/field.types';
import OptionProps from '../option/option.types';
import { ReactElement } from 'react';

export default interface RadioGroupProps extends FieldProps<string> {
    children: ReactElement<OptionProps>[] | ReactElement<OptionProps>;
    disabled?: boolean;
}
