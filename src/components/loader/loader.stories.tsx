import React from 'react';
import { Colors } from '../../shared/constants/colors';

import ComponentLoader from './_private/componentLoader';
import { LoaderSize } from './loaderSize';

export default {
    title: 'Loader',
    component: ComponentLoader,
};

export const LoaderSm = () => (
    <ComponentLoader color={Colors.LogoTeal} size={LoaderSize.Sm} />
);
export const LoaderMd = () => (
    <ComponentLoader color={Colors.LogoTeal} size={LoaderSize.Md} />
);
export const LoaderLg = () => (
    <ComponentLoader color={Colors.LogoTeal} size={LoaderSize.Lg} />
);

export const LoaderBlack = () => (
    <ComponentLoader color={Colors.DarkGray} size={LoaderSize.Md} />
);

export const LoaderFullScreen = () => (
    <ComponentLoader
        color={Colors.LogoTeal}
        size={LoaderSize.Md}
        fullscreen={true}
    />
);
