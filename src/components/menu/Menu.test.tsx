import React from 'react';
import { render, screen } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import MenuItem from './MenuItem';
import Menu from './Menu';
import MenuProps from './Menu.types';
import { ThemeProvider } from '@emotion/react';
import userEvent from '@testing-library/user-event';
import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('User Menu', () => {
    let propsOpen: MenuProps;
    let propsClosed: MenuProps;

    beforeEach(() => {
        propsOpen = {
            title: 'Title',
            open: true,
            children: <MenuItem title="Profile" selected={true} />,
            onToggle: jest.fn(),
        };

        propsClosed = {
            title: 'Title',
            open: false,
            children: <MenuItem title="Profile" selected={true} />,
        };
    });

    const renderOpenComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Menu {...propsOpen} />
            </ThemeProvider>
        );
    const renderClosedComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Menu {...propsClosed} />
            </ThemeProvider>
        );

    it('should have title text when open', () => {
        const { getByText } = renderOpenComponent();
        const element = getByText('Title');
        expect(element).toBeInTheDocument();
    });

    it('should have children when open', () => {
        const { getByTestId } = renderOpenComponent();
        const element = getByTestId('user__item');
        expect(element).toBeInTheDocument();
    });

    it('should toggle when clicking on it, and call the onToggle function', () => {
        const { queryByTestId } = renderOpenComponent();
        userEvent.click(screen.getByText('Title'));
        const elementClosed = queryByTestId('user__item');
        expect(elementClosed).toBeNull();
        expect(propsOpen.onToggle).toHaveBeenCalledTimes(1);
        userEvent.click(screen.getByText('Title'));
        const elementOpen = queryByTestId('user__item');
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
        const element = queryByTestId('user__item');
        expect(element).toBeNull();
    });
});
