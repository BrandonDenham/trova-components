import React from 'react';

import H1 from './h1';
import H2 from './h2';
import H3 from './h3';
import H4 from './h4';
import P from './p';
import { ParagraphSize } from './paragraphSize';

import { Colors } from '../../shared/constants/colors';
export default {
    title: 'Typography',
};

export const typography = () => (
    <div style={{ background: Colors.LightGray }}>
        <H1>H1: Ecuador with Jessica Tate</H1>
        <br />
        <H2>H2: Room reservation</H2>
        <br />
        <H3>H3: Reserve workshop space</H3>
        <br />
        <H4>H4: Yoga bungalow</H4>
        <br />
        <P size={ParagraphSize.Small}>
            Paragraph - small: Explore the land and sea that inspired some of
            Darwin's greatest theories of evolution and the animals that paved
            the way! This 9 day adventure across the islands of the Galapagos
            will have you face-to-face with blue footed boobies, marine iguanas,
            finches, and sharks; all found only here in the Galapagos!
        </P>
        <br />
        <P>
            Paragraph - medium: Explore the land and sea that inspired some of
            Darwin's greatest theories of evolution and the animals that paved
            the way! This 9 day adventure across the islands of the Galapagos
            will have you face-to-face with blue footed boobies, marine iguanas,
            finches, and sharks; all found only here in the Galapagos!
        </P>
        <br />
        <P size={ParagraphSize.Large}>
            Paragraph - large: Explore the land and sea that inspired some of
            Darwin's greatest theories of evolution and the animals that paved
            the way! This 9 day adventure across the islands of the Galapagos
            will have you face-to-face with blue footed boobies, marine iguanas,
            finches, and sharks; all found only here in the Galapagos!
        </P>
    </div>
);
