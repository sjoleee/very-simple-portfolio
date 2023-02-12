import Image from "next/image";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const WorkExperienceItem = ({
  id,
  name,
  hasIcon,
  position,
  period,
}: {
  id: number;
  name: string;
  description?: string;
  hasIcon?: boolean;
  position: string;
  period: string[];
}) => {
  const [markdown, setMarkdown] = useState<string>("");
  const imgSrc = `/images/workExperience/${id}.png`;

  useEffect(() => {
    (async () => {
      const markdownModule = await import(`@/assets/markdown/workExperience/${id}.md`);
      setMarkdown(markdownModule.default);
    })();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex md:flex-col items-center md:items-start mr-4 gap-6">
        {hasIcon && (
          <Image
            src={imgSrc}
            width="200"
            height="200"
            alt={name}
            className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid w-24 h-24"
          />
        )}
        <div className="w-48">
          <h3 className="mb-2">{name}</h3>
          <div className="flex flex-col">
            <span className="m-0">{position}</span>
            <span>{`${period[0]} - ${period[1]}`}</span>
          </div>
        </div>
      </div>
      <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 markdown w-full">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
