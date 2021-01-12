/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTheme } from '@emotion/react';

import { Theme } from '../theme/theme.types';
import SidebarProps from './Sidebar.types';
import { sidebar } from './Sidebar.styles';
const Sidebar: React.FC<SidebarProps> = ({ children, visible = true }) => {
    const theme = useTheme<Theme>();
    return (
        <React.Fragment>
            {visible && (
                <div data-testid="sidebar" css={sidebar(theme)}>
                    {children}
                </div>
            )}
        </React.Fragment>
    );
};

export default Sidebar;
