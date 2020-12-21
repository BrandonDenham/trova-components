import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import Toggle from './toggle';
import ToggleProps from './toggle.types';
import { ThemeProvider } from 'emotion-theming';
import userEvent from '@testing-library/user-event';

import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('Toggle', () => {
    let activeProps: ToggleProps;

    beforeEach(() => {
        activeProps = {
            name: 'test',
            value: true,
            onChange: jest.fn(),
        };
    });
    const renderActiveComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Toggle {...activeProps} />
            </ThemeProvider>
        );

    it('onChange method should be triggered when toggle is clicked', () => {
        const { getByTestId } = renderActiveComponent();
        const element = getByTestId('toggle');
        expect(activeProps.onChange).toHaveBeenCalledTimes(0);
        userEvent.click(element);
        expect(activeProps.onChange).toHaveBeenCalledTimes(1);
    });
});
