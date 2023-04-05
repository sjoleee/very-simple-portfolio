import SectionTitle from "../SectionTitle";
import EducationItem from "./EducationItem";

import { DataProps } from "@/types";

const Education = ({ education }: Pick<DataProps, "education">) => {
  return (
    <div>
      <SectionTitle>Education</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...education].reverse().map((education) => (
          <EducationItem key={education.id} {...education} />
        ))}
      </div>
    </div>
  );
};

export default Education;
