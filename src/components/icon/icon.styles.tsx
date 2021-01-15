import { css } from '@emotion/react';
import { IconName } from './iconName';
import { IconSize } from './iconSize';

import imagePlus from '../../shared/images/icons/plus.svg';
import imageUpload from '../../shared/images/icons/upload.svg';
import imageSearch from '../../shared/images/icons/search.svg';
import imageDropdownArrow from '../../shared/images/icons/dropdown_arrow.svg';
export const icon = (name: IconName, size: IconSize, color: string) =>
    css`
        ${name === IconName.Plus && `-webkit-mask: url(${imagePlus});`}
        ${name === IconName.Upload && `-webkit-mask: url(${imageUpload});`}
        ${name === IconName.Search && `-webkit-mask: url(${imageSearch});`}
        ${name === IconName.DropdownArrow &&
        `-webkit-mask: url(${imageDropdownArrow});`}
        
        ${size === IconSize.Md && `width: 1rem; height: 1rem;`}
        ${size === IconSize.Xs && `width: 0.75rem; height: 0.75rem;`}
        ${size === IconSize.Sm && `width: 0.875rem; height: 0.875rem;`}
        ${size === IconSize.Lg && `width: 1.5rem; height: 1.5rem;`}
        ${size === IconSize.Xl && `width: 2rem; height: 2rem;`}
        background: ${color};
        -webkit-mask-size: contain;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
    `;
