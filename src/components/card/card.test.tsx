import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import Card from './card';
import CardProps from './card.types';
import { ThemeProvider } from '@emotion/react';
import theme from '../../shared/themes/theme';
import { H1 } from '../typography';

expect.extend(matchers);

describe('Card', () => {
    let props: CardProps;

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
                <Card {...props} />
            </ThemeProvider>
        );

    it('should include received children', () => {
        const { getByText } = renderContent();
        const element = getByText('Costa Rica With Jessica Tate');
        expect(element).toBeInTheDocument();
    });
});
