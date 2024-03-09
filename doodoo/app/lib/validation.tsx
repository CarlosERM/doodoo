export function validateEmail(email: string, error: (e: string) => void) {
  if (email) {
    const validEmail = email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (!validEmail) {
      error("Your email is wrong");
    } else {
      error("");
    }

    return validEmail;
  } else {
    error("");
    return false;
  }
}

export function validatePassword(password: string, error: (e: string) => void) {
  if (password) {
    const validPassword = password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    );

    if (!validPassword) {
      error("Your password is wrong");
    } else {
      error("");
    }
    return validPassword;
  } else {
    error("");
    return false;
  }
}

export function validatePassword2(
  password1: string,
  password2: string,
  error: (e: string) => void
) {
  if (!password2) {
    error("");
    return false;
  }
  if (password1 != password2) {
    // console.log(password1, password2);
    error("Passwords not equal");
    return false;
  } else {
    error("");
    return true;
  }
}

export function validateName(name: string, error: (e: string) => void) {
  if (name) {
    const validName = name.match(/^[a-zA-Z\-]+$/);

    if (!validName) {
      error("Your name is wrong");
    } else {
      error("");
    }
    return validName;
  } else {
    error("");
    return false;
  }
}
