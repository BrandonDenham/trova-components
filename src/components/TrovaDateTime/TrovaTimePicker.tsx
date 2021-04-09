/** @jsx jsx */
import { jsx } from '@emotion/react';
import moment, { isMoment } from 'moment';
import { useCallback } from 'react';
import TrovaDateTime from './TrovaDateTime';
import DateTimeProps from './TrovaDateTime.types';

const TrovaTimePicker: React.FC<DateTimeProps> = ({
    value,
    onChange,
    ...props
}) => {
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
        <TrovaDateTime
            {...props}
            dateFormat={false}
            timeFormat={true}
            value={parsedValue}
            onChange={onChangeWrapper}
        />
    );
};

export default TrovaTimePicker;
