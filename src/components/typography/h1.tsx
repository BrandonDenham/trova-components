/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
import { h1Style } from './h1.styles';
import Typography from './typography.types';

const H1: React.FC<Typography> = ({ children, ...otherProps }) => {
    const theme = useTheme<Theme>();
    return (
        <h1 data-testid="h1" css={h1Style(theme)} {...otherProps}>
            {children}
        </h1>
    );
};

export default H1;
