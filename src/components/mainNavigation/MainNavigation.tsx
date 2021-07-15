/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { useState, useCallback, SyntheticEvent, useRef } from 'react';
import Hidden from '@material-ui/core/Hidden';

import MainNavigationProps from './MainNavigation.types';
import {
    mainNavigation,
    mainNavigationMainContainer,
    mainNavigationSmallContainer,
    mainNavigationItemContainer,
    mainNavigationLogo,
    mainNavigationDesktopChildren,
    mainNavigationImagesContainer,
    mainNavigationBellImage,
    mainNavigationProfilePictureImage,
    mainNavigationCloseImage,
    mainNavigationHamburgerImage,
} from './MainNavigation.styles';

import imageBellAlert from '../../shared/images/icons/active.svg';
import imageBell from '../../shared/images/icons/inactive.svg';
import imageClose from '../../shared/images/icons/close.svg';
import imageLogo from '../../shared/images/trovatrip logo.svg';
import imageHamburger from '../../shared/images/icons/hamburger.svg';
import Menu from '../menu';

const MainNavigation: React.FC<MainNavigationProps> = ({
    children,
    showItems,
    logoUrl = imageLogo,
    hasAlerts,
    onClickAlerts,
    profileImageUrl,
    onClickProfileImage,
    secondaryItems,
    anchor = false,
    className,
    menuItems,
    onMobileMenuOpen,
    onMobileMenuClose,
}) => {
    const theme = useTheme();
    const [itemsShown, setItemsShown] = useState(false);
    const handleMobileMenuOpen = useCallback(() => {
        setItemsShown(true);
        if (onMobileMenuOpen) {
            onMobileMenuOpen();
        }
    }, []);
    const handleMobileMenuClose = useCallback(() => {
        setItemsShown(false);
        if (onMobileMenuClose) {
            onMobileMenuClose();
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
    const menuTargetRef = useRef(null);
    return (
        <nav
            data-testid="mainnavigation"
            css={mainNavigation(theme)}
            className={className}
        >
            <div css={mainNavigationMainContainer(theme, anchor)}>
                <div css={mainNavigationSmallContainer}>
                    <div>
                        <img
                            alt="Logo"
                            src={logoUrl}
                            css={mainNavigationLogo(theme)}
                        />
                    </div>
                    <Hidden smDown>
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
                        ref={menuTargetRef}
                        alt="Profile picture"
                        data-testid="mainnavigation__profilePicture"
                        src={profileImageUrl}
                        css={mainNavigationProfilePictureImage(theme)}
                        onClick={handleProfilePictureClicked}
                    />
                    <Hidden mdUp>
                        {itemsShown ? (
                            <img
                                alt="Close"
                                src={imageClose}
                                css={mainNavigationCloseImage}
                                onClick={() => handleMobileMenuClose()}
                            />
                        ) : (
                            <img
                                alt="Toggle"
                                src={imageHamburger}
                                css={mainNavigationHamburgerImage}
                                onClick={() => handleMobileMenuOpen()}
                            />
                        )}
                    </Hidden>
                </div>
            </div>
            {showItems && (
                <Hidden mdUp>
                    <div css={mainNavigationItemContainer()}>
                        {secondaryItems ? secondaryItems : children}
                    </div>
                </Hidden>
            )}
            {menuItems && <Menu targetRef={menuTargetRef}>{menuItems}</Menu>}
        </nav>
    );
};

export default MainNavigation;
