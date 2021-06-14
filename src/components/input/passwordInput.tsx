/** @jsx jsx */
import { jsx } from '@emotion/react';

import Input from './input';
import InputProps from './input.types';

const PasswordInput: React.FC<InputProps> = props => {
    return (
        <Input
            {...props}
            type={`password`}
        />
    );
};

export default PasswordInput;
