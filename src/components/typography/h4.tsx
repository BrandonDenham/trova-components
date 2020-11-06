/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../Theme/Theme.types';
import { h4Style } from './h4.styles';
import Typography from './typography.Types';

const H4: React.FC<Typography> = ({ children, ...otherProps }) => {
    const theme = useTheme<Theme>();
    return (
        <h4 data-testid="h4" css={h4Style(theme)} {...otherProps}>
            {children}
        </h4>
    );
};

export default H4;
