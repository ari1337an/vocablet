import React from "react";

type UnorderedListProps = {
  children: React.ReactNode;
  className?: string; // Make className optional
};

const UnorderedList: React.FC<UnorderedListProps> = ({ children, className }) => {
  const baseClasses = "mb-10 list-inside list-disc text-body-color";
  return <ul className={`${className} ${baseClasses}`}>{children}</ul>;
};

export default UnorderedList;
