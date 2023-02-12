const EducationItem = ({
  name,
  description,
  period,
}: {
  name: string;
  description: string;
  period: string[];
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <h3>{name}</h3>
        <div className="flex flex-col">
          <span>{description}</span>
          <span>{`${period[0]} - ${period[1]}`}</span>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
