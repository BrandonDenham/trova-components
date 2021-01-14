/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { useTheme } from 'emotion-theming';

import HeaderProps from './Header.types';
import {
    header,
    headerTitle,
    headerDetails,
    headerSubtitle,
    headerSubtitle1,
    headerIcon,
} from './Header.styles';
import { Theme } from '../theme/theme.types';
import Icon from '../icon/icon';
import { Colors } from '../../shared/constants/colors';
import { IconName } from '../icon/';
import P from '../typography/p';

/**
 * Renders a <Image /> component
 * @param  props
 * @param  props.children - The elements to include inside the card
 * @param  props.backgroundImage - The background color of the card. Defaults to White
 */

const Header = React.forwardRef<HTMLInputElement, HeaderProps>(
    ({ title, dates, location, backgroundImage }) => {
        const theme = useTheme<Theme>();
        return (
            <div css={header(theme, backgroundImage)}>
                <p css={headerTitle(theme)}>{title}</p>
                <div css={headerDetails(theme)}>
                    <span css={headerSubtitle(theme)}>{dates}</span>
                    <span css={headerSubtitle1(theme)}>
                        <Icon
                            css={headerIcon(theme)}
                            name={IconName.Location}
                            color={Colors.Primary}
                        />
                        {location}
                    </span>
                </div>
            </div>
        );
    }
);

export default Header;
