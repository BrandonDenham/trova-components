import React from 'react';

import MainNavigationItem from './MainNavigationItem';

export default {
    title: 'Main Navigation Item',
    component: MainNavigationItem,
};

export const Selected = () => (
    <MainNavigationItem
        content="Livestreams"
        selected={true}
    />
);

export const Unselected = () => (
    <MainNavigationItem
        content="Livestreams"
    />
);
