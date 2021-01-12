import React from 'react';
import { render, screen } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import SidebarItem from './SidebarItem';
import SidebarMenu from './SidebarMenu';
import SidebarMenuProps from './SidebarMenu.types';
import { ThemeProvider } from '@emotion/react';
import userEvent from '@testing-library/user-event';
import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('Sidebar Menu', () => {
    let propsOpen: SidebarMenuProps;
    let propsClosed: SidebarMenuProps;

    beforeEach(() => {
        propsOpen = {
            title: 'Title',
            open: true,
            children: (
                <SidebarItem
                    title="Ecuador with Jessica Tate"
                    subtitle="Sep 24-26, 2020"
                    statusText="Submitted - In Review"
                    selected={true}
                />
            ),
            onToggle: jest.fn(),
        };

        propsClosed = {
            title: 'Title',
            open: false,
            children: (
                <SidebarItem
                    title="Ecuador with Jessica Tate"
                    subtitle="Sep 24-26, 2020"
                    statusText="Submitted - In Review"
                    selected={true}
                />
            ),
        };
    });

    const renderOpenComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <SidebarMenu {...propsOpen} />
            </ThemeProvider>
        );
    const renderClosedComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <SidebarMenu {...propsClosed} />
            </ThemeProvider>
        );

    it('should have title text when open', () => {
        const { getByText } = renderOpenComponent();
        const element = getByText('Title');
        expect(element).toBeInTheDocument();
    });

    it('should have children when open', () => {
        const { getByTestId } = renderOpenComponent();
        const element = getByTestId('sidebar__item');
        expect(element).toBeInTheDocument();
    });

    it('should toggle when clicking on it, and call the onToggle function', () => {
        const { queryByTestId } = renderOpenComponent();
        userEvent.click(screen.getByText('Title'));
        const elementClosed = queryByTestId('sidebar__item');
        expect(elementClosed).toBeNull();
        expect(propsOpen.onToggle).toHaveBeenCalledTimes(1);
        userEvent.click(screen.getByText('Title'));
        const elementOpen = queryByTestId('sidebar__item');
        expect(elementOpen).toBeInTheDocument();
        expect(propsOpen.onToggle).toHaveBeenCalledTimes(2);
    });

    it('should have title text when open prop is false', () => {
        const { getByText } = renderClosedComponent();
        const element = getByText('Title');
        expect(element).toBeInTheDocument();
    });

    it('should not have children when open prop is false', () => {
        const { queryByTestId } = renderClosedComponent();
        const element = queryByTestId('sidebar__item');
        expect(element).toBeNull();
    });
});
