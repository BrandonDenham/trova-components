import React, { useState } from 'react';

import Currency from './Currency';
import { ComponentWidth } from './componentWidth';

export default {
    title: 'Currency',
    component: Currency,
};

export const CurrencyInput = () => {
    const [value, setValue] = useState(50000.02);

    const onChange = (event, name, value) => {
        setValue(value);
    };
    return (
        <Currency
            name="test"
            value={value}
            label="Form header"
            detail="A text detail in the currency input"
            onChange={onChange}
        />
    );
};

export const CurrencyInputRight = () => (
    <Currency
        name="test"
        value={50000000}
        label="Form header"
        detail="A text detail in the currency input"
        currencyPosition="right"
    />
);

export const CurrencyInputExtraSmall = () => (
    <Currency name="test" value={50000000} size={ComponentWidth.ExtraSmall} />
);

export const SingleError = () => (
    <Currency
        name="test"
        value={500}
        label="Single Error"
        error="Invalid value"
    />
);

export const MultipleErrors = () => (
    <Currency
        name="test"
        value={500}
        label="Multiple errors"
        error={['Invalid value', 'Should be a number']}
    />
);

export const Disabled = () => (
    <Currency name="test" value={500} label="Disabled" disabled={true} />
);
