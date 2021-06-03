/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Colors } from '../../shared/constants/colors';

import LoaderProps from './Loader.types';
import ComponentLoader from './_private/componentLoader';
import { containerLoader } from './_private/componentLoader.styles';

const Loader: React.FC<LoaderProps> = ({ size, color, fullscreen = false }) => {
    if (fullscreen) {
        return (
            <div css={containerLoader(Colors.BackdropOverlay)}>
                <ComponentLoader color={color} size={size} />
            </div>
        );
    }
    return <ComponentLoader color={color} size={size} />;
};

export default Loader;
