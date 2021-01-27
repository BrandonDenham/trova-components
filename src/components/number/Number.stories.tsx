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
        handleAdd={() => {}}
        handleSubstract={() => {}}
    />
);

export const Error = () => (
    <Number
        name="test"
        value={5}
        label="Form header"
        handleAdd={() => {}}
        handleSubstract={() => {}}
        error="Invalid value."
    />
);
