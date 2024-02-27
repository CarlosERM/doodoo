import style from "./button.module.css";

export function Button({ name }: { name: string }) {
  return <input className={style.form_button} type="submit" value={name} />;
}
