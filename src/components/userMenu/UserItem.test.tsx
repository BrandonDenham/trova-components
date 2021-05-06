import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import UserItem from './UserItem';
import UserItemProps from './UserItem.types';
import { ThemeProvider } from '@emotion/react';
import userEvent from '@testing-library/user-event';
import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('User Item', () => {
    let propsStatusText: UserItemProps;
    let propsStatusTextDefaultColor: UserItemProps;

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
                <UserItem {...propsStatusText} />
            </ThemeProvider>
        );
    const renderStatusTextDefaultColorComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <UserItem {...propsStatusTextDefaultColor} />
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
