import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';
import SidebarMenu from './SidebarMenu';
import SidebarProps from './Sidebar.types';
import { ThemeProvider } from '@emotion/react';
import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('Sidebar', () => {
    let propsVisible: SidebarProps;
    let propsNotVisible: SidebarProps;

    beforeEach(() => {
        propsVisible = {
            visible: true,
            children: (
                <>
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
                </>
            ),
        };

        propsNotVisible = {
            visible: false,
            children: (
                <>
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
                </>
            ),
        };
    });

    const renderVisibleComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Sidebar {...propsVisible} />
            </ThemeProvider>
        );
    const renderNotVisibleComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Sidebar {...propsNotVisible} />
            </ThemeProvider>
        );

    it('should have three sidebar menus when visible', () => {
        const { queryAllByTestId } = renderVisibleComponent();
        const element = queryAllByTestId('sidebar__menu');
        expect(element).toHaveLength(3);
    });

    it('should not exist when not visible', () => {
        const { queryByTestId } = renderNotVisibleComponent();
        const element = queryByTestId('sidebar');
        expect(element).toBeNull();
    });
});
