/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

import { ComponentWidth } from '../input/componentWidth';
import { StyledDateTime } from './TrovaDateTime.components';
import {
    mainContainer,
    labelContainer,
    labelSpan,
    errorSpan,
    disabledSpan,
    detailSpan,
} from './TrovaDateTime.styles';
import DateTimeProps from './TrovaDateTime.types';

const TrovaDateTime: React.FC<DateTimeProps> = ({
    placeholder,
    onChange,
    error,
    size = ComponentWidth.Medium,
    label,
    disabled,
    disabledText,
    detail,
    className,
    value,
    timeFormat = false,
    dateFormat = false,
}) => {
    const theme = useTheme();
    const disabledProp = disabled ? true : false;
    return (
        <div css={mainContainer(size)} className={className}>
            {label && (
                <div css={labelContainer()}>
                    <span css={labelSpan(theme)}>{label}</span>
                </div>
            )}
            {detail && <span css={detailSpan(theme)}>{detail}</span>}
            <StyledDateTime
                timeFormat={timeFormat && `HH:mm`}
                dateFormat={dateFormat && `MM/DD/Y`}
                inputProps={{ placeholder, disabled: disabledProp }}
                onChange={onChange}
                error={error}
                value={value}
            />
            {disabled && disabledText && (
                <span css={disabledSpan()}>{disabledText}</span>
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

export default TrovaDateTime;
