"use client";
export default function Input({
  label,
  placeholder,
  type,
  name,
  value,
  className,
  handleChange,
}: {
  label: string;
  placeholder: string;
  type: string;
  name?: string | undefined;
  value: string;
  className: string;

  handleChange: (target: HTMLInputElement) => void;
}) {
  return (
    <>
      <label htmlFor={type} className="block text-base font-medium mb-1">
        {label}
      </label>
      <input
        className={`focus:outline-none focus:ring-c1 focus:ring-2 ${className} p-2.5 rounded-lg bg-c2 placeholder:text-c10 mb-3`}
        type={type}
        name={name ? name : type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target)}
      />
    </>
  );
}
