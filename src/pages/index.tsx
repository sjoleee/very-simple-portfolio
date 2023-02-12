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

export interface DataProps {
  resumeTitle: {
    title: string;
  };
  information: {
    name: string;
    contact: { id: number; name: string; href: string; isEmail?: boolean }[];
  };
  workExperience: {
    id: number;
    name: string;
    description?: string;
    hasIcon?: boolean;
    position: string;
    period: string[];
  }[];
  project: {
    id: number;
    name: string;
    description: string;
    hasIcon?: boolean;
    repoUrl: string;
    webUrl?: string;
    isTeam?: boolean;
    period: string[];
    stack: string[];
  }[];
  activity: {
    id: number;
    name: string;
    description: string;
    period: string[];
  }[];
  education: {
    id: number;
    name: string;
    description: string;
    period: string[];
  }[];
  certificate: {
    id: number;
    name: string;
    date: string;
    organizer: string;
  }[];
}

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

  return {
    props: objectData,
  };
};
