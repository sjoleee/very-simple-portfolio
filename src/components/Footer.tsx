import ContactItem from "./ContactItem";

const Footer = ({
  contact,
}: {
  contact: { id: number; name: string; href: string; isEmail?: boolean }[];
}) => {
  return (
    <footer className="flex flex-col gap-2 justify-center items-center bg-GRAY h-28 text-xs text-white dark:bg-GRAY_EXTRAHEAVY dark:text-GRAY_HEAVY">
      <div className="flex gap-1">
        {contact.map((contact) => (
          <ContactItem key={contact.id} {...contact} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <a target="_blank" rel="noreferrer" href="https://github.com/sjoleee/simple-portfolio">
          <span>Copyright 2023 sjoleee</span>
        </a>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
