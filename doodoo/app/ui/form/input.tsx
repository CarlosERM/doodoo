"use client";
import { useState } from "react";
import EyeClosed from "./eye-closed";
import EyeOpen from "./eye-open";

export default function Input({
  label,
  placeholder,
  type,
  name,
  value,
  className,
  error,
  handleChange,
}: {
  label: string;
  placeholder: string;
  type: string;
  name?: string | undefined;
  value: string;
  className: string;
  error?: string | undefined;
  handleChange: (target: HTMLInputElement) => void;
}) {
  const [see, setSee] = useState<boolean>(false);

  const handleToggle = () => {
    setSee(!see);
  };
  return (
    <div className="flex flex-col	relative">
      <label htmlFor={type} className="block text-base font-medium mb-1">
        {label}
      </label>
      <input
        className={`focus:outline-none focus:ring-c1 focus:ring-2 ${className} p-2.5 rounded-lg bg-c2 placeholder:text-c10 mb-6 w-full`}
        type={see ? "text" : type}
        name={name ? name : type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target)}
      />
      {see
        ? type === "password" && <EyeClosed handleToggle={handleToggle} />
        : type === "password" && <EyeOpen handleToggle={handleToggle} />}
      {error && (
        <p className="absolute text-red-500 text-sm mb-3 bottom-[-0.75rem]  left-0">
          {error}
        </p>
      )}
    </div>
  );
}
