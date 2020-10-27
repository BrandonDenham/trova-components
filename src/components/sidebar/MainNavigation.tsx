/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState, useCallback, SyntheticEvent } from 'react';
import { Visible, Hidden } from 'react-grid-system';
import MainNavigationProps from './MainNavigation.types';
import './Sidebar.css';
import { useWindowDimensions } from '../../shared/hooks/hooks';

const imgBellAlert = require('../../shared/images/logo/active.svg') as string;
const imgClose = require('../../shared/images/logo/close.svg') as string;
const imgLogo = require('../../shared/images/logo/trovatrip logo.svg') as string;
const imgProfile = require('../../shared/images/ProfilePhoto.png') as string;
const imgBurger = require('../../shared/images/logo/burger.svg') as string;

const MainNavigation: React.FC<MainNavigationProps> = ({
    children,
    showItems,
    onShowItems,
    onDismissItems,
    logo,
    hasAlerts,
    onClickAlerts,
    profileImageUrl,
    onClickProfileImage,
    secondaryItems,
    anchor = false,
}) => {
    const { width } = useWindowDimensions();
    const [itemsShown, setItemsShown] = useState(showItems);
    const handleShowItems = () => {
        setItemsShown(true);
        if (onShowItems) {
            onShowItems(true);
        }
    };
    const handleDismissItems = () => {
        setItemsShown(false);
        if (onDismissItems) {
            onDismissItems(false);
        }
    };
    const bellClicked = (event: SyntheticEvent) => {
        onClickAlerts
            ? onClickAlerts(event)
            : event.stopPropagation();
    };
    const profilePictureClicked = (event: SyntheticEvent) => {
        onClickProfileImage
            ? onClickProfileImage(event)
            : event.stopPropagation();
    };
    ;
    return (
        <div>
            <div
                data-testid="mainnavigation"
                css={css`
                    @media (min-width: 835px) {
                        padding: 1.5rem 3.5rem 3rem 2rem;
                    }
                    box-sizing: border-box;
                `}
            >
                <div
                    css={css`
                        @media (max-width: 835px) {
                            padding: 1.5rem 0 3.5rem 0;
                            ${anchor === true &&
                            `position: sticky; top: 0rem; background: white`}
                        }
                        display: flex;
                        justify-content: space-between;
                    `}
                >
                    <div
                        css={css`
                            display: flex;
                            align-items: center;
                            overflow: auto;
                        `}
                    >
                        <div>
                            <img
                                alt="Logo"
                                src={imgLogo}
                                css={css`
                                    @media (min-width: 835px) {
                                        padding-right: 7rem;
                                        width: 10rem;
                                    }
                                    @media (max-width: 835px) {
                                        width: 9rem;
                                        padding-left: 1rem;
                                    }
                                `}
                            />
                        </div>
                        <Hidden xs sm md>
                            <div
                                css={css`
                                    display: flex;
                                    padding-top: 0.3rem;
                                `}
                            >
                                {children}
                            </div>
                        </Hidden>
                    </div>
                    <div
                        css={css`
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                        `}
                    >
                        <img
                            alt="Notifications"
                            src={imgBellAlert}
                            css={css`
                                @media (min-width: 835px) {
                                    width: 2rem;
                                    height: 2rem;
                                }
                                @media (max-width: 835px) {
                                    width: 1.5rem;
                                    height: 1.5rem;
                                }
                                cursor: pointer;
                            `}
                            onClick={bellClicked}
                        />
                        <img
                            alt="Profile picture"
                            src={imgProfile}
                            css={css`
                                @media (min-width: 835px) {
                                    padding-left: 1.5rem;
                                    width: 3.5rem;
                                    height: 3.5rem;
                                }
                                @media (max-width: 835px) {
                                    padding-left: 1rem;
                                    padding-right: 1.3rem;
                                    width: 2.5rem;
                                    height: 2.5rem;
                                }
                                cursor: pointer;
                            `}
                            onClick={profilePictureClicked}
                        />
                        <Visible xs sm md>
                            {itemsShown ? (
                                <img
                                    alt="Close"
                                    src={imgClose}
                                    css={css`
                                        width: 1.5rem;
                                        height: 1.5rem;
                                        flex-grow: 1;
                                        padding-right: 1.3rem;
                                        cursor: pointer;
                                    `}
                                    onClick={() => handleDismissItems()}
                                />
                            ) : (
                                <img
                                    alt="Toggle"
                                    src={imgBurger}
                                    css={css`
                                        width: 1.5rem;
                                        height: 1.5rem;
                                        flex-grow: 1;
                                        padding-right: 1.3rem;
                                        cursor: pointer;
                                    `}
                                    onClick={() => handleShowItems()}
                                />
                            )}
                        </Visible>
                    </div>
                </div>
                <Visible xs sm md>
                    {itemsShown && <div>{children}</div>}
                </Visible>
            </div>
        </div>
    );
};

export default MainNavigation;
