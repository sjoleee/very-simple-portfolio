const ContactItem = ({
  name,
  isEmail,
  href,
}: {
  name: string;
  href: string;
  isEmail?: boolean;
}) => {
  return (
    <a target="_blank" rel="noreferrer" href={isEmail ? `mailto:${href}` : href} className="w-fit">
      <span className="px-1 text-xs text-white dark:text-GRAY_HEAVY hover:text-BLACK dark:hover:text-BLACK">
        {name}.
      </span>
    </a>
  );
};

export default ContactItem;
