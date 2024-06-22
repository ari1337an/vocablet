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
interface ConfirmationDialogProps {
  vocabularyId: string;
  reloadList: () => void;
}

const DeleteButtonWithConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  vocabularyId,
  reloadList,
}) => {
  const handleDeleteClick = async (vocabularyId: string) => {
    console.log("Delete icon clicked for id: ", vocabularyId);
    const deleteResponse = await fetch("/api/vocabulary/" + vocabularyId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers as needed
      },
      // You can include credentials: 'include' if your API requires authentication cookies
    });
    if (!deleteResponse.ok) {
      throw new Error("Failed to delete vocabulary");
    }
    toast.success("Vocabulary deleted successfully");
    reloadList(); // Reload the list after deletion
  };
  return (
    <Dialog>
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
          <Button type="submit" onClick={() => handleDeleteClick(vocabularyId)}>
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteButtonWithConfirmationDialog;
