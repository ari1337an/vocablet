import React, { useState } from "react";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { toast } from "sonner";

interface AddBucketSheetProps {
  onAddBucket: (newBucket: { id: string; title: string }) => void;
}

export function AddBucketSheet({ onAddBucket }: AddBucketSheetProps) {
  const [bucketName, setBucketName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBucketName(event.target.value);
  };

  const handleSaveChanges = () => {
    fetch("/api/buckets/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: bucketName }),
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
        } else {
          console.error("Error creating bucket:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error creating bucket:", error);
      });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Bucket</SheetTitle>
          <SheetDescription>
            {`Make changes to your profile here. Click Add when you're done.`}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="name"
              value={bucketName}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="button" onClick={handleSaveChanges}>
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
