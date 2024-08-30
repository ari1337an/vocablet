import React from "react";

type SubHeadingProps = {
  children: React.ReactNode;
  className?: string; // className is optional
  id?: string; // id is optional for use in Table of Contents
};

const SubHeading: React.FC<SubHeadingProps> = ({
  children,
  className = "",
  id,
}) => {
  const baseClasses =
    "font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight";
  return (
    <h3 id={id} className={`${baseClasses} ${className}`.trim()}>
      {children}
    </h3>
  );
};

export default SubHeading;
