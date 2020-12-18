/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';

import { Theme } from '../theme/theme.types';
import { DropdownHeaderProps } from './dropdownHeader.types';
const imageInfo = require('../../shared/images/icons/info.svg') as string;
import {
    labelContainer,
    labelSpan,
    infoImage,
    infoImageContainer,
    tooltip,
} from './dropdownHeader.styles';

/**
 * Renders a <DropdownHeader /> component
 * @param  props
 * @param  props.label - a label if it exists for the field
 * @param  props.info - this be the next for an onClick/hover icon.  If null icon doesnt show
 */

const DropdownHeader: React.FC<DropdownHeaderProps> = ({ label, info }) => {
    const theme = useTheme<Theme>();
    return (
        <div css={labelContainer()}>
            {label && <span css={labelSpan(theme)}>{label}</span>}
            {info && (
                <div css={infoImageContainer()} title={info}>
                    <label>
                        <img css={infoImage()} alt="Info." src={imageInfo} />
                        <input type="checkbox"></input>
                        <span css={tooltip(theme)}>{info}</span>
                    </label>
                </div>
            )}
        </div>
    );
};

export default DropdownHeader;
