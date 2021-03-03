import { SyntheticEvent } from 'react';

import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export interface FieldProps<DataType> extends SimpleComponent {
    onChange?(
        event: SyntheticEvent,
        name?: string | string[],
        value?: DataType
    ): SyntheticEvent | void;
    value?: DataType;
    label?: string;
    name: string;
    info?: string;
    error?: string | string[];
}
