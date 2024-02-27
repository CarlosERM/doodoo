import Image from "next/image";
import logo from "@/public/logo.svg";
import github from "@/public/github_logo.svg";
import linkedin from "@/public/linkedin.svg";
import style from "./page.module.css";
import { Input } from "../ui/input/input";
import { Link } from "../ui/link/link";
import { Button } from "../ui/button/button";

export default function Login() {
  return (
    <>
      <div className={style.login_wrapper}>
        <Image className={style.logo} src={logo} alt="Doodoo logo" />
        <div className={style.form_wrapper}>
          <h2 className={style.form_title}>Login</h2>
          <form className={style.form} action="">
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Password" />
            <div className={style.link_wrapper_end}>
              <Link name="Forgot password" />
            </div>
            <Button name="Login" />
          </form>
        </div>
        <div className={style.link_wrapper_center}>
          <Link name="Create a new account" />
        </div>
      </div>
      <div className={style.icons_wrapper}>
        <a
          href="https://github.com/CarlosERM"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className={style.icon} src={github} alt="Github Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/carloserm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image className={style.icon} src={linkedin} alt="Linkedin Icon" />
        </a>
      </div>
    </>
  );
}
