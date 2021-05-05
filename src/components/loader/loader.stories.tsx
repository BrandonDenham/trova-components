import React from 'react';

import Loader from '.';
import { loaderSize } from '.';
import { Colors } from '../../shared/constants/colors';

export default {
    title: 'Loader',
    component: Loader,
};

export const LoaderSm = () => <Loader iterations={2} size={20} />;
export const LoaderMd = () => (
    <Loader duration={10} iterations={1} color={Colors.Primary} size={100} />
);
export const LoaderLg = () => (
    <Loader
        duration={8}
        begin={4}
        iterations={1}
        color={'#03b1c9'}
        size={4}
        size={270}
    />
);

export const LoadingOverrideIterator = () => (
    <Loader
        duration={8}
        begin={4}
        iterations={1}
        color={'#03b1c9'}
        size={4}
        size={270}
        overrideIterator={'0;1;1;1;1;1;1;1;0'}
    />
);
