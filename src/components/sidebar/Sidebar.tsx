/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';
import SidebarProps from './Sidebar.types';
import { sidebar } from './Sidebar.styles';
const Sidebar: React.FC<SidebarProps> = ({
    children,
    visible = true,
    className,
}) => {
    const theme = useTheme();
    return (
        <React.Fragment>
            {visible && (
                <div
                    data-testid="sidebar"
                    css={sidebar(theme)}
                    className={className}
                >
                    {children}
                </div>
            )}
        </React.Fragment>
    );
};

export default Sidebar;
