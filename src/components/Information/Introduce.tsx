import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import markdown from "@/assets/markdown/introduce.md";

const Introduce = () => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
};

export default Introduce;
