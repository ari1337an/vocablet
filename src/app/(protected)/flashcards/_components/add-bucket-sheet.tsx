import React from "react";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";

const formSchema = z.object({
  bucketName: z
    .string()
    .min(2, { message: "Bucket name must be at least 2 characters." })
    .max(50, { message: "Bucket name cannot be more than 50 characters." }),
});

interface AddBucketSheetProps {
  onAddBucket: (newBucket: { id: string; title: string }) => void;
}

export function AddBucketSheet({ onAddBucket }: AddBucketSheetProps) {
  const [open, setOpen] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bucketName: "",
    },
  });

  const onSubmit = (values: { bucketName: string }) => {
    fetch("/api/buckets/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: values.bucketName }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          onAddBucket(data.bucket); // Call the function to add the new bucket to the list
          toast("Bucket has been created", {
            description: "",
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
          form.reset(); // Reset the form
          setOpen(false);
        } else {
          console.error("Error creating bucket:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error creating bucket:", error);
      });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button>Create new bucket</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Bucket</SheetTitle>
          <SheetDescription>{`Click Add when you're done.`}</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="bucketName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Bucket name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SheetFooter>
                <Button type="submit">Create</Button>
              </SheetFooter>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
