/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { ComponentWidth } from './componentWidth';

import {
    mainContainer,
    labelContainer,
    labelSpan,
    innerContainer,
    currencyTypeStyle,
    errorSpan,
    input,
    detailSpan,
} from './Currency.styles';

import { CurrencyProps } from './Currency.types';

/**
 * Renders a <Currency /> component
 * @param  props
 * @param  props.value - The value of the component
 * @param  props.name - Field Name, will correspond to the 2nd parameter in the onChange
 * @param  props.error - Any errors
 * @param  props.label - The label of the component
 * @param  props.className - For usage as an emotion styled component.
 * @param  props.disabled - For usage as disabled.
 * @param  props.size - The sizes are: ExtraSmall: for usage in tables, Small - 2 col, Medium - 3 col (default), Large - 4 col, ExtraLarge - 5 col
 * @param  props.currencyType - The type of currency. The default is USD.
 * @param  props.currencyPosition - The position of the type of currency (left or right) in relation to the number of money. The default is left.
 * @param  props.decimalPlaces - For usage when is needed to have decimals. The default is 0.
 */

const Currency: React.FC<CurrencyProps<number>> = ({
    value = 0,
    label,
    error,
    className,
    name,
    disabled,
    onChange,
    detail,
    size = ComponentWidth.Flexible,
    currencyType = 'USD',
    currencyPosition = 'left',
    decimalPlaces = 0,
}) => {
    const theme = useTheme();
    const handleChange = useCallback(
        (event: SyntheticEvent) => {
            const value = Number(
                Number.parseFloat(
                    (event.target as HTMLInputElement).value
                ).toFixed(decimalPlaces)
            );
            onChange ? onChange(event, name, value) : event.stopPropagation();
        },
        [name, value, onChange]
    );
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        if (error) {
            if (error && typeof error === 'string') {
                setErrorText(error);
            } else {
                Array.isArray(error) &&
                    setErrorText(
                        error.reduce((a: string, b: string) => {
                            return a.concat('. ').concat(b);
                        })
                    );
            }
        } else {
            setErrorText('');
        }
    }, [error]);

    return (
        <div css={mainContainer(theme)} className={className}>
            {label && (
                <div css={labelContainer(size)}>
                    <span css={labelSpan(theme)}>{label}</span>
                </div>
            )}
            <div css={innerContainer(theme, disabled, size)}>
                {currencyPosition == 'left' && (
                    <div css={currencyTypeStyle(theme, size, currencyPosition)}>
                        <span>{currencyType}</span>
                    </div>
                )}
                <input
                    data-testid="input"
                    type="text"
                    value={value}
                    css={input(theme, error, size, currencyPosition)}
                    onChange={handleChange}
                    name={name}
                    disabled={disabled}
                />
                {currencyPosition == 'right' && (
                    <div css={currencyTypeStyle(theme, size, currencyPosition)}>
                        <span>{currencyType}</span>
                    </div>
                )}
            </div>
            {detail && <span css={detailSpan(theme)}>{detail}</span>}
            {errorText && <span css={errorSpan(theme)}>{errorText}</span>}
        </div>
    );
};

export default Currency;
