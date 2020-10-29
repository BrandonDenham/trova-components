/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../Theme/Theme.types';
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
