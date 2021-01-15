import { ThemeProvider } from '@emotion/react';
import React from 'react';

import theme from '../../src/shared/themes/theme';

const EmotionThemeProvider = (storyFn) => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
export default EmotionThemeProvider;
