/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useCallback, useState } from 'react';

import MenuProps from './Menu.types';

import { menu, menuButton, menuAvatar, menuDropdown } from './Menu.styles';

import profileImageUrl from '../../shared/images/ProfilePhoto.png';

const Menu: React.FC<MenuProps> = ({
    open = true,
    onToggle,
    children,
    className,
}) => {
    const [openMenu, setOpenMenu] = useState(open);

    const toggle = useCallback(() => {
        if (onToggle) {
            onToggle(!openMenu);
        }
        setOpenMenu(!openMenu);
    }, [openMenu]);

    return (
        <div data-testid="user__menu" css={menu} className={className}>
            <button css={menuButton} onClick={() => toggle()}>
                <img
                    alt="Profile picture"
                    src={profileImageUrl}
                    css={menuAvatar}
                />
            </button>
            <div css={menuDropdown}>{openMenu ? children : null}</div>
        </div>
    );
};

export default Menu;
