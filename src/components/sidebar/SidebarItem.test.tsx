import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import SidebarItem from './SidebarItem';
import SidebarItemProps from './SidebarItem.types';
import { ThemeProvider } from 'emotion-theming';
import userEvent from '@testing-library/user-event';
import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('Sidebar Item', () => {
    let propsStatusText: SidebarItemProps;
    let propsStatusTextDefaultColor: SidebarItemProps;

    beforeEach(() => {
        propsStatusText = {
            title: 'Title',
            subtitle: 'Subtitle',
            statusText: 'Status text',
            statusTextColor: '#ccc',
            selected: true,
            onClick: jest.fn(),
        };
        propsStatusTextDefaultColor = {
            title: 'Title',
            subtitle: 'Subtitle',
            statusText: 'Status text',
        };
    });

    const renderStatusTextComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <SidebarItem {...propsStatusText} />
            </ThemeProvider>
        );
    const renderStatusTextDefaultColorComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <SidebarItem {...propsStatusTextDefaultColor} />
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

    it('should have status text', () => {
        const { getByText } = renderStatusTextComponent();
        const element = getByText('Status text');
        expect(element).toBeInTheDocument();
    });

    it('status text color should be #ccc', () => {
        const { getByText } = renderStatusTextComponent();
        const element = getByText('Status text');
        expect(element).toHaveStyleRule('color', '#ccc');
    });

    it('selected background color should be #eff1f7', () => {
        const { container } = renderStatusTextComponent();
        expect(container.firstChild).toHaveStyleRule(
            'background-color',
            '#eff1f7'
        );
    });

    it('should trigger onClick when clicking', () => {
        const { getByText } = renderStatusTextComponent();
        userEvent.click(getByText('Title'));
        expect(propsStatusText.onClick).toHaveBeenCalledTimes(1);
    });

    it('status text default color should be green', () => {
        const { getByText } = renderStatusTextDefaultColorComponent();
        const element = getByText('Status text');
        expect(element).toHaveStyleRule('color', theme.colors.success);
    });

    it('unselected background color should be white', () => {
        const { container } = renderStatusTextDefaultColorComponent();
        expect(container.firstChild).toHaveStyleRule(
            'background-color',
            'white'
        );
    });
});
