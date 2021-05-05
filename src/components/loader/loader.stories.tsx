import React from 'react';

import Loader from '.';
import { loaderSize } from '.';
import { Colors } from '../../shared/constants/colors';

export default {
    title: 'Loader',
    component: Loader,
};

export const LoaderSm = () => <Loader size={loaderSize.Sm} />;
export const LoaderMd = () => (
    <Loader
        color={Colors.Primary}
        size={loaderSize.Md}
    />
);
export const LoaderLg = () => <Loader color={'#03b1c9'} size={loaderSize.Lg} />;

// Should I leave this commented?
// export const LoadingOverrideIterator = () => (
//     <Loader
//         duration={8}
//         begin={4}
//         iterations={1}
//         color={'#03b1c9'}
//         utterance={4}
//         size={270}
//         overrideIterator={'1;0;0;1;'}
//     />
// );
