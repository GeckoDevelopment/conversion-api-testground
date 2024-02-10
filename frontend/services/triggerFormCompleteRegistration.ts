import { sha256 } from "js-sha256";
import * as fbq from "../lib/fbpixel";
import { z } from "zod";
import { formSchema } from "@/components/form/SimpleTestForm";
import { SendingData } from "@/interfaces";

const createSendingData = (values: z.infer<typeof formSchema>, eventId: string): SendingData => {
    return {
      "event_name": "CompleteRegistration",
      "event_id": eventId,
      "event_time": Math.floor(Date.now() / 1000),
      "action_source": "website",
      "event_source_url": window.location.href,
      "user_data": {
          "fn": [
              sha256(values.firstName)
          ],
          "ln": [
              sha256(values.firstName)
          ],
          "em": [
              sha256(values.email)
          ],
          "ph": [
              sha256(values.phone)
          ],
      },
      "custom_data": {
          "currency": "USD",
          "value": "12"
      }
    }
  }

export default function triggerFormCompleteRegistration(values: z.infer<typeof formSchema>) {
    const eventId: string = crypto.randomUUID();
    fbq.event("CompleteRegistration", {value: 12, currency: 'USD'}, {eventID: eventId} )
    fetch(`https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}/events?access_token=${process.env.NEXT_PUBLIC_FBACCESSKEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "data": [
                    createSendingData(values, eventId)
                ], "test_event_code": process.env.NEXT_PUBLIC_TEST_ID
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}