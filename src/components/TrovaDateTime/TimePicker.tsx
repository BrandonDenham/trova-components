/** @jsx jsx */
import { jsx } from '@emotion/react';
import moment, { isMoment } from 'moment';
import { SyntheticEvent, useCallback } from 'react';
import DateTimeComponent from './DateTimeComponent';
import InputMask from 'react-input-mask';
import DateTimeProps, { RenderInput } from './DateTime.types';

const TimePicker: React.FC<DateTimeProps> = ({ value, onChange, ...props }) => {
    let parsedValue = value;
    if (value) {
        const day = moment().zone('GMT');
        const splitTime = value.split(/:/);
        parsedValue = day
            .hours(parseInt(splitTime[0]))
            .minutes(parseInt(splitTime[1]))
            .format(`HH:mm`);
    }

    const renderInput: RenderInput = (props, openCalendar) => {
        
        const regEx = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/;

        const handleChange = (e: SyntheticEvent) => {
            const eventValue = (e.target as HTMLInputElement).value;
            regEx.test(eventValue)
                ? props.onChange(e)
                : props.onChange(props.value);
        };

        const handleFocus = (_: any) => {
            openCalendar();
        };

        return (
            <InputMask
                {...props}
                onFocus={handleFocus}
                mask="99:99"
                maskChar={'0'}
                value={props.value}
                onChange={handleChange}
            />
        );
    };

    const onChangeWrapper = useCallback(
        (value: moment.Moment | string) => {
            if (onChange) {
                if (isMoment(value)) {
                    onChange(value.format(`HH:mm`));
                    return;
                }
                onChange(value);
            }
        },
        [onChange, isMoment]
    );

    return (
        <DateTimeComponent
            {...props}
            dateFormat={false}
            timeFormat={`HH:mm`}
            value={parsedValue}
            onChange={onChangeWrapper}
            renderInput={renderInput}
        />
    );
};

export default TimePicker;
