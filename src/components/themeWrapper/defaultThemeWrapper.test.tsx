import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import DefaultThemeWrapper from './defaultThemeWrapper';
import DefaultThemeWrapperProps from './defaultThemeWrapper.types';
import { H1 } from '../typography';

expect.extend(matchers);

describe('Default Theme Wrapper', () => {
    let props: DefaultThemeWrapperProps;

    beforeEach(() => {
        props = {
            children: (
                <React.Fragment>
                    <H1>Costa Rica With Jessica Tate</H1>
                </React.Fragment>
            ),
        };
    });

    const renderContent = () => render(<DefaultThemeWrapper {...props} />);

    it('should include received children', () => {
        const { getByText } = renderContent();
        const element = getByText('Costa Rica With Jessica Tate');
        expect(element).toBeInTheDocument();
    });

    it('should have default theme style rules', () => {
        const { getByText } = renderContent();
        const element = getByText('Costa Rica With Jessica Tate');
        expect(element).toHaveStyleRule('font-size', '34px');
        expect(element).toHaveStyleRule('font-family', 'Roboto-Bold');
    });
});
