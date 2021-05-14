import React from 'react';
import { MenuItem } from '../menu';

import MainNavigation from './MainNavigation';
import MainNavigationItem from './MainNavigationItem';
const imgLogo = require('../../shared/images/trovatrip logo.svg') as string;
const imgProfile = require('../../shared/images/ProfilePhoto.png') as string;
export default {
    title: 'Main Navigation',
    component: MainNavigation,
};
export const ShowItems = () => (
    <MainNavigation
        showItems={true}
        logoUrl={imgLogo}
        hasAlerts={false}
        profileImageUrl={imgProfile}
        menuItems={[
            <MenuItem
                title={`Profile`}
                onClick={() => console.log(`Go to profile`)}
            />,
            <MenuItem
                title={`Change password`}
                onClick={() => console.log(`Change password`)}
            />,
            <MenuItem
                title={`Log out`}
                onClick={() => console.log(`Log out`)}
            />,
        ]}
    >
        <MainNavigationItem content="Trips" selected={true} />
        <MainNavigationItem content="Livestreams" />
        <MainNavigationItem content="Marketing" />
        <MainNavigationItem content="Community" />
    </MainNavigation>
);

export const HideItems = () => (
    <MainNavigation
        logoUrl={imgLogo}
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
