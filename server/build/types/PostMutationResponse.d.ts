import { IMutationResponse } from "./MutationResponse";
import { FieldError } from "./FieldError";
import { Post } from "../entities/Post";
export declare class PostMutationResponse implements IMutationResponse {
    code: number;
    success: boolean;
    message?: string;
    post?: Post;
    errors?: FieldError[];
}
