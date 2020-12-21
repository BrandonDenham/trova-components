import React from 'react';

import { Colors } from '../../shared/constants/colors';
import Card from '../card';
import DraggableSourceProps from './draggableSource.types';
import DraggableTargetProps from './draggableTarget.types';

function DraggableCard(
    children: React.ReactNode,
    backgroundColor: Colors,
    source: DraggableSourceProps,
    target: DraggableTargetProps
) {
    return <Card backgroundColor={backgroundColor}>{children}</Card>;
}

export default DraggableCard;
