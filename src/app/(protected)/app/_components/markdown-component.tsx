import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as PrismStyle } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyIcon from "@/app/_icons/copy";
import CheckNoCircleIcon from "@/app/_icons/check-no-circle";

type MarkdownComponentProps = {
  markdownText: string;
};

const MarkdownComponent: React.FC<MarkdownComponentProps> = ({
  markdownText,
}) => {
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedCodeIndex(index);
      setTimeout(() => {
        setCopiedCodeIndex(null);
      }, 3000);
    });
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");
          const codeContent = String(children);
          const codeIndex = node.position?.start.offset || 0;
          const language = match ? match[1] : "unknown";
          const isInlineCode = codeContent.length <= 50;

          if (inline || isInlineCode) {
            return (
              <code className="text-white p-1" {...props}>
                {children}
              </code>
            );
          } else {
            return (
              <div className="relative my-4">
                <div className="flex justify-between items-center bg-secondary rounded-t-lg py-2 px-4">
                  <span className="text-sm text-gray-300 font-mono">
                    {language}
                  </span>
                  <button
                    className="flex items-center bg-secondary text-white p-1 rounded text-sm"
                    onClick={() => handleCopy(codeContent, codeIndex)}
                  >
                    {copiedCodeIndex === codeIndex ? (
                      <>
                        <CheckNoCircleIcon className="h-4 w-4 fill-white mr-1" />
                        Copied
                      </>
                    ) : (
                      <>
                        <CopyIcon className="h-4 w-4 fill-white mr-1" />
                        Copy code
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-secondary rounded-b-lg overflow-x-auto">
                  <SyntaxHighlighter
                    style={PrismStyle}
                    language={language}
                    PreTag="div"
                    {...props}
                    className="bg-secondary p-0 m-0" // Remove default margin and padding
                  >
                    {codeContent}
                  </SyntaxHighlighter>
                </div>
              </div>
            );
          }
        },
        table({ children }) {
          return (
            <div className="overflow-x-auto my-4">
              <table className="min-w-full bg-secondary divide-y divide-gray-200">
                {children}
              </table>
            </div>
          );
        },
        thead({ children }) {
          return (
            <thead className="bg-primary text-white rounded-t-lg">
              {children}
            </thead>
          );
        },
        th({ children }) {
          return (
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              {children}
            </th>
          );
        },
        tbody({ children }) {
          return (
            <tbody className="bg-secondary divide-y divide-gray-200 rounded-b-lg">
              {children}
            </tbody>
          );
        },
        td({ children }) {
          return <td className="px-6 py-4 whitespace-nowrap">{children}</td>;
        },
        tr({ children }) {
          return <tr>{children}</tr>;
        },
      }}
    >
      {markdownText}
    </ReactMarkdown>
  );
};

export default MarkdownComponent;
