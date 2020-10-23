/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import { useTheme } from 'emotion-theming';
import React, { useCallback } from 'react';

import SidebarMenuProps from './SidebarMenu.types';
import { Theme } from '../Theme/Theme.types';

const imgArrow = require('../../shared/images/icons/small gray arrow.svg') as string;

const SidebarMenu: React.FC<SidebarMenuProps> = ({
    open = true,
    onToggle,
    title,
    children,
}) => {
    const [openMenu, setOpenMenu] = useState(open);
    const theme = useTheme<Theme>();
    const toggle = useCallback(() => {
        if (onToggle) {
            onToggle(!openMenu);
        }
        setOpenMenu(!openMenu);
    }, [openMenu]);
    return (
        <div
            data-testid="sidebar__menu"
            onClick={() => toggle()}
            css={css`
                cursor: pointer;
            `}
        >
            <div
                css={css`
                    display: flex;
                    justify-content: space-between;
                `}
            >
                <h5
                    css={css`
                        text-transform: uppercase;
                        font-size: 13px;
                        line-height: 15px;
                        font-family: 'Roboto-Bold';
                        padding: 0rem 0rem 0.7rem 1rem;
                        color: ${theme.colors.muted};
                    `}
                >
                    {title}
                </h5>
                <img
                    alt="Arrow"
                    src={imgArrow}
                    css={css`
                        padding: 0 1rem 0.7rem 0;
                    `}
                />
            </div>
            {openMenu ? children : null}
        </div>
    );
};

export default SidebarMenu;
