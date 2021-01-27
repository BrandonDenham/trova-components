/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from 'react';

import {
    mainContainer,
    labelContainer,
    labelSpan,
    innerContainer,
    changeButton,
    errorSpan,
} from './Number.styles';
import imageSubstract from '../../shared/images/icons/substract.svg';
import imageAdd from '../../shared/images/icons/add.svg';
import NumberProps from './Number.types';

const Number: React.FC<NumberProps> = ({
    value = 0,
    label,
    error,
    className,
    handleSubstract,
    handleAdd,
}) => {
    const theme = useTheme();
    return (
        <div css={mainContainer(theme)} className={className}>
            <div css={labelContainer()}>
                {label && <span css={labelSpan(theme)}>{label}</span>}
            </div>
            <div css={innerContainer(theme, error)}>
                <div
                    css={changeButton()}
                    onClick={handleSubstract}
                    data-testid="substract"
                >
                    <img alt="Substract" src={imageSubstract} />
                </div>
                {value}
                <div css={changeButton()} onClick={handleAdd} data-testid="add">
                    <img alt="Add" src={imageAdd} />
                </div>
            </div>
            {error && typeof error === 'string' && (
                <span css={errorSpan(theme)}>{error}</span>
            )}
            {error && Array.isArray(error) && (
                <span css={errorSpan(theme)}>
                    {error.reduce((a: string, b: string) => {
                        return a.concat(', ').concat(b);
                    })}
                </span>
            )}
        </div>
    );
};

export default Number;
