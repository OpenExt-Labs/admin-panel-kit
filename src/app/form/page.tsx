"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from 'next/link';

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
});

export default function FormValidation() {
  const [data, setData] = useState<z.infer<typeof formSchema> | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setData(values);
  };

  return (
    <div>
      <div className='mb-6'>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
          React Hook Form
        </h1>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          In this guide, we will take a look at building forms with{" "}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://react-hook-form.com/"
          >
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              react-hook-form
            </code>
          </Link>{" "}
          and{" "}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://zod.dev"
          >
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              zod
            </code>
          </Link>
          {`. We're going to use a `}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            &lt;FormField&gt;
          </code>{" "}
          component to compose accessible forms using Radix UI components.
        </p>
      </div>
      <div className='rounded border border-gray-300 p-4 mb-6'>
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your private password.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
      {data && (
        <div>
          <h2>Form Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
