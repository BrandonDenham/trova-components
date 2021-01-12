/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';
import { useTheme } from '@emotion/react';
import React from 'react';

import { Theme } from '../theme/theme.types';
import { ComponentFooterProps } from './componentFooter.types';
import { disabledSpan, errorSpan } from './componentFooter.styles';
import ThemeWrapper from '../themeWrapper/themeWrapper';

/**
 * Renders a <ComponentFooter /> component
 * @param  props
 * @param  props.error - any errors
 * @param  props.disabled - defaults to false, if true there is no ability to click into the input
 * @param  props.disabledText - Text under the input that will be shown if disabled is true
 */

const ComponentFooter: React.FC<ComponentFooterProps> = ({
    disabled,
    disabledText,
    error,
}) => {
    //const localTheme: Theme;
    const theme = useTheme();
    return (
        <ThemeWrapper>
            <React.Fragment>
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
        </ThemeWrapper>
    );
};

export default ComponentFooter;
