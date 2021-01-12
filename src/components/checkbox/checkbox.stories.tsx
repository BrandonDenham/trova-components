import React from 'react';

import Checkbox from './checkbox';
import ThemeWrapper from '../themeWrapper/themeWrapper';

export default {
    title: 'Checkbox',
    component: Checkbox,
};

export const ActiveCheckbox = () => <Checkbox name="test" value={true} />;

export const ActiveDetailedCheckbox = () => (
    <ThemeWrapper>
        <Checkbox
            name="test"
            value={true}
            label="Form header"
            detail="Confirm all bookings"
        />
    </ThemeWrapper>
);

export const InactiveCheckbox = () => (
    <Checkbox name="test" label="Form header" detail="Confirm all bookings" />
);

export const DisabledCheckbox = () => (
    <Checkbox
        name="test"
        label="Form header"
        detail="Confirm all bookings"
        disabled={true}
        disabledText="This cannot be updated."
    />
);

export const SingleError = () => (
    <Checkbox
        name="test"
        error="Toggle should not be selected"
        label="Form header"
        value={true}
    />
);

export const MultipleErrors = () => (
    <Checkbox
        name="test"
        error={['Toggle should be selected', 'Input must be numeric']}
        label="Form header"
    />
);
