import React from "react";

type SubHeadingProps = {
  children: React.ReactNode;
  className?: string; // Make className optional
};

const SubHeading: React.FC<SubHeadingProps> = ({ children, className }) => {
  const baseClasses =
    "font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight";
  return <h3 className={`${className} ${baseClasses}`}>{children}</h3>;
};

export default SubHeading;
