/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { SyntheticEvent, useCallback } from 'react';

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
import imageInfo from '../../shared/images/icons/info.svg';
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
    className,
    expandable = false,
}) => {
    const theme = useTheme();
    const handleChange = useCallback(
        (event: SyntheticEvent) => {
            onChange ? onChange(event, name, value) : event.stopPropagation();
        },
        [name, value, onChange]
    );
    return (
        <div css={mainContainer(theme, size)} className={className}>
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
            <textarea
                data-testid="textarea"
                css={textarea(theme, error, size, expandable)}
                onChange={handleChange}
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                name={name}
            />
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
        </div>
    );
};

export default Textarea;
