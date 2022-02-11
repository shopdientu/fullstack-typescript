import { Arg, ID, Mutation, Query } from "type-graphql";
import { Entity } from "typeorm";
import { PostMutationResponse } from "../types/PostMutationResponse";
import { CreatePostInput } from "../types/CreatePostInput";
import { Post } from "../entities/Post";
// import { emailValidator } from "../validators/input";

@Entity()
export class PostResolver {
  // describe (mutation of graphql) of server graphql for user (status, code , message)
  @Mutation((_returns) => PostMutationResponse)
  async createPost(
    @Arg("createPostInput") { title, text }: CreatePostInput
  ): Promise<PostMutationResponse> {
    try {
      const newPost = Post.create({ title, text });
      await newPost.save();
      return {
        code: 200,
        message: "Post created successfully",
        success: true,
        post: newPost,
      };
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        message: `Internal server error ${error.message}`,
        success: false,
      };
    }
  }

  @Query((_return) => [Post])
  async posts(): Promise<Post[]> {
    const posts = await Post.find();
    return posts;
  }

  @Query((_return) => Post, { nullable: true })
  async post(@Arg("id", (_type) => ID) id: number): Promise<Post | undefined> {
    const post = await Post.findOne(id);
    return post;
  }
}
