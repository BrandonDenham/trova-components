import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import Badge from './badge';
import BadgeProps from './badge.types';
import { ThemeProvider } from '@emotion/react';
import userEvent from '@testing-library/user-event';

import theme from '../../shared/themes/theme';

expect.extend(matchers);

describe('Badge', () => {
    let activeProps: BadgeProps;

});
