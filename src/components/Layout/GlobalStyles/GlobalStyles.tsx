import React from 'react';
import { Global, css } from '@emotion/core';
import RobotoBold from '../../../shared/fonts/Roboto-Bold.ttf';
import RobotoRegular from '../../../shared/fonts/Roboto-Regular.ttf';
import RobotoMedium from '../../../shared/fonts/Roboto-Medium.ttf';
const GlobalStyles: React.FC = () => {
    return (
        <Global
            styles={() => css`
                @font-face {
                    font-family: 'Roboto-Bold';
                    src: url(${RobotoBold}) format('truetype');
                    font-weight: normal;
                    font-style: normal;
                }

                @font-face {
                    font-family: 'Roboto-Regular';
                    src: url(${RobotoRegular}) format('truetype');
                    font-weight: normal;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'Roboto-Medium';
                    src: url(${RobotoMedium}) format('truetype');
                    font-weight: normal;
                    font-style: normal;
                }
                //RESET BEGINNING
                html,
                body,
                div,
                span,
                applet,
                object,
                iframe,
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p,
                blockquote,
                pre,
                a,
                abbr,
                acronym,
                address,
                big,
                cite,
                code,
                del,
                dfn,
                em,
                img,
                ins,
                kbd,
                q,
                s,
                samp,
                small,
                strike,
                strong,
                sub,
                sup,
                tt,
                var,
                b,
                u,
                i,
                center,
                dl,
                dt,
                dd,
                ol,
                ul,
                li,
                fieldset,
                form,
                label,
                legend,
                table,
                caption,
                tbody,
                tfoot,
                thead,
                tr,
                th,
                td,
                article,
                aside,
                canvas,
                details,
                embed,
                figure,
                figcaption,
                footer,
                header,
                hgroup,
                menu,
                nav,
                output,
                ruby,
                section,
                summary,
                time,
                mark,
                audio,
                video {
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font-size: 100%;
                    font: inherit;
                    vertical-align: baseline;
                }
                /* HTML5 display-role reset for older browsers */
                article,
                aside,
                details,
                figcaption,
                figure,
                footer,
                header,
                hgroup,
                menu,
                nav,
                section {
                    display: block;
                }
                body {
                    line-height: 1;
                }
                ol,
                ul {
                    list-style: none;
                }
                blockquote,
                q {
                    quotes: none;
                }
                blockquote:before,
                blockquote:after,
                q:before,
                q:after {
                    content: '';
                    content: none;
                }
                table {
                    border-collapse: collapse;
                    border-spacing: 0;
                }
                //RESET END
                h1 {
                    font-size: 34px;
                    line-height: 34px;
                    color: white;
                    margin: 0px;
                }

                h2 {
                    font-size: 32px;
                    line-height: 32px;
                    margin: 0px;
                }

                h3 {
                    font-size: 22px;
                    line-height: 22px;
                    margin: 0px;
                }

                h4 {
                    font-size: 18px;
                    line-height: 18px;
                    margin: 0px;
                }

                body {
                    font-size: 16px;
                    line-height: 21px;
                }

                h5 {
                    font-size: 14px;
                    line-height: 18px;
                    margin: 0px;
                }

                h6 {
                    font-family: 'Roboto-Regular';
                    font-size: 12px;
                    line-height: 14px;
                    color: #626c79;
                    letter-spacing: 0.3px;
                    margin: 0px;
                }
            `}
        />
    );
};

export default GlobalStyles;
