import React from 'react';

import SidebarMenu from './SidebarMenu';
import SidebarItem from './SidebarItem';

export default {
    title: 'Sidebar Menu',
    component: SidebarMenu,
};

export const Closed = () => (
    <SidebarMenu open={false} title="Trips">
        <SidebarItem
            title="Ecuador with Jessica Tate"
            subtitle="Sep 24-26, 2020"
            statusText="Submitted - In Review"
            selected={true}
        />
    </SidebarMenu>
);

export const Open = () => (
    <SidebarMenu open={true} title="Trips">
        <SidebarItem
            title="Ecuador with Jessica Tate"
            subtitle="Sep 24-26, 2020"
            statusText="Submitted - In Review"
            selected={true}
        />
        <SidebarItem
            title="Title of the trip with Person McPerson The Second"
            subtitle="Sep 24-26, 2020"
            statusText="Submitted - In Review"
            selected={true}
        />
    </SidebarMenu>
);
