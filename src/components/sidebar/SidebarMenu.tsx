/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { useCallback, useState } from 'react';

import SidebarMenuProps from './SidebarMenu.types';

import {
    sidebarMenu,
    sidebarMenuDiv,
    sidebarMenuTitle,
    sidebarMenuDivImg,
} from './SidebarMenu.styles';
import imgArrow from '../../shared/images/icons/small gray arrow.svg';

const SidebarMenu: React.FC<SidebarMenuProps> = ({
    open = true,
    onToggle,
    title,
    children,
}) => {
    const theme = useTheme();
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
