import { FieldProps } from '../field/field.types';
import { ComponentWidth } from './componentWidth';

export interface CurrencyProps<DataType> extends FieldProps<DataType> {
    size?: ComponentWidth;
    currencyType?: string;
    currencyPosition?: string;
    decimalPlaces?: number;
}
