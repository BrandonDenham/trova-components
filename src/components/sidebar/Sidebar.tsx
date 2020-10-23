/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';

import SidebarProps from './Sidebar.types';

const Sidebar: React.FC<SidebarProps> = ({ children, visible = true }) => (
    <React.Fragment>
        {visible && (
            <div
                data-testid="sidebar"
                css={css`
                    @media (min-width: 700px) {
                        max-width: 274px;
                    }
                    padding: 0rem 1rem 0rem 1rem;
                    box-sizing: border-box;
                `}
            >
                {children}
            </div>
        )}
    </React.Fragment>
);

export default Sidebar;
