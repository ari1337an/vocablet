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
import EditIcon from "@/app/_icons/edit";
import toast from "react-hot-toast";

const formSchema = z.object({
  bucketName: z
    .string()
    .min(2, { message: "Bucket name must be at least 2 characters." })
    .max(50, { message: "Bucket name cannot be more than 50 characters." }),
});
interface Bucket {
  id: string;
  title: string;
}

interface EditBucketSheetProps {
  currentBucket: Bucket;
  setBucket: React.Dispatch<React.SetStateAction<Bucket>>;
}

export function EditBucketSheet({
  currentBucket,
  setBucket,
}: EditBucketSheetProps) {
  const [open, setOpen] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bucketName: "",
    },
  });

  const onSubmit = (values: { bucketName: string }) => {
    // setBucket({ id: currentBucket.id, title: values.bucketName });
    // setOpen(false);
    // set(values.bucketName);
    fetch("/api/buckets/" + currentBucket.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updatedName: values.bucketName }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // TODO
          // onAddBucket(data.bucket); // Call the function to add the new bucket to the list
          setBucket(data.bucket);
          toast.success("Bucket Name updated successfully.");
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
        <Button variant={"ghost"}>
          <EditIcon className="w-5 h-5 fill-white mx-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Bucket Name</SheetTitle>
          <SheetDescription>{`Click Update when you're done.`}</SheetDescription>
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
                      <Input placeholder={currentBucket.title} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SheetFooter>
                <Button type="submit">Update</Button>
              </SheetFooter>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
