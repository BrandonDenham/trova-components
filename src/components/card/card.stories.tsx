import React from 'react';

import Card from './card';
import { H3, H4, P, ParagraphSize } from '../typography';
import { Colors } from '../../shared/constants/colors';
export default {
    title: 'Card',
    component: Card,
};

export const CardText = () => (
    <Card backgroundColor={Colors.LightGray}>
        <React.Fragment>
            <H4>Info</H4>
            <br />
            <H3>Welcome to Bali</H3>
            <br />
            <P size={ParagraphSize.Small}>
                Tum sociis natoque penatibus et magnis dis parturient. Quisque
                placerat facilisis egestas cillum dolore. Lorem ipsum dolor sit
                amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut
                labore et.
            </P>
        </React.Fragment>
    </Card>
);