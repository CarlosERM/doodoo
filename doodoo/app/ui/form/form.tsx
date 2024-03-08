import LinkSimple from "./link-simple";
import Logo from "./logo";
import github from "@/public/github_logo.svg";
import linkedin from "@/public/linkedin.svg";
import Image from "next/image";
import SocialIcons from "../SocialIcons";
import { ChangeEvent, FormEvent, FormEventHandler } from "react";

export default function Form({
  children,
  bottom,
  bottom_route,
  handleSubmit,
}: Readonly<{
  children: React.ReactNode;
  bottom: string;
  bottom_route: string;
  handleSubmit: (target: FormEvent<HTMLFormElement>) => void;
}>) {
  return (
    <>
      <div className="self-center container flex flex-col max-w-md">
        <Logo />
        <form
          className=" bg-c9 rounded-2xl p-8 flex flex-col peer"
          onSubmit={handleSubmit}
          noValidate
        >
          {children}
        </form>
        <div className="text-center mt-4">
          <LinkSimple name={bottom} route={bottom_route} />
        </div>
      </div>
      <SocialIcons />
    </>
  );
}
