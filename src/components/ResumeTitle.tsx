import { DataProps } from "@/types";

const ResumeTitle = ({ resumeTitle }: Pick<DataProps, "resumeTitle">) => {
  return (
    <div className="bg-gradient-to-r from-[#51cf66] via-PRIMARY to-[#0c8599] h-2 sticky top-0 md:static md:h-20 flex justify-center items-center">
      <span className="text-2xl hidden md:block font-semibold text-white">{resumeTitle.title}</span>
    </div>
  );
};

export default ResumeTitle;
