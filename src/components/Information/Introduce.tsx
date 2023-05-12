import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { InformationProps } from "@/types";

const Introduce = ({ markdown }: Pick<InformationProps, "markdown">) => {
  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown ?? ""}</ReactMarkdown>;
};

export default Introduce;
