import React from 'react';

import UserMenu from './UserMenu';
import UserItem from './UserItem';

export default {
    title: 'User Menu',
    component: UserMenu,
};

export const UserMenuLogged = () => (
    <UserMenu open={true} title="User">
        <UserItem title="Profile" />
        <UserItem title="Change Password" />
        <UserItem title="Log Out" />
    </UserMenu>
);
