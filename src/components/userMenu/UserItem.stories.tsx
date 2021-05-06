import React from 'react';
import UserItem from './UserItem';


export default {
    title: 'User Item',
    component: UserItem,
};


export const itemLink = () => (
    <UserItem
        title="Log Out"
    />
);

export const itemLinkSelected = () => (
    <UserItem
        title="Log Out"
        selected={true}
    />
);