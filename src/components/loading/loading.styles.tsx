import { css } from '@emotion/react';
import { loadingSize } from './loadingSize';
import iconLoading from '../../shared/images/icons/loading.svg';

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

export const loading = (size: loadingSize, color: string) =>
    css`
      -webkit-mask: url(${iconLoading});
      ${size === loadingSize.Sm && `width: 2rem; height: 2rem;`}
      ${size === loadingSize.Md && `width: 3rem; height: 3rem;`}
      ${size === loadingSize.Lg && `width: 4rem; height: 4rem;`}
      background: ${color};
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    `;
