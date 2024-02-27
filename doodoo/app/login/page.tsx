import style from "./page.module.css";

export default function Login() {
  return (
    <>
      <form className={style.form} action="">
        <h2 className={style.form_title}>Login</h2>
        <div>
          <label htmlFor="email">Email: </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input name="password" type="password" />
        </div>
      </form>
    </>
  );
}
