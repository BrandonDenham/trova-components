import { Moment } from 'moment';
import { SyntheticEvent } from 'react';

import { SimpleComponent } from '../../shared/interfaces/SimpleComponent.types';

export interface FieldProps<DataType> extends SimpleComponent {
    onChange?(
        event: SyntheticEvent | string | Moment,
        name?: string | string[],
        value?: DataType
    ): SyntheticEvent | void;
    value?: DataType;
    label?: string;
    detail?: string;
    name: string;
    info?: string;
    error?: string | string[];
    disabled?: boolean;
}
