import React, { useState } from 'react';

import TrovaDateTime from './TrovaDateTime';
import TrovaTimePicker from './TrovaTimePicker';
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

export const TimePicker = () => {
    const [value, setValue] = useState(`15:00`);
    const onChange = newValue => {
        setValue(newValue);
    };
    return (
        <TrovaTimePicker
            name="test"
            value={value}
            placeholder="Placeholder"
            label="Trip description"
            onChange={onChange}
        />
    );
};
