const checkPassword = (password) => {
  const uppercase = /[A-Z]/;
  const lowercase = /[a-z]/;
  const number = /[0-9]/;
  const special = /[^A-Za-z0-9]/;
  const minLength = 8;
  const maxLength = 20;

  if (typeof password !== "string") {
    return "Password must be a string";
  }

  if (password.length < minLength) {
    return "Password must be at least 8 characters long";
  }
  if (password.length > maxLength) {
    return "Password must be at most 20 characters long";
  }
  if (!uppercase.test(password)) {
    return "Password must contain at least one uppercase letter";
  }
  if (!lowercase.test(password)) {
    return "Password must contain at least one lowercase letter";
  }
  if (!number.test(password)) {
    return "Password must contain at least one number";
  }
  if (!special.test(password)) {
    return "Password must contain at least one special character";
  }

  return true;
};

module.exports = checkPassword;
