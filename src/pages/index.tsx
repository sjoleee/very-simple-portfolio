import fsPromises from "fs/promises";
import path from "path";

import { NextPage } from "next";

import Activity from "@/components/Activity";
import Certificate from "@/components/Certificate";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Information from "@/components/Information";
import Layout from "@/components/Layout";
import Project from "@/components/Project";
import ResumeTitle from "@/components/ResumeTitle";
// import ScrollProgress from "@/components/ScrollProgress";
import WorkExperience from "@/components/WorkExperience";
import { DataProps, ProjectProps, WorkExperienceProps } from "@/types";

const Home: NextPage<DataProps> = ({
  resumeTitle,
  information,
  workExperience,
  project,
  activity,
  education,
  certificate,
}) => {
  return (
    <>
      {/* <ScrollProgress /> */}
      <ResumeTitle resumeTitle={resumeTitle} />
      <Layout>
        <Information information={information} />
        <WorkExperience workExperience={workExperience} />
        <Project project={project} />
        <Activity activity={activity} />
        <Education education={education} />
        <Certificate certificate={certificate} />
      </Layout>
      <Footer contact={information.contact} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath, "utf8");
  const objectData = JSON.parse(jsonData);

  const workExperienceWithMd = objectData.workExperience.map((item: WorkExperienceProps) => {
    const getMd = async () => {
      try {
        const markdownModule = await import(`@/assets/markdown/workExperience/${item.id}.md`);
        return { ...item, markdown: markdownModule.default };
      } catch {
        console.log("no markdown");
        return item;
      }
    };
    return getMd();
  });

  const workExperienceWithMdResult = await Promise.all(workExperienceWithMd);

  const projectWithMd = objectData.project.map((item: ProjectProps) => {
    const getMd = async () => {
      try {
        const markdownModule = await import(`@/assets/markdown/project/${item.id}.md`);
        return { ...item, markdown: markdownModule.default };
      } catch {
        console.log("no markdown");
        return item;
      }
    };
    return getMd();
  });

  const projectWithMdResult = await Promise.all(projectWithMd);

  return {
    props: {
      ...objectData,
      workExperience: workExperienceWithMdResult,
      project: projectWithMdResult,
    },
  };
};
