import { SyntheticEvent } from 'react';
import { FieldProps } from '../field/field.types';
import { ComponentWidth } from '../input';
import Option from '../option/option.types';

export default interface MultipleDropdownProps extends FieldProps<string[]> {
    children: Option[];
    placeholder?: string;
    size?: ComponentWidth;
    disabled?: boolean;
    disabledText?: string;
    searching?: boolean;
    onSearch: (event: SyntheticEvent, name: string, value: string) => void;
}
