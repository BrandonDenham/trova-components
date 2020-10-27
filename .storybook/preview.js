import React from 'react';
import { addDecorator } from '@storybook/react';

import GlobalStyles from '../src/components/Layout/GlobalStyles/GlobalStyles';
import EmotionThemeProvider from './decorators/ThemeProvider';

addDecorator((story) => (
    <>
        <GlobalStyles />
            {story()}
    </>
));

addDecorator(EmotionThemeProvider);

export const parameters = { layout: 'fullscreen' };
