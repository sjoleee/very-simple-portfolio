import SectionTitle from "../SectionTitle";
import ActivityItem from "./ActivityItem";

import { DataProps } from "@/types";

const Activity = ({ activity }: Pick<DataProps, "activity">) => {
  return (
    <div>
      <SectionTitle>Activities</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...activity].reverse().map((activity) => (
          <ActivityItem key={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default Activity;
