import { sha256 } from "js-sha256";
import * as fbq from "../lib/fbpixel";
import { z } from "zod";
import { formSchema } from "@/components/form/SimpleTestForm";
import { FormSendingData } from "@/interfaces";
import findUserIpAddress from "./findUserIpAddress";

const createSendingData = async (values: z.infer<typeof formSchema>, eventId: string): Promise<FormSendingData> => {

    const userIp = await findUserIpAddress();

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
          "client_user_agent": navigator.userAgent,
          "client_ip_address": userIp || '0.0.0.0'
      },
    }
  }

export default async function triggerFormCompleteRegistration(values: z.infer<typeof formSchema>) {

    const additionalData = {};

    const eventId: string = crypto.randomUUID();

    const sendData = await createSendingData(values, eventId);

    fbq.event("CompleteRegistration", additionalData, {eventID: eventId} )
    
    fetch(`https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}/events?access_token=${process.env.NEXT_PUBLIC_FBACCESSKEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "data": [
                    sendData
                ], "test_event_code": process.env.NEXT_PUBLIC_TEST_ID
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}