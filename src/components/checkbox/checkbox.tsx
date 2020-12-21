/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { SyntheticEvent, useCallback } from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
import CheckboxProps from './checkbox.types';
import {
    input,
    mainContainer,
    detailSpan,
    checkbox,
} from './checkbox.styles';
import ComponentFooter from '../__private/componentFooter';
const imageCheckboxCross = require('../../shared/images/icons/checkboxCross.svg') as string;

/**
 * Renders a <Checkbox /> component
 * @param  props
 * @param  props.value - The value of the dropdown as stored in the form
 * @param  props.name - field Name, will correspond to the 2nd parameter in the onSearch
 * @param  props.error - any errors
 * @param  props.disabled - This isn't really shown but there should be an ability to disable out the label
 * @param  props.disabledText - Text under the checkbox that will be shown if disabled is true
 * @param  props.detail - The text that goes to the right of the input when there is more information to be shown to the user.
 */

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
                    />
                </span>
                {detail && <span css={detailSpan(theme)}>{detail}</span>}
            </div>
            <ComponentFooter
                disabled={disabled}
                disabledText={disabledText}
                error={error}
            />
        </React.Fragment>
    );
};

export default Checkbox;
