import { User } from "../entities/User";
import { IMutationResponse } from "./MutationResponse";
import { FieldError } from "./FieldError";
export declare class UserMutationResponse implements IMutationResponse {
    code: number;
    success: boolean;
    message?: string;
    user?: User;
    errors?: FieldError[];
}
