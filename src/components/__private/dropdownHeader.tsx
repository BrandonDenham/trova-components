/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

import { DropdownHeaderProps } from './dropdownHeader.types';
import imageInfo from '../../shared/images/icons/info.svg';
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
    const theme = useTheme();
    return (
        <div css={labelContainer()}>
            <span css={labelSpan(theme)}>{label}</span>
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
