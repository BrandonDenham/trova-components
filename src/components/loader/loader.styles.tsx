import { css } from '@emotion/react';
import { loaderSize } from './loaderSize';
import iconLoader from '../../shared/images/icons/loader.svg';

export const containerLoader = () => css`
    width: 100%;
    height: 100%;
    position: fixed;
    justify-content: center;
    align-items: center;
    top: 0;
    background-color: #e9e9e9;
    left: 0;
    display: flex;
    z-index: 99999999;
`;

export const loader = (size: loaderSize, color: string) =>
    css`
      -webkit-mask: url(${iconLoader});
      ${size === loaderSize.Sm && `width: 2rem; height: 2rem;`}
      ${size === loaderSize.Md && `width: 3rem; height: 3rem;`}
      ${size === loaderSize.Lg && `width: 4rem; height: 4rem;`}
      background: ${color};
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    `;
