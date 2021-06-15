import React from 'react';

import Icon from '.';
import { IconName, IconSize } from '.';
import {Colors} from '../../shared/constants/colors';

export default {
    title: 'Icon',
    component: Icon,
};

export const PlusMd = () => <Icon name={IconName.Plus} />;

export const PlusXs = () => <Icon name={IconName.Plus} size={IconSize.Xs} />;

export const PlusSm = () => <Icon name={IconName.Plus} size={IconSize.Sm} />;

export const PlusLg = () => <Icon name={IconName.Plus} size={IconSize.Lg} />;

export const PlusXl = () => <Icon name={IconName.Plus} size={IconSize.Xl} />;

export const PlusRed = () => <Icon name={IconName.Plus} color={Colors.Primary} />;

export const Upload = () => <Icon name={IconName.Upload} />;

export const Search = () => <Icon name={IconName.Search} />;

export const Minus = () => <Icon name={IconName.Minus} />;

export const Close = () => <Icon name={IconName.Close} />;
