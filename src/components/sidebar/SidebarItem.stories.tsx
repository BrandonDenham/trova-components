import React from 'react';

import SidebarItem from './SidebarItem';

export default {
    title: 'Sidebar Item',
    component: SidebarItem,
};

export const Selected = () => (
    <SidebarItem
        title="Ecuador with Jessica Tate"
        subtitle="Sep 24-26, 2020"
        statusText="Submitted - In Review"
        selected={true}
    />
);

export const Unselected = () => (
    <SidebarItem
        title="Ecuador with Jessica Tate"
        subtitle="Sep 24-26, 2020"
        statusText="Not Submitted"
        statusTextColor="#DC5F4F"
    />
);

export const noStatus = () => (
    <SidebarItem
        title="Ecuador with Jessica Tate"
        subtitle="Sep 24-26, 2020"
        selected={true}
    />
);
