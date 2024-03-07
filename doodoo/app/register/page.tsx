import Image from "next/image";
import Input from "../ui/form/input";
import Link from "next/link";
import Form from "../ui/form/form";
import FormButton from "../ui/form/form-button";
import LinkSimple from "../ui/form/link-simple";
import TitleForm from "../ui/form/title-form";

export default function Register() {
  return (
    <>
      <div className="h-full flex flex-col justify-center content-center p-4">
        <Form bottom="Create a new account">
          <TitleForm name="Register" />
          <Input label="Name" placeholder="Ex: John Doe" type="name" />
          <Input label="Email" placeholder="Ex: john@email.com" type="email" />
          <Input label="Password" placeholder="Password" type="password" />
          <Input
            label="Repeat password"
            placeholder="Password"
            type="password"
          />
          <FormButton name="Login" />
        </Form>
      </div>
    </>
  );
}
