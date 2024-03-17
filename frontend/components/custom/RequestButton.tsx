"use client";

import React, { FC } from 'react';
import { Button } from '../ui/button';
import * as fbq from "../../lib/fbpixel";
import { pushToDataLayer } from '@/services/pushToDataLayer';

interface Props {}

const RequestButton: FC<Props> = () => {

    function onButtonClickHandler() {
        pushToDataLayer("vc")
    }

  return (
    <Button onClick={onButtonClickHandler} >Send data to Conversion API</Button>
  );
}

export default RequestButton;