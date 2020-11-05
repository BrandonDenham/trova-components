import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from 'jest-emotion';
import Icon from './icon';
import IconProps from './icon.types';
import { IconName } from './iconName';
import { ThemeProvider } from 'emotion-theming';
import theme from '../../shared/themes/theme';
import { Colors } from '../../shared/constants/colors';

expect.extend(matchers);

describe('Icon', () => {
    let props: IconProps;

    beforeEach(() => {
        props = {
            name: IconName.Plus,
            color: Colors.Primary,
        };
    });

    const renderComponent = () =>
        render(
            <ThemeProvider theme={theme}>
                <Icon {...props} />
            </ThemeProvider>
        );

    it('icon background should be Primary color', () => {
        const { container } = renderComponent();
        expect(container.firstChild).toHaveStyleRule(
            'background',
            Colors.Primary
        );
    });
});
