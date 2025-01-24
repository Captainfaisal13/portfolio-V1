import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => {
      return (
        <h1 className="text-2xl font-bold mt-8 mb-2 dark:text-white">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      return (
        <h2 className="text-xl font-bold mt-16 mb-8 dark:text-white">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      return (
        <h3 className="text-xl font-bold mt-8 mb-8 dark:text-white">
          {children}
        </h3>
      );
    },
    h4: ({ children }) => {
      return (
        <h3 className="text-lg font-bold mt-4 mb-2 dark:text-white">
          {children}
        </h3>
      );
    },
    p: ({ children }) => {
      return <p className="text-gray-700 dark:text-gray-300">{children}</p>;
    },
    li: ({ children }) => {
      return (
        <li className="text-gray-700 dark:text-gray-300 pl-7 mdx-list">
          {children}
        </li>
      );
    },
    blockquote: ({ children }) => {
      return (
        <blockquote className="italic border-l-4 border-l-[#e5e7eb] dark:border-l-[#374151] text-[#111827] dark:text-[#d1d5db] pl-4 py-1">
          {children}
        </blockquote>
      );
    },
    pre: ({ children }) => {
      return (
        <pre className="my-4 overflow-x-scroll bg-transparent border border-gray-200 dark:border-gray-800 rounded-md bg-[#F9FAFB] dark:bg-[#111827] p-4 text-sm dark:text-white">
          {children}
        </pre>
      );
    },
    code: ({ children }) => {
      return <code className="">{children}</code>;
    },
    ...components,
  };
}
