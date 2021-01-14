import React from 'react';

import Header from './Header';
const imgBackground = require('../../shared/images/rails.png') as string;
/*import { H3, H4, P, ParagraphSize } from '../typography';
import { Colors } from '../../shared/constants/colors';
import DraggableContainer from '../draggable/DraggableContainer';
import DraggableCard from './DraggableCard';
 */
export default {
    title: 'Header',
    component: Header,
};

export const HeaderImage = () => (
    <Header
        backgroundImage={imgBackground}
        title="some header here"
        dates="Mon DD—DD, YYYY"
        location="Quito - Santa Cruz - Isabela"
    ></Header>
);
/* export const CardText = () => (
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

 */
