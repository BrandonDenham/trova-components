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

const customViewports = {
    mobile: {
        name: 'Mobile',
        styles: {
            height: '665px',
            width: '400px',
        },
        type: 'mobile',
    },
    tablet: {
        name: 'Tablet',
        styles: {
            height: '1024px',
            width: '768px',
        },
        type: 'tablet',
    },
};

export const parameters = {
    viewport: {
        viewports: {
            ...customViewports,
        },
    },
    layout: 'fullscreen',
};
