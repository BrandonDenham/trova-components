import React from 'react';

import ThemeWrapper from './themeWrapper';
import { H1, H2, H4 } from '../typography';
import Button, { ButtonType } from '../button';
import Icon, { IconName } from '../icon';
import { Colors } from '../../shared/constants/colors';
import MainContent from '../mainContent/mainContent';
export default {
    title: 'Theme Wrapper',
    component: ThemeWrapper,
};

export const ThemeWrapperExample = () => (
    <ThemeWrapper>
        <MainContent>
            <H1>Costa Rica With Jessica Tate</H1>
            <br />
            <H2>Review Itinerary</H2>
            <br />
            <H4>
                To get started, add the name, country, and general information
                about the trip.
            </H4>
            <br />
            <Button
                buttonType={ButtonType.Primary}
                icon={<Icon name={IconName.Plus} color={Colors.White} />}
            >
                Add to itinerary
            </Button>
        </MainContent>
    </ThemeWrapper>
);
