import { User } from "../entities/User";
import { Arg, Ctx, Mutation } from "type-graphql";
import { Entity } from "typeorm";
import argon2 from "argon2";
import { UserMutationResponse } from "../types/UserMutationResponse";
import { RegisterInput } from "../types/RegisterInput";
import { validateRegister } from "../validators/validateRegister";
import { LoginInput } from "../types/LoginInput";
import { Context } from "../types/Context";
import { COOKIE_NAME } from "../constants";
// import { emailValidator } from "../validators/input";

@Entity()
export class UserResolver {
  // describe (mutation of graphql) of server graphql for user (status, code , message)
  @Mutation((_returns) => UserMutationResponse)
  async register(
    @Arg("registerInput") registerInput: RegisterInput,
    @Ctx() { req }: Context
  ): Promise<UserMutationResponse> {
    const { username, email, password } = registerInput;
    const validateRegisterInputError = validateRegister(registerInput);
    if (validateRegisterInputError !== null)
      return {
        code: 400,
        success: false,
        ...validateRegisterInputError,
      };

    try {
      const existingUser = await User.findOne({
        //find username or email => find true
        where: [{ username }, { email }],
      });
      if (existingUser) {
        return {
          code: 400,
          success: false,
          message: "Duplicate username or email",
          errors: [
            {
              field: existingUser.username === username ? "username" : "email",
              message:
                (existingUser.username === username ? `username` : `email`) +
                "  already taken",
            },
          ],
        };
      }

      const hashedPass = await argon2.hash(password);
      const newUser = User.create({
        username,
        password: hashedPass,
        email,
      });

      // save user in PostgresDB
      await User.save(newUser);
      req.session.userId = newUser.id;
      return {
        code: 200,
        success: true,
        message: "User registration successful",
        user: newUser,
      };
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        success: false,
        message: `Internal server error ${error.message}`,
      };
    }
  }

  @Mutation((_returns) => UserMutationResponse)
  async login(
    @Arg("loginInput") loginInput: LoginInput,
    @Ctx() { req }: Context
  ): Promise<UserMutationResponse> {
    const { usernameOrEmail, password } = loginInput;

    try {
      const existingUser = await User.findOne(
        usernameOrEmail.includes("@")
          ? { email: usernameOrEmail }
          : { username: usernameOrEmail }
      );
      // console.log(usernameOrEmail, password, 1, await User.find());
      if (!existingUser)
        return {
          code: 400,
          success: false,
          message: `usernameOrEmail  invalid`,
        };

      //Create Session and Cookie
      // console.log(req.session);

      //verify password in database
      const verifyPass = await argon2.verify(existingUser.password, password);
      if (!verifyPass)
        return {
          code: 400,
          success: false,
          message: `password  invalid`,
        };

      req.session.userId = existingUser.id;
      console.log(req.session);

      return {
        code: 200,
        success: true,
        message: "success",
        user: existingUser,
      };
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        success: false,
        message: `interval server `,
      };
    }
  }

  @Mutation((_returns) => Boolean)
  async logout(@Ctx() { req, res }: Context): Promise<boolean> {
    return new Promise((resolve, _rejects) => {
      res.clearCookie(COOKIE_NAME);
      req.session.destroy((error) => {
        if (error) {
          console.log(error);
          resolve(false);
        }
        resolve(true);
      });
    });
  }
}
