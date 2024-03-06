import Image from "next/image";
import Input from "../ui/input";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="h-full flex justify-center content-center">
        <form className="self-center bg-c10 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-2">Login</h2>
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <div className="text-end">
            <Link className="text-sm font-medium" href="#">
              Forgot Password
            </Link>
          </div>
        </form>
      </div>
      {/* <div className={style.login_wrapper}>
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
      </div> */}
    </>
  );
}
