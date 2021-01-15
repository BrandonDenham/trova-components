import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import { ThemeProvider } from '@emotion/react';
import theme from '../../shared/themes/theme';
import HeaderProps from './Header.types';
import Header from './Header';
const imgBackground = require('../../shared/images/rails.png') as string;

expect.extend(matchers);

describe('Header', () => {
    let props: HeaderProps;

    beforeEach(() => {
        props = {
            title: `Test title`,
            subtitle: `Subtitle information`,
            backgroundImage: imgBackground,
        };
    });

    const renderContent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Header {...props} />
            </ThemeProvider>
        );

    it('should include title', () => {
        const { getByText } = renderContent();
        const element = getByText('Test title');
        expect(element).toBeInTheDocument();
    });
});
