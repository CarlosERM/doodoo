"use client";
import Input from "../ui/form/input";
import LinkSimple from "../ui/form/link-simple";
import TitleForm from "../ui/form/title-form";
import Form from "../ui/form/form";
import FormButton from "../ui/form/form-button";
import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePassword2,
} from "../lib/validation";
import { useDebounce } from "../lib/useDebounce";

interface RegisterFormData {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

export default function Register() {
  const [loginData, setLoginData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [errorsForm, setErrorsForm] = useState<RegisterFormData>({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const debouncedValidateName = useDebounce(validateName, 450);
  const debouncedValidateEmail = useDebounce(validateEmail, 450);
  const debouncedValidatePassword1 = useDebounce(validatePassword, 450);
  const debouncedValidatePassword2 = useDebounce(validatePassword2, 450);

  const handleChange = (target: HTMLInputElement) => {
    const { name, value } = target;
    setLoginData({ ...loginData, [name]: value });

    if (name === "name") {
      debouncedValidateName(value, (e: string) =>
        setErrorsForm({ ...errorsForm, name: e })
      );
    }

    if (name === "email") {
      debouncedValidateEmail(value, (e: string) =>
        setErrorsForm({ ...errorsForm, email: e })
      );
    }

    if (name === "password1") {
      debouncedValidatePassword1(value, (e: string) =>
        setErrorsForm({ ...errorsForm, password1: e })
      );
    }

    if (name === "password2") {
      console.log(loginData.password1, loginData.password2);
      debouncedValidatePassword2(
        loginData.password1,
        loginData.password2,
        (e: string) => setErrorsForm({ ...errorsForm, password2: e })
      );
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // if (loginData.email === "") {
    //   console.log(loginData);
    //   setErrorsForm({ ...errorsForm, email: "Email is empty" });
    //   return;
    // }
    // if (loginData.password === "") {
    //   console.log(loginData);
    //   setErrorsForm({ ...errorsForm, password: "Email is empty" });
    //   return;
    // }
    // if (
    //   validateEmail(loginData.email, (e: string) =>
    //     setErrorsForm({ ...errorsForm, email: e })
    //   ) &&
    //   validatePassword(loginData.password, (e: string) =>
    //     setErrorsForm({ ...errorsForm, password: e })
    //   )
    // ) {
    //   console.log("envia pra api");
    // }
  };

  return (
    <>
      <div className="h-full flex flex-col justify-center content-center p-4">
        <Form
          bottom="Already have an account?"
          bottom_route="/login"
          handleSubmit={handleSubmit}
        >
          <TitleForm name="Register" />
          <Input
            label="Name"
            type="name"
            value={loginData.name}
            placeholder="Ex: John Doe"
            className={
              errorsForm.email &&
              "border border-red-500 focus:ring-1 focus:ring-red-500"
            }
            handleChange={handleChange}
          />
          {errorsForm.name && (
            <p className="text-red-500 text-sm mb-3">{errorsForm.name}</p>
          )}
          <Input
            label="Email"
            type="email"
            value={loginData.email}
            placeholder="Ex: john@gmail.com"
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
            name="password1"
            value={loginData.password1}
            placeholder="Password"
            className={
              errorsForm.password1 &&
              "border border-red-500 focus:ring-1 focus:ring-red-500"
            }
            handleChange={handleChange}
          />
          {errorsForm.password1 && (
            <p className="text-red-500 text-sm mb-3">{errorsForm.password1}</p>
          )}
          <Input
            label="Password"
            type="password"
            name="password2"
            value={loginData.password2}
            placeholder="Password"
            className={
              errorsForm.password2 &&
              "border border-red-500 focus:ring-1 focus:ring-red-500"
            }
            handleChange={handleChange}
          />
          {errorsForm.password2 && (
            <p className="text-red-500 text-sm mb-3">{errorsForm.password2}</p>
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
