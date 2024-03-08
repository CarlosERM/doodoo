import LinkSimple from "./form/link-simple";
import Logo from "./form/logo";
import github from "@/public/github_logo.svg";
import linkedin from "@/public/linkedin.svg";
import Image from "next/image";

export default function SocialIcons() {
  return (
    <div className="fixed bottom-4 flex gap-4">
      <a
        className="flex align-center"
        href="https://github.com/CarlosERM"
        target="_blank"
        rel="noopener"
      >
        <Image src={github} alt="Github logo" />
      </a>
      <a
        className="flex align-center"
        href="https://www.linkedin.com/in/carloserm/"
        target="_blank"
        rel="noopener"
      >
        <Image src={linkedin} alt="Linkedin logo" />
      </a>
    </div>
  );
}
