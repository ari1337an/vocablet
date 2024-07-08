import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import { Input } from "@/app/_components/ui/input";
import FlashCardIconWrapperProps from "./flashcards-icon-wrapper";
import ShareIcon from "@/app/_icons/share";
import DeleteIcon from "@/app/_icons/delete";
import toast from "react-hot-toast";
import { useState } from "react";

interface Bucket {
  id: string;
  title: string;
}

interface ConfirmationDialogProps {
  bucket: Bucket;
  setBuckets: React.Dispatch<React.SetStateAction<Bucket[]>>;
}

const DeleteBucketButtonWithConfirmationDialog: React.FC<
  ConfirmationDialogProps
> = ({ bucket, setBuckets }) => {
  const [open, setOpen] = useState(false);

  const handleDeleteBucket = async (id: string) => {
    await fetch("/api/buckets/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers as needed
      },
      // You can include credentials: 'include' if your API requires authentication cookies
    }).then((response) => {
      if (response.ok) {
        setBuckets((prevBuckets) =>
          prevBuckets.filter((bucket) => bucket.id !== id)
        );
        toast.success("Bucket deleted successfully");
        setOpen(false);
      } else {
        toast.error("Failed to delete bucket");
      }
    });

  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <DeleteIcon className="w-5 h-5 fill-white hover:fill-primary" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            {`Are you sure you want to delete this vocabulary from the list?`}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button type="submit" onClick={() => handleDeleteBucket(bucket.id)}>
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteBucketButtonWithConfirmationDialog;
