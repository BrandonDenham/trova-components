/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { FieldProps } from '../../field/field.types';
import { Radio as MaterialRadio } from '@material-ui/core';
import { P } from '../../typography';
import {
    mainContainer,
    radioLabel,
    radioCustomIcon,
    radioCheckedIcon,
} from './radio.styles';

const Radio = React.forwardRef<HTMLInputElement, FieldProps<string>>(
    (
        {
            label,
            value,
            name,
        },
        ref
    ) => {
        return (
            <div css={mainContainer()}>
                <MaterialRadio
                    inputProps={{
                        'data-testid': `${value}`,
                    }}
                    inputRef={ref}
                    id={name}
                    name={name}
                    value={value}
                    checkedIcon={<span css={radioCheckedIcon()} />}
                    icon={<span css={radioCustomIcon()} />}
                />
                {label && (
                    <label css={radioLabel()} htmlFor={name}>
                        <P isBold={false}>{label}</P>
                    </label>
                )}
            </div>
        );
    }
);

export default Radio;
