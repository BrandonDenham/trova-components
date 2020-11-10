/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
import { pStyle } from './p.styles';
import Typography from './typography.types';
import { ParagraphSize } from './paragraphSize';

const P: React.FC<Typography> = ({size = ParagraphSize.Medium, children, ...otherProps }) => {
    const theme = useTheme<Theme>();
    return (
        <p data-testid="p" css={pStyle(size, theme)} {...otherProps}>
            {children}
        </p>
    );
};

export default P;
