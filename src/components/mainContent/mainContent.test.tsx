import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import MainContent from './mainContent';
import MainContentProps from './mainContent.types';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../shared/themes/theme';
import { H1 } from '../typography';

expect.extend(matchers);

describe('Main Content', () => {
    let props: MainContentProps;

    beforeEach(() => {
        props = {
            children: (
                <React.Fragment>
                    <H1>Costa Rica With Jessica Tate</H1>
                </React.Fragment>
            ),
        };
    });

    const renderContent = () =>
        render(
            <ThemeProvider theme={theme}>
                <MainContent {...props} />
            </ThemeProvider>
        );

    it('should include received children', () => {
        const { getByText } = renderContent();
        const element = getByText('Costa Rica With Jessica Tate');
        expect(element).toBeInTheDocument();
    });
});
