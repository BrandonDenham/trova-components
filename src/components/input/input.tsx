/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { SyntheticEvent, useCallback } from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
import InputProps from './input.types';
import {
    input,
    mainContainer,
    labelContainer,
    errorSpan,
    labelSpan,
    infoImage,
    infoImageContainer,
    detailSpan,
    disabledSpan,
    inputContainer,
    inputWithIcon,
    tooltip,
} from './input.styles';
import { ComponentWidth } from './componentWidth';
const imageInfo = require('../../shared/images/icons/info.svg') as string;
const Input: React.FC<InputProps> = ({
    onChange,
    value = '',
    label,
    name,
    info,
    error,
    detail,
    placeholder,
    size = ComponentWidth.Medium,
    icon,
    disabled = false,
    disabledText,
}) => {
    const theme = useTheme<Theme>();
    const handleChange = useCallback(
        (event: SyntheticEvent) => {
            onChange ? onChange(event, name, value) : event.stopPropagation();
        },
        [name, value, onChange]
    );
    let textInput: HTMLInputElement;
    const handleClick = useCallback(() => textInput.focus(),[]);
    return (
        <div css={mainContainer(theme, size)}>
            <div css={labelContainer()}>
                {label && <span css={labelSpan(theme)}>{label}</span>}
                {info && (
                    <div css={infoImageContainer()} title={info}>
                        <label>
                            <img
                                css={infoImage()}
                                alt="Info."
                                src={imageInfo}
                            />
                            <input type="checkbox"></input>
                            <span css={tooltip(theme)}>{info}</span>
                        </label>
                    </div>
                )}
            </div>
            {detail && <span css={detailSpan(theme)}>{detail}</span>}
            {icon && (
                <div css={inputContainer(theme, error)} onClick={handleClick}>
                    <input
                        data-testid="input"
                        type="text"
                        onChange={handleChange}
                        placeholder={placeholder}
                        value={value}
                        disabled={disabled}
                        css={inputWithIcon(theme, size)}
                        ref={(input: HTMLInputElement) => {
                            textInput = input;
                        }}
                    />
                    {icon}
                </div>
            )}
            {!icon && (
                <input
                    data-testid="input"
                    css={input(theme, error)}
                    type="text"
                    onChange={handleChange}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                />
            )}
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
        </div>
    );
};

export default Input;
