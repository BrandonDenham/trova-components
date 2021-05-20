import React from 'react';

import Badge from './badge';

export default {
    title: 'Badge',
    component: Badge,
};

export const Default = () => (
    <Badge
        label="test"
        backgroundColor="#00b3ca"
        borderRadius={4}
        color="#ffffff"
        onClick={() => {}}
    />
);

export const BadgeNumber = () => (
    <Badge
        label="12"
        backgroundColor="#00b3ca"
        borderRadius={50}
        color="#ffffff"
        onClick={() => {}}
    />
);