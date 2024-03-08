"use client";
import Input from "../ui/form/input";
import LinkSimple from "../ui/form/link-simple";
import TitleForm from "../ui/form/title-form";
import Form from "../ui/form/form";
import FormButton from "../ui/form/form-button";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { validateEmail, validatePassword } from "../lib/validation";
import { useDebounce } from "../lib/useDebounce";

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const [loginData, setLoginData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errorsForm, setErrorsForm] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const debouncedValidateEmail = useDebounce(validateEmail, 450);
  const debouncedValidatePassword = useDebounce(validatePassword, 450);

  const handleChange = (target: HTMLInputElement) => {
    const { name, value } = target;
    setLoginData({ ...loginData, [name]: value });

    if (name === "email") {
      debouncedValidateEmail(value, (e: string) =>
        setErrorsForm({ ...errorsForm, email: e })
      );
    }

    if (name === "password") {
      debouncedValidatePassword(value, (e: string) =>
        setErrorsForm({ ...errorsForm, password: e })
      );
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loginData.email === "") {
      console.log(loginData);
      setErrorsForm({ ...errorsForm, email: "Email is empty" });
      return;
    }

    if (loginData.password === "") {
      console.log(loginData);
      setErrorsForm({ ...errorsForm, password: "Email is empty" });
      return;
    }

    if (
      validateEmail(loginData.email, (e: string) =>
        setErrorsForm({ ...errorsForm, email: e })
      ) &&
      validatePassword(loginData.password, (e: string) =>
        setErrorsForm({ ...errorsForm, password: e })
      )
    ) {
      console.log("envia pra api");
    }
  };

  return (
    <>
      <div className="h-full flex flex-col justify-center content-center p-4">
        <Form
          bottom="Create a new account"
          bottom_route="/register"
          handleSubmit={handleSubmit}
        >
          <TitleForm name="Login" />
          <Input
            label="Email"
            type="email"
            value={loginData.email}
            placeholder="john@gmail.com"
            className={
              errorsForm.email &&
              "border border-red-500 focus:ring-1 focus:ring-red-500"
            }
            handleChange={handleChange}
          />
          {errorsForm.email && (
            <p className="text-red-500 text-sm mb-3">{errorsForm.email}</p>
          )}
          <Input
            label="Password"
            type="password"
            value={loginData.password}
            placeholder="Password"
            className={
              errorsForm.password &&
              "border border-red-500 focus:ring-1 focus:ring-red-500"
            }
            handleChange={handleChange}
          />
          {errorsForm.password && (
            <p className="text-red-500 text-sm mb-3">{errorsForm.password}</p>
          )}
          <div className="text-end">
            <LinkSimple name="Forgot Password" route="/reset-password" />
          </div>
          <FormButton name="Login" />
        </Form>
      </div>
    </>
  );
}
