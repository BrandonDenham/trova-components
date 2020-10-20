import React from 'react';

import Sidebar, { SidebarMenu, SidebarItem } from './Sidebar';

export default {
    title: 'Sidebar',
    component: Sidebar,
};
export const SampleSidebar = () => (
    <Sidebar>
        <SidebarMenu title="Trips">
            <SidebarItem
                title="Ecuador with Jessica Tate"
                subtitle="Sep 24-26, 2020"
                statusText="Submitted - In Review"
            />
            <SidebarItem
                title="Bali with Jessica Tate"
                subtitle="Sep 24-26, 2020"
                selected={true}
            />
            <SidebarItem
                title="Title of the trip with Person McPerson The Second"
                subtitle="Sep 24-26, 2020"
                statusText="Submitted - In Review"
            />
            <SidebarItem
                title="Location with Jessica Tate"
                subtitle="Sep 24-26, 2020"
            />
        </SidebarMenu>
        <SidebarMenu open={false} title="Requested Trips">
            <SidebarItem
                title="Ecuador with Jessica Tate"
                subtitle="Sep 24-26, 2020"
                statusText="Submitted - In Review"
            />
            <SidebarItem
                title="Bali with Jessica Tate"
                subtitle="Sep 24-26, 2020"
                selected={true}
            />
            <SidebarItem
                title="Title of the trip with Person McPerson The Second"
                subtitle="Sep 24-26, 2020"
                statusText="Submitted - In Review"
            />
            <SidebarItem
                title="Location with Jessica Tate"
                subtitle="Sep 24-26, 2020"
            />
        </SidebarMenu>
        <SidebarMenu open={false} title="Past Trips">
            <SidebarItem
                title="Ecuador with Jessica Tate"
                subtitle="Sep 24-26, 2020"
                statusText="Submitted - In Review"
            />
            <SidebarItem
                title="Bali with Jessica Tate"
                subtitle="Sep 24-26, 2020"
                selected={true}
            />
            <SidebarItem
                title="Title of the trip with Person McPerson The Second"
                subtitle="Sep 24-26, 2020"
                statusText="Submitted - In Review"
            />
            <SidebarItem
                title="Location with Jessica Tate"
                subtitle="Sep 24-26, 2020"
            />
        </SidebarMenu>
    </Sidebar>
);
