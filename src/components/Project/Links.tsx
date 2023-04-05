import GithubIcon from "@/assets/images/github.svg";
import WebIcon from "@/assets/images/web.svg";

const Links = ({ repoUrl, webUrl }: { repoUrl: string; webUrl: string | undefined }) => {
  return (
    <div className="flex gap-1">
      <a target="_blank" rel="noreferrer" href={repoUrl} className="w-fit">
        <GithubIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
      </a>
      {webUrl && (
        <a target="_blank" rel="noreferrer" href={webUrl} className="w-fit">
          <WebIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
        </a>
      )}
    </div>
  );
};

export default Links;
