import { UserMutationResponse } from "../types/UserMutationResponse";
import { RegisterInput } from "../types/RegisterInput";
import { LoginInput } from "../types/LoginInput";
import { Context } from "../types/Context";
export declare class UserResolver {
    register(registerInput: RegisterInput, { req }: Context): Promise<UserMutationResponse>;
    login(loginInput: LoginInput, { req }: Context): Promise<UserMutationResponse>;
    logout({ req, res }: Context): Promise<boolean>;
}
