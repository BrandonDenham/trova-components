/** @jsx jsx */
import { jsx } from '@emotion/react';

import DateTimeComponent from './DateTimeComponent';
import DateTimeProps from './DateTime.types';

const DatePicker: React.FC<DateTimeProps> = props => {
    return (
        <DateTimeComponent
            {...props}
            dateFormat={`MM/DD/Y`}
            timeFormat={false}
        />
    );
};

export default DatePicker;
