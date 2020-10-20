import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../src/shared/themes/theme';

const EmotionThemeProvider = (storyFn) => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
export default EmotionThemeProvider;
