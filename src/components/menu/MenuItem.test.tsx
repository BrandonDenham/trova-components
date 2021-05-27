import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import MenuItem from './MenuItem';
import MenuItemProps from './MenuItem.types';
import { ThemeProvider } from '@emotion/react';
import userEvent from '@testing-library/user-event';
import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('User Item', () => {
    let propsStatusText: MenuItemProps;
    let propsStatusTextDefaultColor: MenuItemProps;

    beforeEach(() => {
        propsStatusText = {
            title: 'Title',
            selected: true,
            onClick: jest.fn(),
        };
        propsStatusTextDefaultColor = {
            title: 'Title',
        };
    });

    const renderStatusTextComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <MenuItem {...propsStatusText} />
            </ThemeProvider>
        );
    const renderStatusTextDefaultColorComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <MenuItem {...propsStatusTextDefaultColor} />
            </ThemeProvider>
        );

    it('should have title text', () => {
        const { getByText } = renderStatusTextComponent();
        const element = getByText('Title');
        expect(element).toBeInTheDocument();
    });

    it('should have subtitle text', () => {
        const { getByText } = renderStatusTextComponent();
        const element = getByText('Subtitle');
        expect(element).toBeInTheDocument();
    });

    it('should trigger onClick when clicking', () => {
        const { getByText } = renderStatusTextComponent();
        userEvent.click(getByText('Title'));
        expect(propsStatusText.onClick).toHaveBeenCalledTimes(1);
    });

    it('unselected background color should be white', () => {
        const { container } = renderStatusTextDefaultColorComponent();
        expect(container.firstChild).toHaveStyleRule(
            'background-color',
            'white'
        );
    });
});
