/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import InternalLoaderProps from '../Loader.types';

import { Colors } from '../../../shared/constants/colors';

const getIteratorValues = (iterations: number, overrideIterator: string) => {
    return [...new Array(iterations)].map(_ => overrideIterator).join(' ');
};

const createBreakpoints = (
    values = '0;1;1;0;',
    begin = 4,
    utterance = 4,
    duration = 10,
    color: string = Colors.Dark
) => {
    const loaderStyles = `stop-color: ${color}; stop-opacity: 0`;
    const arrayBreaks = [...new Array(100)];
    let htmlBreakpoints = '';
    for (let vectorIndex = 0; vectorIndex < arrayBreaks.length; vectorIndex++) {
        htmlBreakpoints += `<stop offset="${vectorIndex}%" style="${loaderStyles}">
       <animate
         attributeName="stop-opacity"
         values="${values}"
         begin="${begin * 100 + vectorIndex * utterance}ms"
         dur="${duration * 100}ms"
         fill="freeze"
         repeatCount="1000"​
       />
     </stop>`;
    }
    return htmlBreakpoints;
};

const createMarkup = ({
    size = 240,
    color = Colors.Dark,
    iterations = 1,
    duration = 10,
    begin = 4,
    utterance = 4,
    overrideIterator = '0;1;1;0;',
}: InternalLoaderProps) => {
    const values = getIteratorValues(iterations, overrideIterator);
    const doBreakpoints = createBreakpoints(
        values,
        begin,
        utterance,
        duration,
        color
    );

    return {
        __html: `<svg id="trovaLoading" width="${size}" height="${size}" preserveAspectRatio="xMaxYMid meet" viewBox="0 0 274 274">
                    <defs>
                    <lineargradient id="trovaGradient" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
                        ${doBreakpoints}
                    </lineargradient>
                    </defs>
                    <g>
                    <clipPath id="clipTrova">
                        <path
                            style="fill: #03b1c9"
                            class="fakeTrovaPath"
                            d="m 137.4283,11.153818 c -20.03778,0.52065 -30.704,4.1661 -44.999999,12.0116 -47.4218,26.0253 -68.0002,83.474002 -47.5478,133.564002 7.3378,17.971 20.0396,31.492 33.5478,45 14.9573,14.957 42.620129,41.76548 42.620129,41.76548 l 19.37987,18.88852 21.98,-19.654 6.39038,-5.66998 -28.37038,-29.33002 c -33.31094,-34.43769 -87.877999,-76.179 -55.795499,-129.000002 5.0793,-8.3627 11.7689,-15.3841 19.795499,-20.9606 51.269,-35.62 120.333,15.5752 102.562,74.960602 -5.681,18.982 -21.034,31.472 -34.562,45 -4.193,4.193 -19.53549,18.30251 -19.53549,18.30251 l 14.19116,13.67751 15.05409,14.44827 c 0,0 7.60224,-7.74129 10.29024,-10.42829 l 21,-21 c 53.998,-54.001 38.426,-148.373902 -36,-175.412802 -11.922,-4.3312 -18.91975,-5.770541 -40,-6.1628 z"
                        />
                    </clipPath>
                    </g>
                    <path
                        clip-path="url(#clipTrova)"
                        class="fakeTrovaPath"
                        fill="url(#trovaGradient)"
                        d="m 137.4283,11.153818 c -20.03778,0.52065 -30.704,4.1661 -44.999999,12.0116 -47.4218,26.0253 -68.0002,83.474002 -47.5478,133.564002 7.3378,17.971 20.0396,31.492 33.5478,45 14.9573,14.957 42.620129,41.76548 42.620129,41.76548 l 19.37987,18.88852 21.98,-19.654 6.39038,-5.66998 -28.37038,-29.33002 c -33.31094,-34.43769 -87.877999,-76.179 -55.795499,-129.000002 5.0793,-8.3627 11.7689,-15.3841 19.795499,-20.9606 51.269,-35.62 120.333,15.5752 102.562,74.960602 -5.681,18.982 -21.034,31.472 -34.562,45 -4.193,4.193 -19.53549,18.30251 -19.53549,18.30251 l 14.19116,13.67751 15.05409,14.44827 c 0,0 7.60224,-7.74129 10.29024,-10.42829 l 21,-21 c 53.998,-54.001 38.426,-148.373902 -36,-175.412802 -11.922,-4.3312 -18.91975,-5.770541 -40,-6.1628 z"
                    />
                </svg>`,
    };
};

const Loader: React.FC<InternalLoaderProps> = props => {
    const propsAsObject = { ...props };
    return <div dangerouslySetInnerHTML={createMarkup(propsAsObject)} />;
};

export default Loader;
