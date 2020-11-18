import { css } from '@emotion/core';
import { IconName, IconSize } from '.';

const imagePlus = require('../../shared/images/icons/plus.svg') as string;
const imageUpload = require('../../shared/images/icons/upload.svg') as string;
const imageSearch = require('../../shared/images/icons/search.svg') as string;
export const icon = (name: IconName, size: IconSize, color: string) =>
    css`
        ${name === IconName.Plus && `mask: url(${imagePlus});`}
        ${name === IconName.Upload && `mask: url(${imageUpload});`}
        ${name === IconName.Search && `mask: url(${imageSearch});`}
        ${size === IconSize.Md && `width: 1rem; height: 1rem;`}
        ${size === IconSize.Xs && `width: 0.75rem; height: 0.75rem;`}
        ${size === IconSize.Sm && `width: 0.875rem; height: 0.875rem;`}
        ${size === IconSize.Lg && `width: 1.5rem; height: 1.5rem;`}
        ${size === IconSize.Xl && `width: 2rem; height: 2rem;`}
        background: ${color};
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;
    `;
