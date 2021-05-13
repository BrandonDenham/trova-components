import React from 'react';
import { Colors } from '../../shared/constants/colors';

import Loader from './loader';
import ComponentLoader from './_private/componentLoader';
import { loaderSize } from './loaderSize';
import { containerLoader } from './_private/componentLoader.styles';

export default {
    title: 'Loader',
    component: ComponentLoader,
};

export const LoaderSm = () => (
    <ComponentLoader color={Colors.LogoTeal} size={loaderSize.Sm} />
);
export const LoaderMd = () => (
    <ComponentLoader color={Colors.LogoTeal} size={loaderSize.Md} />
);
export const LoaderLg = () => (
    <ComponentLoader color={Colors.LogoTeal} size={loaderSize.Lg} />
);

export const LoaderBlack = () => (
    <ComponentLoader color={Colors.DarkGray} size={loaderSize.Md} />
);


export const LoaderFullScreen = () => (
    <div css={containerLoader(Colors.BackdropOverlay)}>
        <ComponentLoader color={Colors.LogoTeal} size={loaderSize.Md} />
    </div>
);