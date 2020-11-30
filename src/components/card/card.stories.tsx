import React from 'react';

import Card from './card';
import { H3, H4, P, ParagraphSize } from '../typography';
import Button, { ButtonType } from '../button';
import Icon, { IconName } from '../icon';
import { Colors } from '../../shared/constants/colors';
import { CardAlignment } from './cardAlignment';
export default {
    title: 'Card',
    component: Card,
};

export const CardText = () => (
    <Card alignment={CardAlignment.Left}  backgroundColor={Colors.LightGray}>
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


export const CardButton = () => (
    <Card alignment={CardAlignment.Center} backgroundColor={Colors.LightGray}>
        <React.Fragment>
            <Button
                buttonType={ButtonType.Primary}
                icon={<Icon name={IconName.Plus} color={Colors.White} />}
            >
                Add new trip
            </Button>
        </React.Fragment>
    </Card>
);
