/** @jsx jsx */
import { jsx } from '@emotion/react';

import { IconSize } from './iconSize';
import IconProps from './icon.types';
import { icon } from './icon.styles';
import { Colors } from '../../shared/constants/colors';

const Icon: React.FC<IconProps> = ({
    name,
    size = IconSize.Md,
    color = Colors.Dark,
    className,
}) => {
    return (
        <svg
            data-testid="icon"
            css={icon(name, size, color)}
            className={className}
        ></svg>
    );
};

export default Icon;
