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
import Logo from "../ui/form/logo";

interface RegisterFormData {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

export default function Register() {
  const [registerData, setRegisterData] = useState<RegisterFormData>({
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
    console.log([name], value);
    setRegisterData({ ...registerData, [name]: value });
    console.log(registerData);

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
      debouncedValidatePassword2(registerData.password1, value, (e: string) =>
        setErrorsForm({ ...errorsForm, password2: e })
      );
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (registerData.name === "") {
      console.log(registerData);
      setErrorsForm({ ...errorsForm, name: "Name is empty" });
      return;
    }

    if (registerData.email === "") {
      console.log(registerData);
      setErrorsForm({ ...errorsForm, email: "Email is empty" });
      return;
    }

    if (registerData.password1 === "") {
      console.log(registerData);
      setErrorsForm({ ...errorsForm, password1: "Password is empty" });
      return;
    }

    if (registerData.password2 === "") {
      console.log(registerData);
      setErrorsForm({ ...errorsForm, password2: "Password is empty" });
      return;
    }

    if (
      validateName(registerData.name, (e: string) =>
        setErrorsForm({ ...errorsForm, name: e })
      ) &&
      validateEmail(registerData.email, (e: string) =>
        setErrorsForm({ ...errorsForm, email: e })
      ) &&
      validatePassword(registerData.password1, (e: string) =>
        setErrorsForm({ ...errorsForm, password1: e })
      ) &&
      validatePassword2(
        registerData.password1,
        registerData.password2,
        (e: string) => setErrorsForm({ ...errorsForm, password2: e })
      )
    ) {
      console.log("envia pra api");
    }
  };

  return (
    <>
      {/* <Logo /> */}
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
            value={registerData.name}
            placeholder="Ex: John Doe"
            className={
              errorsForm.name &&
              "border border-red-500 focus:ring-1 focus:ring-red-500"
            }
            error={errorsForm.name}
            handleChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            value={registerData.email}
            placeholder="Ex: john@gmail.com"
            className={
              errorsForm.email &&
              "border border-red-500 focus:ring-1 focus:ring-red-500"
            }
            error={errorsForm.email}
            handleChange={handleChange}
          />
          <div className="sm:flex gap-1">
            <Input
              label="Password"
              type="password"
              name="password1"
              value={registerData.password1}
              placeholder="Password"
              className={
                errorsForm.password1 &&
                "border border-red-500 focus:ring-1 focus:ring-red-500"
              }
              error={errorsForm.password1}
              handleChange={handleChange}
            />
            <Input
              label="Password"
              type="password"
              name="password2"
              value={registerData.password2}
              placeholder="Password"
              className={
                errorsForm.password2 &&
                "border border-red-500 focus:ring-1 focus:ring-red-500"
              }
              error={errorsForm.password2}
              handleChange={handleChange}
            />
          </div>
          <div className="text-end">
            <LinkSimple name="Forgot Password" route="/reset-password" />
          </div>
          <FormButton name="Register" />
        </Form>
      </div>
    </>
  );
}
