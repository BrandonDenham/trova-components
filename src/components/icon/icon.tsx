/** @jsx jsx */
import { jsx } from '@emotion/core';

import { IconSize } from './iconSize';
import IconProps from './icon.types';
import { icon } from './icon.styles';
import { Colors } from '../../shared/constants/colors';

const Icon: React.FC<IconProps> = ({
    name,
    size = IconSize.Md,
    color = Colors.Dark,
}) => {
    return <svg data-testid="icon" css={icon(name, size, color)}></svg>;
};

export default Icon;
