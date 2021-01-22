import { css, Theme } from '@emotion/react';
import { Colors } from '../../shared/constants/colors';

export const row = (theme: Theme) =>
    css`
    font-size: ${theme.fontSizes.dropdownList};
        background: ${Colors.White};
        th{
            font-weight: bold;
            color: ${Colors.TableDarkGray};
        }
        td {
            color: ${Colors.TableDarkGray};
        }
        tbody &:nth-of-type(odd) {
             background: ${Colors.TableLightGray};
         },
    `;
