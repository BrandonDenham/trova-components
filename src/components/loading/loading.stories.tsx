import React from 'react';

import Loading from '.';
import { loadingSize } from '.';
import { Colors } from '../../shared/constants/colors';

export default {
    title: 'Loading',
    component: Loading,
};

export const LoadingSm = () => <Loading iterations={2} size={20} />;
export const LoadingMd = () => (
    <Loading duration={10} iterations={1} color={Colors.Primary} size={100} />
);
export const LoadingLg = () => (
    <Loading
        duration={8}
        begin={4}
        iterations={1}
        color={'#03b1c9'}
        size={4}
        size={270}
    />
);

export const LoadingOverrideIterator = () => (
    <Loading
        duration={8}
        begin={4}
        iterations={1}
        color={'#03b1c9'}
        size={4}
        size={270}
        overrideIterator={'0;1;1;1;1;1;1;1;0'}
    />
);
