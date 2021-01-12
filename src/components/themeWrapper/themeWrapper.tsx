/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ThemeProvider } from '@emotion/react';
import createExtraScopePlugin from 'stylis-plugin-extra-scope';

import defaultTheme from '../../shared/themes/theme';
import themeWrapperProps from './themeWrapper.types';
import GlobalStyles from '../Layout/GlobalStyles/GlobalStyles';

const STRONG_ID = 'trova-components-scope';
const cache = createCache({
    stylisPlugins: [createExtraScopePlugin(`#${STRONG_ID}`)],
});

/**
 * Renders a <ThemeWrapper> component to wrap other elements of the library and provide
 * them the default library theme
 * @param  props
 * @param  props.children - The elements to render inside the theme provider
 */

const ThemeWrapper: React.FC<themeWrapperProps> = ({
    children,
}) => (
    <CacheProvider value={cache}>
        <div id={STRONG_ID}>
            <GlobalStyles />
            <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </div>
    </CacheProvider>
);

export default ThemeWrapper;
