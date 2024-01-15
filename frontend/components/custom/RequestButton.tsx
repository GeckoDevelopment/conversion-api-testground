"use client";

import React, { FC } from 'react';
import { Button } from '../ui/button';

interface Props {}

const RequestButton: FC<Props> = () => {

    function onButtonClickHandler() {
        fetch(`https://graph.facebook.com/v18.0/1565141384244262/events?access_token=${process.env.REACT_APP_FBACCESSKEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "data": [
                    {
                        "event_name": "ViewContent",
                        "event_time": 1705319464,
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
    <Button onClick={onButtonClickHandler}>Send data to Conversion API</Button>
  );
}

export default RequestButton;