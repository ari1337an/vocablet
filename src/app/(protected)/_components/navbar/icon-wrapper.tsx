import React from "react";

interface IconWrapperProps {
  children: React.ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => {
  return React.cloneElement(children as React.ReactElement, {
    className: "w-6 h-6 fill-white hover:fill-secondary",
  });
};

export default IconWrapper;
