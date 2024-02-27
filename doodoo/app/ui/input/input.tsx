import style from "./input.module.css";
export function Input({
  name,
  type,
  placeholder,
}: {
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className={style.form_label} htmlFor={name}>
        {placeholder}:{" "}
      </label>
      <input
        className={style.form_input}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
