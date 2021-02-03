import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const mainContainer = () => css`
    display: grid;
    grid-template-areas: 'checkbox';

    > * {
        grid-area: checkbox;
    }
`;

export const input = () => css`
    opacity: 0;
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
    z-index: 100;
    :disabled {
        cursor: default;
    }
`;

export const detailSpan = (theme: Theme) => css`
    box-sizing: border-box;
    font-family: ${theme.fonts.robotoRegular};
    font-size: ${theme.fontSizes.toggleDetail};
    line-height: 18px;
    color: ${Colors.Dark};
    margin-left: 2rem;
    align-self: center;
`;

export const checkbox = (error: string | string[] | undefined) =>
    css`
        display: inline-grid;
        border-radius: 4px;
        border: 1px solid ${Colors.LightGray};
        ${error && error.length && `border: 1px solid ${Colors.Danger};`}
        width: 25px;
        height: 25px;
        box-sizing: border-box;
        cursor: pointer;
        img {
            width: 15px;
            height: 15px;
            transition: transform 0.1s ease-in 25ms;
            transform: scale(0);
            transform-origin: bottom left;
            margin: auto;
        }
        input:checked + & img {
            transform: scale(1);
        }
        input:focus + & {
            box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em ${Colors.LightGray};
        }
        input:disabled + & {
            cursor: default;
        }
    `;
