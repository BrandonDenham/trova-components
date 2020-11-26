import React from 'react';

import MainContent from './mainContent';
import { H1, H2, H4 } from '../typography';
import Button, { ButtonType } from '../button';
import Icon, { IconName } from '../icon';
import { Colors } from '../../shared/constants/colors';
export default {
    title: 'Main Content',
    component: MainContent,
};

export const MainContentExample = () => (
    <MainContent>
        <React.Fragment>
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
        </React.Fragment>
    </MainContent>
);
