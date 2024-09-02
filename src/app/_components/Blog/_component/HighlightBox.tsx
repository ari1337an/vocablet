import React from "react";

type HighlightBoxProps = {
  children: React.ReactNode;
  className?: string; // Make className optional
};

const HighlightBox: React.FC<HighlightBoxProps> = ({ children, className }) => {
  const baseClasses =
    "relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9";
  return <div className={`${baseClasses} ${className}`}>{children}</div>;
};

export default HighlightBox;
