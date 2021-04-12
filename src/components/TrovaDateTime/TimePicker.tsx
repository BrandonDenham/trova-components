/** @jsx jsx */
import { jsx } from '@emotion/react';
import moment, { isMoment } from 'moment';
import { useCallback } from 'react';
import DateTimeComponent from './DateTimeComponent';
import DateTimeProps from './DateTime.types';

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
        />
    );
};

export default TimePicker;
