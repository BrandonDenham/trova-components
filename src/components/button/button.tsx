/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { useCallback, SyntheticEvent } from 'react';
import ButtonProps from './button.types';
import {
    button,
    buttonText,
    buttonSubtext,
    buttonChildren,
    iconContainer,
} from './button.styles';
import { ButtonType } from './buttonType';
import { ButtonSize } from './buttonSize';

const Button = React.forwardRef<HTMLInputElement, ButtonProps>(
    (
        {
            children,
            buttonType = ButtonType.Primary,
            selected = false,
            disabled = false,
            id,
            onClick,
            icon,
            subtext,
            backgroundColor,
            className,
            size = ButtonSize.Fixed,
        },
        ref
    ) => {
        const theme = useTheme();
        const handleButtonClicked = useCallback(
            (event: SyntheticEvent) => {
                onClick && !disabled
                    ? onClick(event, id)
                    : event.stopPropagation();
            },
            [id, onClick, disabled]
        );
        return (
            <div
                data-testid="button"
                css={button(
                    buttonType,
                    selected,
                    disabled,
                    subtext,
                    icon,
                    size,
                    backgroundColor
                )}
                onClick={handleButtonClicked}
                ref={ref}
                className={className}
            >
                <div
                    data-testid="button__text"
                    css={buttonText(theme, buttonType, subtext, size, icon)}
                >
                    <div css={buttonChildren()}>{children}</div>
                    <div css={iconContainer(size)}>{icon}</div>
                </div>
                {subtext && (
                    <div
                        data-testid="button__subtext"
                        css={buttonSubtext(theme)}
                    >
                        {subtext}
                    </div>
                )}
            </div>
        );
    }
);

export default Button;
