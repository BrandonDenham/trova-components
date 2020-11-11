/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
import { h2Style } from './h2.styles';
import Typography from './typography.types';

const H2: React.FC<Typography> = ({ children, ...otherProps }) => {
    const theme = useTheme<Theme>();
    return (
        <h2 data-testid="h2" css={h2Style(theme)} {...otherProps}>
            {children}
        </h2>
    );
};

export default H2;
