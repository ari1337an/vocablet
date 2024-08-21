import React from "react";

type ListItemProps = {
  children: React.ReactNode;
  className?: string; // Make className optional
};

const ListItem: React.FC<ListItemProps> = ({ children, className }) => {
  const baseClasses =
    "mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg";
  return <li className={`${className} ${baseClasses}`}>{children}</li>;
};

export default ListItem;
