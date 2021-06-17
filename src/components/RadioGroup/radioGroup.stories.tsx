import React, { useState } from 'react';
import Option from '../dropdown/option.types';
import { Colors } from '../../shared/constants/colors';
import RadioGroup from './radioGroup';

export default {
    title: 'Radio Group',
    component: RadioGroup,
};

const children: Option[] = [
    { value: 'green', children: 'Green Color' },
    { value: 'yellow', children: 'Yellow Color' },
    { value: 'red', children: 'Red Color' },
];

export const SingleRadioGroup = () => {
    const [value, setValue] = useState('yellow');

    const handleChange = event => {
        setValue(event.target.value);
    };
    return (
        <>
            <div> value: {value} </div>
            <div
                style={{
                    marginTop: '10px',
                    display: 'flex',
                    backgroundColor: Colors.LightSilver,
                    maxWidth: '300px',
                    borderRadius: '5px',
                }}
            >
                <RadioGroup
                    name="colors radioGroup"
                    value={value}
                    onChange={handleChange}
                    label={'Select your favorite color'}
                >
                    {children}
                </RadioGroup>
            </div>
        </>
    );
};
