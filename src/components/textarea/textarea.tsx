/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { SyntheticEvent, useCallback } from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
import TextareaProps from './textarea.types';
import {
    textarea,
    mainContainer,
    labelContainer,
    errorSpan,
    labelSpan,
    infoImage,
    infoImageContainer,
    detailSpan,
    disabledSpan,
    tooltip,
} from './textarea.styles';
import { TextareaSize } from './textareaSize';
const imageInfo = require('../../shared/images/icons/info.svg') as string;
const Textarea: React.FC<TextareaProps> = ({
    onChange,
    value = '',
    label,
    name,
    info,
    error,
    detail,
    placeholder,
    size = TextareaSize.Large,
    disabled = false,
    disabledText,
}) => {
    const theme = useTheme<Theme>();
    const handleChange = useCallback((event: SyntheticEvent) => {
        onChange ? onChange(event, name, value) : event.stopPropagation();
    }, [name, value, onChange]);
    return (
        <div css={mainContainer(theme)}>
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
            <textarea
                data-testid="textarea"
                css={textarea(theme, error, size)}
                onChange={handleChange}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
            />
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

export default Textarea;
