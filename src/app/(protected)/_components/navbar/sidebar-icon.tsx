import { Button } from "@/app/_components/ui/button";
import React from "react";
import IconWrapper from "./icon-wrapper";

interface SidebarButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  icon,
  text,
  onClick,
}) => {
  return (
    <Button
      className="w-full flex flex-row items-center justify-start gap-x-4 text-base font-normal hover:bg-primary rounded py-5"
      variant="ghost"
      onClick={onClick}
    >
      <IconWrapper>{icon}</IconWrapper>
      {text}
    </Button>
  );
};

export default SidebarButton;
