import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import MainNavigationItem from './MainNavigationItem';
import MainNavigationItemProps from './MainNavigationItem.types';
import { ThemeProvider } from 'emotion-theming';
import userEvent from '@testing-library/user-event';
import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('Main Navigation Item', () => {
    let propsSelected: MainNavigationItemProps;

    beforeEach(() => {
        propsSelected = {
            content: 'Livestreams',
            selected: true,
            onClick: jest.fn(),
        };
    });

    const renderComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <MainNavigationItem {...propsSelected} />
            </ThemeProvider>
        );

    it('should have content text', () => {
        const { getByText } = renderComponent();
        const element = getByText('Livestreams');
        expect(element).toBeInTheDocument();
    });
    it('should trigger onClick when clicking', () => {
        const { getByText } = renderComponent();
        userEvent.click(getByText('Livestreams'));
        expect(propsSelected.onClick).toHaveBeenCalledTimes(1);
    });

});
