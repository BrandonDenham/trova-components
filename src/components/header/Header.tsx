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
    ({ title, dates, location, backgroundImage }) => {
        const theme = useTheme<Theme>();
        return (
            <div css={header(theme, backgroundImage)}>
                <p css={headerTitle(theme)}>{title}</p>
                <div css={headerDetails(theme)}>
                    <span css={headerDates(theme)}>{dates}</span>
                    {location && (
                        <span css={headerLocation(theme)}>
                            <Icon
                                name={IconName.Location}
                                color={Colors.Primary}
                            />
                            {location}
                        </span>
                    )}
                </div>
            </div>
        );
    }
);

export default Header;
