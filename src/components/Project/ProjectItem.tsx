import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Links from "./Links";

import { ProjectProps } from "@/types";

const ProjectItem = ({
  name,
  description,
  repoUrl,
  webUrl,
  period,
  stack,
  markdown,
  imgSrc,
}: ProjectProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex md:flex-col items-center md:items-start mr-4 gap-6">
          {imgSrc && (
            <Image
              src={imgSrc}
              width="200"
              height="200"
              alt={name}
              className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT dark:border-white border-solid w-24 h-24"
            />
          )}
          <div className="flex flex-col gap-2">
            <div className="w-48">
              <h3>{name}</h3>
              <div className="flex flex-col">
                <span>{`${period[0]} - ${period[1]}`}</span>
              </div>
            </div>
            <Links repoUrl={repoUrl} webUrl={webUrl} />
          </div>
        </div>
      </div>
      <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 markdown flex flex-col w-full gap-2">
        <div>
          <blockquote className="whitespace-pre-wrap">{`${description}`}</blockquote>
          <div className="flex gap-1 flex-wrap">
            {stack.map((stack) => (
              <span
                key={stack}
                className=" bg-BLACK dark:bg-white  py-[2px] px-1.5 rounded-md text-xs font-medium font-mono whitespace-nowrap text-white dark:text-BLACK"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown ?? ""}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectItem;
