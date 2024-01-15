"use client";

import React, { FC } from 'react';
import { Button } from '../ui/button';
import * as fbq from "../../lib/fbpixel";

interface Props {}

const RequestButton: FC<Props> = () => {

    const access_token="EAAJuiDpXXUEBOZCbsIP6JbCoEY0wBLH9INgQl1n0ZAF9zwLlSzNiqP4zV0cGyqq2DX15kZAZBkuj1q2SO6Uq1p4Ne01CDnZAFBHPeGlLi1xHxeITaqZCr3tREl11ZBR3bGGUz2z6fSNhJGGAJoZBkmkZBbCGWgPMbFeZAsgdToucmH12302uX0AQk2HMfZCywrUg749bQZDZD";

    function onButtonClickHandler() {
        fbq.event("ViewContent", {value: 12, currency: 'USD'}, {eventID: "123123"} )
        fetch(`https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}/events?access_token=${process.env.NEXT_PUBLIC_FBACCESSKEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "data": [
                    {
                        "event_name": "ViewContent",
                        "event_time": Math.floor(Date.now() / 1000),
                        "event_id": "123123",
                        "action_source": "website",
                        "user_data": {
                            "fn": [
                                "e26886dbba976c9a2c367a75a611dc94a88e8cbca46108f783a1c6fb556bfe28"
                            ],
                            "ln": [
                                "cf8cb917c1fdda8afff67acb0a7491ac912cf3c5641c65376d5b86f26879cbeb"
                            ]
                        },
                        "custom_data": {
                            "currency": "USD",
                            "value": "142.52"
                        }
                    }
                ], "test_event_code": "TEST35391"
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }

  return (
    <Button onClick={onButtonClickHandler} >Send data to Conversion API</Button>
  );
}

export default RequestButton;