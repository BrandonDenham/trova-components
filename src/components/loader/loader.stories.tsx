import React from 'react';
import { Colors } from '../../shared/constants/colors';

import Loader from '.';
import { loaderSize } from '.';
import { containerLoader } from './loader.styles';

export default {
    title: 'Loader',
    component: Loader,
};

export const LoaderSm = () => (
    <Loader color={Colors.LogoTeal} size={loaderSize.Sm} />
);
export const LoaderMd = () => (
    <Loader color={Colors.LogoTeal} size={loaderSize.Md} />
);
export const LoaderLg = () => (
    <Loader color={Colors.LogoTeal} size={loaderSize.Lg} />
);

export const LoaderBlack = () => (
    <Loader color={Colors.DarkGray} size={loaderSize.Md} />
);

export const LoaderFullScreen = () => (
    <div css={containerLoader(Colors.BackdropOverlay)}>
        <Loader color={Colors.LogoTeal} size={loaderSize.Md} />
    </div>
);