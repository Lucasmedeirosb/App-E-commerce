import { Image } from 'native-base';
import React from 'react';

import detail from '../../img/detail.png'

export function Detailbackground() {
    return <Image source={detail} alt="detail of name" position="absolute" top="140" bottom="0" right="0" />
}