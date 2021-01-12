/** @jsx jsx */
import { jsx } from '@emotion/react';

import React from 'react';
import { useTheme } from '@emotion/react';

import { Theme as EmotionTheme } from '../theme/theme.types';

import mainContentProps from './mainContent.types';
import { mainContent } from './mainContent.styles';

/**
 * Renders a <MainContent /> component
 * @param  props
 * @param  props.children - The elements to include inside the main content
 */

const MainContent: React.FC<mainContentProps> = ({ children }) => {
    const theme = useTheme();

    return (
        <div data-testid="mainContent" css={mainContent(theme)}>
            {children}
        </div>
    );
};

export default MainContent;
