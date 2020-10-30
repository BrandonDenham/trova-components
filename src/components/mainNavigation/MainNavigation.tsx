/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useCallback, SyntheticEvent } from 'react';
import { Visible, Hidden } from 'react-grid-system';
import { useTheme } from 'emotion-theming';
import MainNavigationProps from './MainNavigation.types';
import { Theme } from '../Theme/Theme.types';
import {
    mainNavigation,
    mainNavigationMainContainer,
    mainNavigationSmallContainer,
    mainNavigationLogo,
    mainNavigationDesktopChildren,
    mainNavigationImagesContainer,
    mainNavigationBellImage,
    mainNavigationProfilePictureImage,
    mainNavigationCloseImage,
    mainNavigationHamburgerImage,
} from './MainNavigation.styles';

const imageBellAlert = require('../../shared/images/icons/active.svg') as string;
const imageBell = require('../../shared/images/icons/inactive.svg') as string;
const imageClose = require('../../shared/images/icons/close.svg') as string;
const imageLogo = require('../../shared/images/trovatrip logo.svg') as string;
const imageHamburger = require('../../shared/images/icons/hamburger.svg') as string;

const MainNavigation: React.FC<MainNavigationProps> = ({
    children,
    showItems,
    onShowItems,
    onDismissItems,
    logoUrl = imageLogo,
    hasAlerts,
    onClickAlerts,
    profileImageUrl,
    onClickProfileImage,
    secondaryItems,
    anchor = false,
}) => {
    const theme = useTheme<Theme>();
    const [itemsShown, setItemsShown] = useState(showItems);
    const handleShowItems = useCallback(() => {
        setItemsShown(true);
        if (onShowItems) {
            onShowItems();
        }
    }, []);
    const handleDismissItems = useCallback(() => {
        setItemsShown(false);
        if (onDismissItems) {
            onDismissItems();
        }
    }, []);
    const handleBellClicked = useCallback((event: SyntheticEvent) => {
        onClickAlerts ? onClickAlerts(event) : event.stopPropagation();
    }, []);
    const handleProfilePictureClicked = useCallback((event: SyntheticEvent) => {
        onClickProfileImage
            ? onClickProfileImage(event)
            : event.stopPropagation();
    }, []);
    return (
        <nav data-testid="mainnavigation" css={mainNavigation(theme)}>
            <div css={mainNavigationMainContainer(theme, anchor)}>
                <div css={mainNavigationSmallContainer}>
                    <div>
                        <img
                            alt="Logo"
                            src={logoUrl}
                            css={mainNavigationLogo(theme)}
                        />
                    </div>
                    <Hidden xs sm md>
                        <div css={mainNavigationDesktopChildren}>
                            {secondaryItems ? secondaryItems : children}
                        </div>
                    </Hidden>
                </div>
                <div css={mainNavigationImagesContainer}>
                    <img
                        alt="Notifications"
                        data-testid="mainnavigation__bell"
                        src={hasAlerts ? imageBellAlert : imageBell}
                        css={mainNavigationBellImage(theme)}
                        onClick={handleBellClicked}
                    />
                    <img
                        alt="Profile picture"
                        data-testid="mainnavigation__profilePicture"
                        src={profileImageUrl}
                        css={mainNavigationProfilePictureImage(theme)}
                        onClick={handleProfilePictureClicked}
                    />
                    <Visible xs sm md>
                        {itemsShown ? (
                            <img
                                alt="Close"
                                src={imageClose}
                                css={mainNavigationCloseImage}
                                onClick={() => handleDismissItems()}
                            />
                        ) : (
                            <img
                                alt="Toggle"
                                src={imageHamburger}
                                css={mainNavigationHamburgerImage}
                                onClick={() => handleShowItems()}
                            />
                        )}
                    </Visible>
                </div>
            </div>
            <Visible xs sm md>
                {itemsShown && (
                    <div>{secondaryItems ? secondaryItems : children}</div>
                )}
            </Visible>
        </nav>
    );
};

export default MainNavigation;
