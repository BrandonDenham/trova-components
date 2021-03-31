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
