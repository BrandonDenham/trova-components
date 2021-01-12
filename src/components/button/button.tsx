/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SyntheticEvent } from 'react';
import React, { useCallback } from 'react';
import { useTheme } from '@emotion/react';

import { Theme } from '../theme/theme.types';
import ButtonProps from './button.types';
import {
    button,
    buttonText,
    buttonSubtext,
    buttonChildren,
} from './button.styles';
import { ButtonType } from './buttonType';

const Button = React.forwardRef<HTMLInputElement, ButtonProps>(
    (
        {
            children,
            buttonType = ButtonType.Primary,
            selected = false,
            id,
            onClick,
            icon,
            subtext,
        },
        ref
    ) => {
        //const  = props;
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
                css={button(buttonType, selected, subtext, icon)}
                onClick={handleButtonClicked}
                ref={ref}
            >
                <div
                    data-testid="button__text"
                    css={buttonText(theme, buttonType, subtext)}
                >
                    <div css={buttonChildren()}>{children}</div>
                    {icon}
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
