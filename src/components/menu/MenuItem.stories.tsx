import React from 'react';
import MenuItem from './MenuItem';

export default {
    title: 'Menu Item',
    component: MenuItem,
};

export const itemLink = () => <MenuItem title="Log Out" />;

export const itemLinkSelected = () => (
    <MenuItem title="Log Out" selected={true} />
);
