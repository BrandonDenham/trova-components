/** @jsx jsx */
import { jsx, CacheProvider, ThemeProvider } from '@emotion/react';
import React from 'react';
import createCache from '@emotion/cache';
import createExtraScopePlugin from 'stylis-plugin-extra-scope';

import defaultTheme from '../../shared/themes/theme';
import themeWrapperProps from './themeWrapper.types';
import GlobalStyles from '../Layout/GlobalStyles/GlobalStyles';

const STRONG_ID = 'trova-components-scope';
const cache = createCache({
    key: STRONG_ID,
    stylisPlugins: [createExtraScopePlugin(`#${STRONG_ID}`)],
});

/**
 * Renders a <ThemeWrapper> component to wrap other elements of the library and provide
 * them the default library theme
 * @param  props
 * @param  props.children - The elements to render inside the theme provider
 */

const ThemeWrapper: React.FC<themeWrapperProps> = ({ children }) => (
    <React.Fragment>
        <GlobalStyles />
        <CacheProvider value={cache}>
            <div id={STRONG_ID}>
                <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
            </div>
        </CacheProvider>
    </React.Fragment>
);

export default ThemeWrapper;
