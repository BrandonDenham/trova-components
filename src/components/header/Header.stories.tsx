import React from 'react';

import Header from './Header';
const imgBackground = require('../../shared/images/rails.png') as string;

export default {
    title: 'Header',
    component: Header,
};

export const HeaderImage = () => (
    <Header
        backgroundImage={imgBackground}
        title="Title of trip with Person McPerson"
        dates="Mon DD—DD, YYYY"
        location="Quito - Santa Cruz - Isabela"
    ></Header>
);
