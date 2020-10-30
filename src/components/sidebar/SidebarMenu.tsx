/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { useTheme } from 'emotion-theming';
import { Theme } from '../Theme/Theme.types';
import React, { useCallback } from 'react';

import SidebarMenuProps from './SidebarMenu.types';

import {
    sidebarMenu,
    sidebarMenuDiv,
    sidebarMenuTitle,
    sidebarMenuDivImg,
} from './SidebarMenu.styles';
const imgArrow = require('../../shared/images/icons/small gray arrow.svg') as string;

const SidebarMenu: React.FC<SidebarMenuProps> = ({
    open = true,
    onToggle,
    title,
    children,
}) => {
    const theme = useTheme<Theme>();
    const [openMenu, setOpenMenu] = useState(open);

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
            css={sidebarMenu}
        >
            <div css={sidebarMenuDiv}>
                <h5 css={sidebarMenuTitle(theme)}>{title}</h5>
                <img alt="Arrow" src={imgArrow} css={sidebarMenuDivImg} />
            </div>
            {openMenu ? children : null}
        </div>
    );
};

export default SidebarMenu;
