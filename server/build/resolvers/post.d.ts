import { PostMutationResponse } from "../types/PostMutationResponse";
import { CreatePostInput } from "../types/CreatePostInput";
import { Post } from "../entities/Post";
import { UpdatePostInput } from "../types/UpdatePostInput";
export declare class PostResolver {
    createPost({ title, text }: CreatePostInput): Promise<PostMutationResponse>;
    posts(): Promise<Post[]>;
    post(id: number): Promise<Post | undefined>;
    updatePost({ id, title, text }: UpdatePostInput): Promise<PostMutationResponse>;
    deletePost(id: number): Promise<PostMutationResponse>;
}
