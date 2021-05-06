/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useCallback, useState } from 'react';

import UserMenuProps from './UserMenu.types';

import {
    userMenu,
    userMenuButton,
    userMenuAvatar,
    userMenuDropdown,
} from './UserMenu.styles';

import profileImageUrl from '../../shared/images/ProfilePhoto.png';


const UserMenu: React.FC<UserMenuProps> = ({
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
        <div data-testid="user__menu" css={userMenu} className={className}>
            <button css={userMenuButton} onClick={() => toggle()}>
                <img
                    alt="Profile picture"
                    src={profileImageUrl}
                    css={userMenuAvatar}
                />
            </button>
            <div css={userMenuDropdown}>{openMenu ? children : null}</div>
        </div>
    );
};

export default UserMenu;
