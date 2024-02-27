import style from "./link.module.css";

export function Link({ name }: { name: string }) {
  return (
    <a className={style.link} href="#">
      {name}
    </a>
  );
}
