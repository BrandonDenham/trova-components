import React, { useRef, useState } from 'react';

import { menu, menuButton, menuAvatar } from './Menu.styles';
import profileImageUrl from '../../shared/images/ProfilePhoto.png';

import Menu from './Menu';
import MenuItem from './MenuItem';

export default {
    title: 'Menu',
    component: Menu,
};

export const UserMenuLogged = () => {
    const parentRef = useRef(null);
    const [openMenu, setOpenMenu] = useState(true);

    const toggle = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div css={menu} ref={parentRef}>
            <button css={menuButton} onClick={() => toggle()}>
                <img
                    alt="Profile picture"
                    src={profileImageUrl}
                    css={menuAvatar}
                />
            </button>
            <Menu open={openMenu} title="User" referenceRef={parentRef}>
                <MenuItem title="Profile" />
                <MenuItem title="Change Password" />
                <MenuItem title="Log Out" />
            </Menu>
        </div>
    );
};
