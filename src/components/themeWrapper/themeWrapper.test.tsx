import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import ThemeWrapper from './themeWrapper';
import ThemeWrapperProps from './themeWrapper.types';
import { H1 } from '../typography';

expect.extend(matchers);

describe('Theme Wrapper', () => {
    let props: ThemeWrapperProps;

    beforeEach(() => {
        props = {
            children: <H1>Costa Rica With Jessica Tate</H1>,
        };
    });

    const renderContent = () => render(<ThemeWrapper {...props} />);

    it('should include received children', () => {
        const { getByText } = renderContent();
        const element = getByText('Costa Rica With Jessica Tate');
        expect(element).toBeInTheDocument();
    });
});
