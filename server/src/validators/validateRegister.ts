import { RegisterInput } from "../types/RegisterInput";
import {
  emailValidator,
  inputValidator,
  minValidator,
  maxValidator,
} from "./input";

export const validateRegister = (input: RegisterInput) => {
  const { email, username, password } = input;
  if (!inputValidator(username))
    return {
      errors: [
        {
          field: "username",
          message: `username harboring Special Character`,
        },
      ],
      message: `invalid username`,
    };

  if (!minValidator(password, 6))
    return {
      errors: [
        {
          field: "password",
          message: `password less than 6 charters`,
        },
      ],
      message: `invalid password`,
    };

  if (!emailValidator(email))
    return {
      errors: [
        {
          field: "email",
          message: `username harboring Special Character`,
        },
      ],
      message: `invalid email`,
    };

  if (!maxValidator(username, 12))
    return {
      errors: [
        {
          field: "username",
          message: `username more than 12 charters`,
        },
      ],
      message: `invalid username`,
    };

  return null;
};
