import React, { useState } from 'react';

import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import { ComponentWidth } from '../input/componentWidth';

export default {
    title: 'DateTimePicker',
    component: DatePicker,
};

export const MediumDateTime = () => (
    <DatePicker
        name="test"
        value=""
        placeholder="Placeholder"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        size={ComponentWidth.Medium}
    />
);

export const LargeDateTime = () => (
    <DatePicker
        name="test"
        value=""
        placeholder="Placeholder"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        size={ComponentWidth.Large}
    />
);

export const FlexibleDateTime = () => (
    <DatePicker
        name="test"
        value=""
        placeholder="Placeholder"
        label="Trip description"
        detail="Describe the trip in 2-3 sentences."
        size={ComponentWidth.Flexible}
    />
);

export const DisabledDateTime = () => (
    <DatePicker
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
    <DatePicker
        name="test"
        value=""
        error="Invalid Date"
        placeholder="Placeholder"
        label="Trip description"
    />
);

export const MultipleErrorsDateTime = () => (
    <DatePicker
        name="test"
        value=""
        error={['Invalid date', 'You need to be over 18']}
        placeholder="Placeholder"
        label="Trip description"
    />
);

export const SimpleTimePicker = () => {
    const [value, setValue] = useState(`15:00`);
    const onChange = newValue => {
        setValue(newValue);
    };
    return (
        <TimePicker
            name="test"
            value={value}
            placeholder="Placeholder"
            label="Trip description"
            onChange={onChange}
        />
    );
};
