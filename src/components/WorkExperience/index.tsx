import SectionTitle from "../SectionTitle";
import WorkExperienceItem from "./WorkExperienceItem";

import { DataProps } from "@/types";

const WorkExperience = ({ workExperience }: Pick<DataProps, "workExperience">) => {
  return (
    <div>
      <SectionTitle>Work Experience</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...workExperience].reverse().map((experience) => (
          <WorkExperienceItem key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
