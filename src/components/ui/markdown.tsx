// src/components/ui/Markdown.tsx
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // permet de parser le HTML brut dans le markdown

const components = {
  strong: ({ ...props }) => (
    <strong className="font-bold text-primary" {...props} />
  ),
  a: ({ ...props }) => (
    <a
      className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
};

export default function Markdown({ content }: { readonly content: string }) {
  return (
    <ReactMarkdown 
      rehypePlugins={[rehypeRaw]}
      components={components}
      >
      {content}
    </ReactMarkdown>
  );
}