/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import { loadingSize } from './loadingSize';
import LoadingProps from './loading.types';
import { loading, containerLoader } from './loading.styles';
import { Colors } from '../../shared/constants/colors';

const Loading: React.FC<LoadingProps> = ({
    size = loadingSize.Md,
    color = Colors.Dark,
    className,
}) => {
    return (
        <div css={containerLoader()} id="loadingIndicator">
            <svg css={loading(size, color)} className={className}></svg>
        </div>
    );
};

export default Loading;
