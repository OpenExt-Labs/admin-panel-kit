'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import * as z from 'zod';

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
import { Button } from '@/components/ui/button';
import { useCallback, useState } from 'react';

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const formSchema = z.object({
  username: z.string().min(2).max(50),
  avatar: z.any().superRefine((file, ctx) => {
    if (!(file instanceof File)) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please upload a file.',
      });
    }
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Please upload a valid image file.',
      });
    }
    if (file.size > MAX_FILE_SIZE) {
      return ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'File size is too large.',
      });
    }
  })
});

export default function FormValidation() {
  const [data, setData] = useState<z.infer<typeof formSchema> | null>(null);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      avatar: undefined
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('values', values);
    setData(values);
  };

  return (
    <div>
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
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Avatar</FormLabel>
                <FormControl>
                  <Input
                    className='hover:border-gray-700 hover:cursor-pointer hover:border-2'
                    accept=".jpg, .jpeg, .png, .svg, .gif, .mp4"
                    type="file"
                    onChange={(e) =>
                      field.onChange(e.target.files ? e.target.files[0] : null)
                    } />
                </FormControl>
                <FormDescription>
                  This is your avatar.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {data && (
        <div>
          <h2>Form Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
