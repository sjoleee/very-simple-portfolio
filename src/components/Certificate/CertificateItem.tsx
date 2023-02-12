const CertificateItem = ({
  name,
  date,
  organizer,
}: {
  name: string;
  date: string;
  organizer: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <h3>{name}</h3>
        <div className="flex flex-col">
          <span>{organizer}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default CertificateItem;
