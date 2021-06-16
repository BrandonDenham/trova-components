/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';
import Hidden from '@material-ui/core/Hidden';

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
                <Hidden smDown>
                    <div
                        data-testid="sidebar"
                        css={sidebar(theme)}
                        className={className}
                    >
                        {children}
                    </div>
                </Hidden>
            )}
        </React.Fragment>
    );
};

export default Sidebar;
