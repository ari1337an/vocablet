import React from "react";

interface FlashCardIconWrapperProps {
  children: React.ReactNode;
}

const FlashCardIconWrapperProps: React.FC<FlashCardIconWrapperProps> = ({
  children,
}) => {
  return React.cloneElement(children as React.ReactElement, {
    className: "w-5 h-5 fill-white hover:fill-secondary",
  });
};

export default FlashCardIconWrapperProps;
