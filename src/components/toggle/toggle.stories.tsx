import React from 'react';

import Toggle from './toggle';

export default {
    title: 'Toggle',
    component: Toggle,
};

export const ActiveToggle = () => (
    <Toggle
        name="test"
        value={true}
    />
);

export const ActiveDetailedToggle = () => (
    <Toggle
        name="test"
        value={true}
        label="Form header"
        detail="Confirm all bookings"
    />
);

export const InactiveToggle = () => (
    <Toggle name="test" label="Form header" detail="Confirm all bookings" />
);

export const DisabledInput = () => (
    <Toggle
        name="test"
        label="Form header"
        detail="Confirm all bookings"
        disabled={true}
        disabledText="This cannot be updated."
    />
);

export const SingleError = () => (
    <Toggle
        name="test"
        error="Toggle should not be selected"
        label="Form header"
        value={true}
    />
);

export const MultipleErrors = () => (
    <Toggle
        name="test"
        error={['Toggle should be selected', 'Input must be numeric']}
        label="Form header"
    />
);
