/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SyntheticEvent } from 'react';
import { useTheme } from 'emotion-theming';
import React, { useCallback } from 'react';

import ButtonProps from './Button.types';
import { Theme } from '../Theme/Theme.types';
import { button, buttonText , buttonSubtext} from './Button.styles';
import { ButtonType } from './ButtonType';

const Button: React.FC<ButtonProps> = ({
    children,
    buttonType = ButtonType.Primary,
    selected = false,
    id,
    onClick,
    icon,
    subtext,
}) => {
    const theme = useTheme<Theme>();
    const handleButtonClicked = useCallback(
        (event: SyntheticEvent) => {
            onClick ? onClick(event, id) : event.stopPropagation();
        },
        [id, onClick]
    );
    return (
        <div
            data-testid="button"
            css={button(theme, buttonType, selected, subtext)}
            onClick={handleButtonClicked}
        >
            <div
                data-testid="button__text"
                css={buttonText(theme, buttonType, subtext)}
            >
                {children}
                {icon}
            </div>
            <div
                data-testid="button__subtext"
                css={buttonSubtext(theme, buttonType)}
            >
                {subtext}
            </div>
        </div>
    );
};

export default Button;
