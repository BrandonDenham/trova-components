import React from 'react';
import { render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import Badge from './badge';
import BadgeProps from './badge.types';

expect.extend(matchers);

describe('Badge', () => {
    let props: BadgeProps;

    beforeEach(() => {
        props = {
            label: 'Text'
        };
    });

    const renderContent = () => render(<Badge {...props}/>);

    it('should include title', () => {
        const { getByText } = renderContent();
        const element = getByText('Text');
        expect(element).toBeInTheDocument();
    });
});
