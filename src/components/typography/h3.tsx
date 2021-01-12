/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import { useTheme } from '@emotion/react';

import { Theme } from '../theme/theme.types';
import { h3Style } from './h3.styles';
import Typography from './typography.types';

const H3: React.FC<Typography> = ({ children, ...otherProps }) => {
    const theme = useTheme<Theme>();
    return (
        <h3 data-testid="h3" css={h3Style(theme)} {...otherProps}>
            {children}
        </h3>
    );
};

export default H3;
