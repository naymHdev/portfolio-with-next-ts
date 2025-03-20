import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "@/styles/markdown.css";

const NHReactMarkdown = ({ content }: { content: string | undefined }) => {
  return (
    <div className=" markdown-content">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default NHReactMarkdown;
