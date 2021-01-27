import { SyntheticEvent } from 'react';

import { FieldProps } from '../field/field.types';

export default interface NumberProps extends FieldProps<number> {
    handleSubstract: (SyntheticEvent: SyntheticEvent) => void;
    handleAdd: (SyntheticEvent: SyntheticEvent) => void;
}
