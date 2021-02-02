/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { SyntheticEvent, useCallback } from 'react';

import {
    mainContainer,
    labelContainer,
    labelSpan,
    innerContainer,
    changeButton,
    errorSpan,
    input,
} from './Number.styles';
import imageSubstract from '../../shared/images/icons/substract.svg';
import imageAdd from '../../shared/images/icons/add.svg';
import { FieldProps } from '../field/field.types';

/**
 * Renders a <Number /> component
 * @param  props
 * @param  props.value - The value of the component
 * @param  props.name - field Name, will correspond to the 2nd parameter in the onChange
 * @param  props.error - any errors
 * @param  props.label - The label of the component
 * @param  props.className - For usage as an emotion styled component.
 */

const Number: React.FC<FieldProps<number>> = ({
    value = 0,
    label,
    error,
    className,
    name,
    onChange,
}) => {
    const theme = useTheme();
    function handleChange(value: number) {
        useCallback(
            (event: SyntheticEvent) => {
                onChange
                    ? onChange(event, name, value)
                    : event.stopPropagation();
            },
            [name, value, onChange]
        );
    }
    return (
        <div css={mainContainer(theme)} className={className}>
            <div css={labelContainer()}>
                {label && <span css={labelSpan(theme)}>{label}</span>}
            </div>
            <div css={innerContainer(error)}>
                <div
                    css={changeButton()}
                    onClick={() => handleChange(value - 1)}
                    data-testid="substract"
                >
                    <img alt="Substract" src={imageSubstract} />
                </div>
                <input
                    data-testid="input"
                    type="text"
                    value={value}
                    css={input(theme)}
                    onChange={(e) => handleChange(e.target.valueAsNumber)}
                    name={name}
                />
                <div
                    css={changeButton()}
                    onClick={() => handleChange(value + 1)}
                    data-testid="add"
                >
                    <img alt="Add" src={imageAdd} />
                </div>
            </div>
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

export default Number;
