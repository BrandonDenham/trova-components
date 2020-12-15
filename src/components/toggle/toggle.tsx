/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { SyntheticEvent, useCallback } from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
import ToggleProps from './toggle.types';
import {
    input,
    mainContainer,
    errorSpan,
    disabledSpan,
    detailSpan,
    slider,
} from './toggle.styles';
const Toggle: React.FC<ToggleProps> = ({
    onChange,
    value = false,
    name,
    error,
    disabled = false,
    disabledText= '',
    detail = '',
}) => {
    const theme = useTheme<Theme>();
    const handleChange = useCallback(
        (event: SyntheticEvent) => {
            onChange ? onChange(event, name, value) : event.stopPropagation();
        },
        [name, value, onChange]
    );
    return (
        <React.Fragment>
            <div css={mainContainer(error)}>
                <input
                    data-testid="toggle"
                    css={input()}
                    type="checkbox"
                    onChange={handleChange}
                    checked={value}
                    disabled={disabled}
                />
                <span css={slider(error)}></span>
            </div>
            {detail && <span css={detailSpan(theme)}>{detail}</span>}
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

export default Toggle;
