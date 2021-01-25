import { SyntheticEvent } from 'react';

export interface FieldProps<DataType> {
    onChange?(
        event: SyntheticEvent,
        name: string,
        value: DataType
    ): SyntheticEvent;
    value?: DataType;
    label?: string;
    name: string;
    info?: string;
    error?: string | string[];
    className?: string;
}
