import Introduce from "./Introduce";

import { DataProps } from "@/pages";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="leading-[1.15] text-5xl ">
          안녕하세요,
          <br /> 프론트엔드 개발자{" "}
          <span className="text-PRIMARY selection:bg-PRIMARY_LIGHT font-semibold">
            {information.name}
          </span>
          입니다.
        </h1>
      </div>
      <Introduce />
    </div>
  );
};

export default Information;
