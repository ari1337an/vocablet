import React from "react";

type ParagraphProps = {
  children: React.ReactNode;
  className?: string; // Make className optional
};

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
  const baseClasses =
    "mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed";
  return <p className={`${className} ${baseClasses}`}>{children}</p>;
};

export default Paragraph;
