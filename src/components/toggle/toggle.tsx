/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { SyntheticEvent, useCallback } from 'react';

import ToggleProps from './toggle.types';
import { input, mainContainer, detailSpan, slider } from './toggle.styles';
import ComponentFooter from '../__private/componentFooter';

/**
 * Renders a <Toggle /> component
 * @param  props
 * @param  props.value - The value of the dropdown as stored in the form
 * @param  props.name - field Name, will correspond to the 2nd parameter in the onSearch
 * @param  props.error - any errors
 * @param  props.disabled - This isn't really shown but there should be an ability to disable out the label
 * @param  props.disabledText - Text under the toggle that will be shown if disabled is true
 * @param  props.detail - The text that goes to the right of the input when there is more information to be shown to the user.
 * @param  props.className - For usage as an emotion styled component.
 */

const Toggle: React.FC<ToggleProps> = ({
    onChange,
    value = false,
    name,
    error,
    disabled = false,
    disabledText = '',
    detail = '',
    className,
}) => {
    const theme = useTheme();
    const handleToggle = useCallback(
        (event: SyntheticEvent) => {
            onChange ? onChange(event, name, value) : event.stopPropagation();
        },
        [name, value, onChange]
    );
    return (
        <React.Fragment>
            <div css={mainContainer(error)} className={className}>
                <input
                    css={input()}
                    type="checkbox"
                    checked={value}
                    disabled={disabled}
                    onChange={handleToggle}
                    name={name}
                />
                <span
                    data-testid="toggle"
                    css={slider(error)}
                    onClick={handleToggle}
                ></span>
            </div>
            {detail && <span css={detailSpan(theme)}>{detail}</span>}
            <ComponentFooter
                disabled={disabled}
                disabledText={disabledText}
                error={error}
            />
        </React.Fragment>
    );
};

export default Toggle;
