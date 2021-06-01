/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { SyntheticEvent, useCallback } from 'react';

import {
    mainContainer,
    labelContainer,
    labelSpan,
    innerContainer,
    currencyType,
    errorSpan,
    input,
    detailSpan,
} from './Currency.styles';

import { FieldProps } from '../field/field.types';

/**
 * Renders a <Currency /> component
 * @param  props
 * @param  props.value - The value of the component
 * @param  props.name - Field Name, will correspond to the 2nd parameter in the onChange
 * @param  props.error - Any errors
 * @param  props.label - The label of the component
 * @param  props.className - For usage as an emotion styled component.
 * @param  props.disabled - For usage as disabled.
 */

const Currency: React.FC<FieldProps<number>> = ({
    value = 0,
    label,
    error,
    className,
    name,
    disabled,
    onChange,
    detail,
}) => {
    const currency = 'USD';
    const theme = useTheme();
    const handleChange = useCallback(
        (event: SyntheticEvent, value: number) => {
            onChange ? onChange(event, name, value) : event.stopPropagation();
        },
        [name, value, onChange]
    );
    return (
        <div css={mainContainer(theme)} className={className}>
            <div css={labelContainer()}>
                {label && <span css={labelSpan(theme)}>{label}</span>}
            </div>
            <div css={innerContainer(theme, disabled)}>
                <div css={currencyType(theme)}>
                    <span>{currency}</span>
                </div>
                <input
                    data-testid="input"
                    type="text"
                    value={value}
                    css={input(theme, error)}
                    onChange={e => handleChange(e, parseInt(e.target.value))}
                    name={name}
                    disabled={disabled}
                />
            </div>
            {detail && <span css={detailSpan(theme)}>{detail}</span>}
            {error && typeof error === 'string' && (
                <span css={errorSpan(theme)}>{error}</span>
            )}
            {error && Array.isArray(error) && (
                <span css={errorSpan(theme)}>
                    {error.reduce((a: string, b: string) => {
                        return a.concat(', ').concat(b);
                    })}
                </span>
            )}
        </div>
    );
};

export default Currency;
