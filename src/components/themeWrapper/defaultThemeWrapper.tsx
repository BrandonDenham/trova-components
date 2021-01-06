/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import defaultTheme from '../../shared/themes/theme';
import defaultThemeWrapperProps from './defaultThemeWrapper.types';
import { ThemeProvider } from 'emotion-theming';

/**
 * Renders a <DefaultThemeWrapper> component to wrap other elements of the library and provide
 * them the default library theme
 * @param  props
 * @param  props.children - The elements to render inside the theme provider
 */

const DefaultThemeWrapper: React.FC<defaultThemeWrapperProps> = ({
    children,
}) => <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;

export default DefaultThemeWrapper;
