import React from 'react';

import Loader from '.';
import { loaderSize } from '.';
import { Colors } from '../../shared/constants/colors';
import { loader, containerLoader } from './loader.styles';

export default {
    title: 'Loader',
    component: Loader,
};

export const LoaderSm = () => <Loader size={loaderSize.Sm} />;
export const LoaderMd = () => (
    <Loader color={Colors.Primary} size={loaderSize.Md} />
);
export const LoaderLg = () => <Loader color={'#03b1c9'} size={loaderSize.Lg} />;
export const LoaderFullScreen = () => (
    <div css={containerLoader(Colors.White)}>
        <Loader color={'#03b1c9'} size={loaderSize.Md} />
    </div>
);
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
