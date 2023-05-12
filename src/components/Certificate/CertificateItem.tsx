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
        <div className="flex flex-col">
          <h3>{name}</h3>
          <span>{date}</span>
        </div>
        <span>{organizer}</span>
      </div>
    </div>
  );
};

export default CertificateItem;
