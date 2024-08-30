import React from "react";

type TableOfContentsProps = {
  items: { href: string; title: string }[];
  className?: string; // className is optional for custom styling
};

const TableOfContents: React.FC<TableOfContentsProps> = ({ items, className }) => {
  return (
    <div className={`mb-10 p-5 rounded-lg bg-gray-100 dark:bg-gray-800 border border-body-color border-opacity-10 dark:border-white dark:border-opacity-10 ${className}`}>
      <h4 className="text-lg font-semibold text-body-color dark:text-white mb-4">
        Table of Contents
      </h4>
      <ol className="list-disc pl-5 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-blue-600 dark:text-blue-400 hover:underline transition-all duration-200"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TableOfContents;
