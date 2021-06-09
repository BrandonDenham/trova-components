/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { SyntheticEvent } from 'react';
import InputMask from 'react-input-mask';
import { InputMaskProps } from './InputMaskWrapper.types';

const regEx = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/;

const InputMaskWrapper: React.FC<InputMaskProps> = ({
    openCalendar,
    onChange,
    value,
    className,
}) => {
    const handleChange = (event: SyntheticEvent) => {
        const eventValue = (event.target as HTMLInputElement).value;
        onChange &&
            value &&
            (regEx.test(eventValue) ? onChange(event) : onChange(value));
    };

    return (
        <InputMask
            className={className}
            onFocus={() => {
                openCalendar();
            }}
            mask="99:99"
            maskChar={'0'}
            value={value}
            onChange={handleChange}
        />
    );
};

export default InputMaskWrapper;
