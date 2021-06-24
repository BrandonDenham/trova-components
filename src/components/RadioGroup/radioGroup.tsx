/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useCallback, SyntheticEvent } from 'react';
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
                    {Array.isArray(children) ? (
                        React.Children.map(children, (child, index) => {
                            return (
                                <Radio
                                    key={`${value}Input${index}`}
                                    name={`${value}Input${index}`}
                                    value={child && child.props.value}
                                    label={child && child.props.children}
                                />
                            );
                        })
                    ) : (
                        <Radio
                            key={`${children.props.value}Input${1}`}
                            name={`${value}Input${1}`}
                            value={children.props.value}
                            label={children.props.children}
                        />
                    )}
                </MaterialRadioGroup>
            </div>
        );
    }
);

export default RadioGroup;
