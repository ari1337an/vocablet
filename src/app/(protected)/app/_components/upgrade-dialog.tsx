import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/app/_components/ui/dialog";
import { Button } from "@/app/_components/ui/button";

const UpgradeDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>Upgrade Required</DialogTitle>
        <DialogDescription>
          You do not have access to this feature. Please upgrade to access the
          roleplay feature.
        </DialogDescription>
        <div className="mt-4">
          <Button onClick={() => (window.location.href = "/pricing")}>
            Upgrade
          </Button>
          <DialogClose asChild>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeDialog;
