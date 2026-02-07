import { FaXTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa6";

const SocialIcons = () => {
  const iconClass = "h-6 w-6 transition-all duration-300";
  const linkClass = "mx-3 text-slate-400 hover:text-slate-900 hover:-translate-y-1 transition-all duration-300";

  return (
    <div className="my-5 flex items-center justify-center">
      <a href="https://www.linkedin.com/in/..." target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="Linkedin">
        <FaLinkedinIn className={iconClass} />
      </a>
      <a href="https://github.com/..." target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="Github">
        <FaGithub className={iconClass} />
      </a>
      <a href="https://x.com/..." target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="Twitter">
        <FaXTwitter className={iconClass} />
      </a>
      <a href="https://www.instagram.com/..." target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="Instagram">
        <FaInstagram className={iconClass} />
      </a>
    </div>
  );
};

export default SocialIcons;