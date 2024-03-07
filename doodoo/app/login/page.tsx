import Input from "../ui/form/input";
import github from "@/public/github_logo.svg";
import linkedin from "@/public/linkedin.svg";
import LinkSimple from "../ui/form/link-simple";
import TitleForm from "../ui/form/title-form";
import Form from "../ui/form/form";
import FormButton from "../ui/form/form-button";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <div className="h-full flex flex-col justify-center content-center p-4">
        <Form bottom="Create a new account">
          <TitleForm name="Login" />
          <Input label="Email" type="email" placeholder="john@gmail.com" />
          <Input label="Password" type="password" placeholder="Password" />
          <div className="text-end">
            <LinkSimple name="Forgot Password" />
          </div>
          <FormButton name="Login" />
        </Form>
      </div>
    </>
  );
}
