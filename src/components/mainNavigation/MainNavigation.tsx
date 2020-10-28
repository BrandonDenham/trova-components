/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useCallback, SyntheticEvent } from 'react';
import { Visible, Hidden } from 'react-grid-system';
import MainNavigationProps from './MainNavigation.types';
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

const imgBellAlert = require('../../shared/images/icons/active.svg') as string;
const imgBell = require('../../shared/images/icons/active.svg') as string;
const imgClose = require('../../shared/images/icons/close.svg') as string;
const imgLogo = require('../../shared/images/trovatrip logo.svg') as string;
const imgHamburger = require('../../shared/images/icons/hamburger.svg') as string;

const MainNavigation: React.FC<MainNavigationProps> = ({
    children,
    showItems,
    onShowItems,
    onDismissItems,
    logoUrl = imgLogo,
    hasAlerts,
    onClickAlerts,
    profileImageUrl,
    onClickProfileImage,
    secondaryItems,
    anchor = false,
}) => {
    const [itemsShown, setItemsShown] = useState(showItems);
    const handleShowItems = useCallback(() => {
        setItemsShown(true);
        if (onShowItems) {
            onShowItems(true);
        }
    }, [itemsShown]);
    const handleDismissItems = useCallback(() => {
        setItemsShown(false);
        if (onDismissItems) {
            onDismissItems(false);
        }
    }, [itemsShown]);
    const bellClicked = useCallback((event: SyntheticEvent) => {
        onClickAlerts ? onClickAlerts(event) : event.stopPropagation();
    }, []);
    const profilePictureClicked = useCallback((event: SyntheticEvent) => {
        onClickProfileImage
            ? onClickProfileImage(event)
            : event.stopPropagation();
    }, []);
    return (
        <div>
            <div data-testid="mainnavigation" css={mainNavigation}>
                <div css={mainNavigationMainContainer(anchor)}>
                    <div css={mainNavigationSmallContainer}>
                        <div>
                            <img
                                alt="Logo"
                                src={logoUrl}
                                css={mainNavigationLogo}
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
                            src={hasAlerts ? imgBellAlert : imgBell}
                            css={mainNavigationBellImage}
                            onClick={bellClicked}
                        />
                        <img
                            alt="Profile picture"
                            data-testid="mainnavigation__profilePicture"
                            src={profileImageUrl}
                            css={mainNavigationProfilePictureImage}
                            onClick={profilePictureClicked}
                        />
                        <Visible xs sm md>
                            {itemsShown ? (
                                <img
                                    alt="Close"
                                    src={imgClose}
                                    css={mainNavigationCloseImage}
                                    onClick={() => handleDismissItems()}
                                />
                            ) : (
                                <img
                                    alt="Toggle"
                                    src={imgHamburger}
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
            </div>
        </div>
    );
};

export default MainNavigation;
