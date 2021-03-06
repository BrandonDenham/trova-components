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
    onShowItems,
    onDismissItems,
    logoUrl = imageLogo,
    hasAlerts,
    onClickAlerts,
    profileImageUrl,
    onClickProfileImage,
    secondaryItems,
    anchor = false,
    className,
    menuItems,
}) => {
    const theme = useTheme();
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
                    </Hidden>
                </div>
            </div>
            {itemsShown && (
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
