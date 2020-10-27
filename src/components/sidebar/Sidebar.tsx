/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import SidebarProps from './Sidebar.types';
import {sidebar} from './Sidebar.styles';
const Sidebar: React.FC<SidebarProps> = ({ children, visible = true }) => (
    <React.Fragment>
        {visible && (
            <div data-testid="sidebar" css={sidebar}>
                {children}
            </div>
        )}
    </React.Fragment>
);

export default Sidebar;
