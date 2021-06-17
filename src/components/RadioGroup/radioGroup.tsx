/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useCallback, SyntheticEvent, Fragment } from 'react';
import { RadioGroup as MaterialRadioGroup } from '@material-ui/core';
import Radio from './_private/radio';
import { P, ParagraphSize } from '../typography';
import { mainContainer, labelContainer } from './radioGroup.styles';
import RadioGroupProps from './radioGroup.types';

const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(
    (
        {
            children,
            value,
            name,
            label,
            onChange,
        },
        ref
    ) => {
        const handleChange = useCallback(
            (event: SyntheticEvent) => {
                onChange && onChange(event);
            },
            [onChange]
        );

        return (
            <div css={mainContainer()}>
                {label && (
                    <div css={labelContainer()}>
                        <P size={ParagraphSize.Small} isBold={true}>
                            {label}
                        </P>
                    </div>
                )}
                <MaterialRadioGroup
                    name={name}
                    value={value}
                    onChange={handleChange}
                    ref={ref}
                >
                    {children.map(({ value, children }, index) => (
                        <Fragment key={`${value}Input${index}`}>
                            <Radio
                                name={`${value}Input${index}`}
                                value={value}
                                label={children}
                            />
                        </Fragment>
                    ))}
                </MaterialRadioGroup>
            </div>
        );
    }
);

export default RadioGroup;
