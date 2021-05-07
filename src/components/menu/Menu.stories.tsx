import React from 'react';

import Menu from './Menu';
import MenuItem from './MenuItem';

export default {
    title: 'Menu',
    component: Menu,
};

export const UserMenuLogged = () => (
    <Menu open={true} title="User">
        <MenuItem title="Profile" />
        <MenuItem title="Change Password" />
        <MenuItem title="Log Out" />
    </Menu>
);
