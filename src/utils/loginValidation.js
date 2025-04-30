export const loginValidation = (UserName, email, password, signIn) => {
  if (!signIn) {
    const userNameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(UserName);
    if (!userNameRegex) {
      return {
        error: "Invalid userName",
        conditions: [
          "The first character must be a letter",
          "the username can contain: Letters, Numbers or Underscores(_)",
          "username must be between 8 to 30 characters",
        ],
      };
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!emailRegex) {
    return {
      error: "Invalid Email",
      conditions: [],
    };
  }

  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!passwordRegex) {
    return {
      error: "Invalid Password",
      conditions: [
        "Password must be at least 8 characters long.",
        "The string must contain:",
        "At least one digit (0-9).",
        "At least one lowercase letter (a-z).",
        "At least one uppercase letter (A-Z).",
      ],
    };
  }

  return null;
};
