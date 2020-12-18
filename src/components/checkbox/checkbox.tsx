/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { SyntheticEvent, useCallback } from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
import CheckboxProps from './checkbox.types';
import {
    input,
    mainContainer,
    errorSpan,
    disabledSpan,
    detailSpan,
    checkbox,
} from './checkbox.styles';
const imageCheckboxCross = require('../../shared/images/icons/checkboxCross.svg') as string;
const Checkbox: React.FC<CheckboxProps> = ({
    onChange,
    value = false,
    name,
    error,
    disabled = false,
    disabledText = '',
    detail = '',
}) => {
    const theme = useTheme<Theme>();
    const handleToggle = useCallback(
        (event: SyntheticEvent) => {
            onChange ? onChange(event, name, value) : event.stopPropagation();
        },
        [name, value, onChange]
    );
    return (
        <React.Fragment>
            <div css={mainContainer()}>
                <input
                    css={input()}
                    type="checkbox"
                    checked={value}
                    disabled={disabled}
                    onChange={handleToggle}
                    data-testid="checkbox"
                />
                <span css={checkbox(error)}>
                    <img
                        alt="Toggle"
                        src={imageCheckboxCross}
                        onClick={() => {}}
                    />
                </span>
                {detail && <span css={detailSpan(theme)}>{detail}</span>}
            </div>
            {disabled && disabledText && (
                <span css={disabledSpan(theme)}>{disabledText}</span>
            )}
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
        </React.Fragment>
    );
};

export default Checkbox;
