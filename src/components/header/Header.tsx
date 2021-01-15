/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { useTheme } from 'emotion-theming';

import HeaderProps from './Header.types';
import {
    header,
    headerTitle,
    headerDetails,
    headerDates,
    headerLocation,
} from './Header.styles';
import { Theme } from '../theme/theme.types';
import Icon from '../icon/icon';
import { Colors } from '../../shared/constants/colors';
import { IconName } from '../icon/';

const Header = React.forwardRef<HTMLInputElement, HeaderProps>(
    ({ title, subTitle, iconDescription, backgroundImage, icon }) => {
        const theme = useTheme<Theme>();
        return (
            <div css={header(theme, backgroundImage)}>
                <p css={headerTitle(theme)}>{title}</p>
                <div css={headerDetails(theme)}>
                    <span css={headerDates(theme)}>{subTitle}</span>
                    {location && (
                        <span css={headerLocation(theme)}>
                            {icon}
                            {location}
                        </span>
                    )}
                </div>
            </div>
        );
    }
);

export default Header;
