import React from 'react';

import Badge from './badge';
import { Colors } from '../..';

export default {
    title: 'Badge',
    component: Badge,
};

export const Default = () => (
    <Badge
        text="test"
        backgroundColor="#00b3ca"
        color={Colors.White}
        onClick={() => {}}
    />
);

export const BadgeNumber = () => (
    <Badge
        text="12"
        backgroundColor="#00b3ca"
        color={Colors.White}
        onClick={() => {}}
    />
);
