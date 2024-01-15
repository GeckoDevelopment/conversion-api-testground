"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"


import { Button } from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FC } from "react"
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string(),
  phone: z.string()
})

interface Props {}

const SimpleTestForm: FC<Props> = () => {

      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "Max Mausimann",
      email: "max.mausimann85@gmail.com",
      phone: "+49 167/22368736"
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch(`https://graph.facebook.com/v18.0/1565141384244262/events?access_token=${process.env.NEXT_PUBLIC_FBACCESSKEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "data": [
                    {
                        "event_name": "CompleteRegistration",
                        "event_time": Math.floor(Date.now() / 1000),
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
    console.log("These are the form values: ", values)
  }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your email please
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    Your phone number please
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )
}

export default SimpleTestForm;