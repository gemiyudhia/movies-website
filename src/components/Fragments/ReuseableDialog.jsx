import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const ReusableDialog = ({
  isOpen,
  onClose,
  title,
  imageSrc,
  description,
  popularity,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="md:py-18 w-full space-y-6 p-4 md:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-x-4 space-y-3 md:h-full md:flex-row md:justify-between">
          <img
            src={imageSrc}
            alt={title}
            className="h-auto w-32 rounded-lg md:w-64"
          />
          <div className="flex h-full flex-col justify-evenly">
            <DialogDescription className="text-justify text-base">
              {description}
            </DialogDescription>
            <DialogDescription className="mt-2 text-justify text-base font-semibold text-black">
              Popularity: {popularity}
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReusableDialog;
