import React from 'react';

import Loading from '.';
import { loadingSize } from '.';
import { Colors } from '../../shared/constants/colors';

export default {
    title: 'Loading',
    component: Loading,
};


export const LoadingSm = () => <Loading size={loadingSize.Sm} />;
export const LoadingMd = () => <Loading color={Colors.Primary}/>;
export const LoadingLg = () => <Loading size={loadingSize.Lg} />;