import React from 'react';

import MainNavigation from './MainNavigation';
import MainNavigationItem from './MainNavigationItem';
import Sidebar from './Sidebar';
const imgLogo = require('../../shared/images/logo/trovatrip logo.svg') as string;
const imgProfile = require('../../shared/images/ProfilePhoto.png') as string;
const img = <img alt="Logo" src={imgLogo} />;
export default {
    title: 'Main Navigation',
    component: MainNavigation,
};
export const ShowItems = () => (
    <MainNavigation
        showItems={true}
        logo={img}
        hasAlerts={false}
        profileImageUrl={imgProfile}
        anchor={true}
    >
        <MainNavigationItem content="Trips" selected={true} />
        <MainNavigationItem content="Livestreams" />
        <MainNavigationItem content="Marketing" />
        <MainNavigationItem content="Community" />
    </MainNavigation>
);

export const HideItems = () => (
    <MainNavigation
        logo={img}
        hasAlerts={false}
        profileImageUrl={imgProfile}
        anchor={true}
    >
        <MainNavigationItem content="Trips" selected={true} />
        <MainNavigationItem content="Livestreams" />
        <MainNavigationItem content="Marketing" />
        <MainNavigationItem content="Community" />
    </MainNavigation>
);
