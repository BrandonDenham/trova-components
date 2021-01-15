import React from 'react';
import Icon from '../icon';

import Header from './Header';
import { IconName } from '../icon/';

import { Colors } from '../../shared/constants/colors';
const imgBackground = require('../../shared/images/rails.png') as string;

export default {
    title: 'Header',
    component: Header,
};

export const HeaderImage = () => (
    <Header
        backgroundImage={imgBackground}
        title="Title of trip with Person McPerson"
        subTitle="Mon DD—DD, YYYY"
        icon={<Icon name={IconName.Location} color={Colors.Primary} />}
        iconDescription="Quito - Santa Cruz - Isabela"
    ></Header>
);
