import React from 'react';

import Number from './Number';

export default {
    title: 'Number',
    component: Number,
};

export const NumberExample = () => (
    <Number
        name="test"
        value={5}
        label="Form header"
        detail="A text detail in the number input"
    />
);

export const Disabled = () => (
    <Number
        name="test"
        value={5}
        label="Form header disabled"
        disabled={true}
    />
);

export const Error = () => (
    <Number
        name="test"
        value={5}
        label="Form header"
        error="Invalid value."
    />
);
