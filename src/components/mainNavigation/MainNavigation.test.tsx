import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import MainNavigationItem from './MainNavigationItem';
import MainNavigation from './MainNavigation';
import MainNavigationProps from './MainNavigation.types';
import { ThemeProvider } from 'emotion-theming';
import userEvent from '@testing-library/user-event';

const imgLogo = require('../../shared/images/trovatrip logo.svg') as string;
const imgProfile = require('../../shared/images/ProfilePhoto.png') as string;
import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('Main Navigation', () => {
    let props: MainNavigationProps;

    beforeEach(() => {
        props = {
            showItems: true,
            hasAlerts: true,
            logoUrl: imgLogo,
            profileImageUrl: imgProfile,
            onClickAlerts: jest.fn(),
            onClickProfileImage: jest.fn(),
            children: (
                <>
                    <MainNavigationItem content="Trips" selected={true} />
                    <MainNavigationItem content="Livestreams" />
                    <MainNavigationItem content="Marketing" />
                    <MainNavigationItem content="Community" />
                </>
            ),
        };
    });

    const renderComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <MainNavigation {...props} />
            </ThemeProvider>
        );

    it('should have four navigation items', () => {
        const { queryAllByTestId } = renderComponent();
        const element = queryAllByTestId('mainnavigationitem');
        expect(element).toHaveLength(4);
    });

    it('should trigger onClickAlert when clicking the bell', () => {
        const { getByTestId } = renderComponent();
        userEvent.click(getByTestId('mainnavigation__bell'));
        expect(props.onClickAlerts).toHaveBeenCalledTimes(1);
    });

    it('should trigger onClickProfileImage when clicking the profile picture', () => {
        const { getByTestId } = renderComponent();
        userEvent.click(getByTestId('mainnavigation__profilePicture'));
        expect(props.onClickProfileImage).toHaveBeenCalledTimes(1);
    });
});
