import React from 'react';

import Currency from './Currency';

export default {
    title: 'Currency',
    component: Currency,
};

export const CurrencyExample = () => (
    <Currency
        name="test"
        value={5000}
        label="Form header"
        detail="A text detail in the number input"
    />
);

export const Disabled = () => (
    <Currency name="test" value={5} label="Disabled" disabled={true} />
);

export const Error = () => (
    <Currency name="test" value={5} label="Error" error="Invalid value." />
);
