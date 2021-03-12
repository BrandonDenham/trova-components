import React from 'react';

import TrovaDateTime from './TrovaDateTime';
import { ComponentWidth } from '../input/componentWidth';

export default {
    title: 'TrovaDateTime',
    component: TrovaDateTime,
};

export const MediumDateTime = () => (
    <TrovaDateTime
        name="test"
        value=""
        placeholder="Placeholder"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        size={ComponentWidth.Medium}
    />
);

export const LargeDateTime = () => (
    <TrovaDateTime
        name="test"
        value=""
        placeholder="Placeholder"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        size={ComponentWidth.Large}
    />
);


export const FlexibleDateTime = () => (
    <TrovaDateTime
        name="test"
        value=""
        placeholder="Placeholder"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        size={ComponentWidth.Flexible}
    />
);

export const DisabledDateTime = () => (
    <TrovaDateTime
        name="test"
        value=""
        placeholder="Placeholder"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        disabled={true}
        disabledText="This cannot be updated."
    />
);

export const SingleErrorDateTime = () => (
    <TrovaDateTime
        name="test"
        value=""
        error="Invalid Date"
        placeholder="Placeholder"
        label="Trip description"
    />
);

export const MultipleErrorsDateTime = () => (
    <TrovaDateTime
        name="test"
        value=""
        error={['Invalid date', 'You need to be over 18']}
        placeholder="Placeholder"
        label="Trip description"
    />
);
