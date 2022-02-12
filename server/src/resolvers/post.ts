import { Arg, ID, Mutation, Query, UseMiddleware } from "type-graphql";
import { Entity } from "typeorm";
import { PostMutationResponse } from "../types/PostMutationResponse";
import { CreatePostInput } from "../types/CreatePostInput";
import { Post } from "../entities/Post";
import { UpdatePostInput } from "../types/UpdatePostInput";
import { checkAuth } from "../middleware/checkAuth";

@Entity()
export class PostResolver {
  // describe (mutation of graphql) of server graphql for user (status, code , message)
  @Mutation((_returns) => PostMutationResponse)
  @UseMiddleware(checkAuth)
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

  @Mutation((_return) => PostMutationResponse)
  @UseMiddleware(checkAuth)
  async updatePost(
    @Arg("updatePostInput") { id, title, text }: UpdatePostInput
  ): Promise<PostMutationResponse> {
    try {
      const existingPost = await Post.findOne(id);
      if (!existingPost) {
        return {
          message: `Post notfound id : ${id}`,
          code: 300,
          success: false,
        };
      }
      existingPost.title = title;
      existingPost.text = text;
      existingPost.save();

      return {
        message: `Post updated successfully`,
        code: 200,
        success: true,
        post: existingPost,
      };
    } catch (error) {
      return {
        code: 500,
        message: `Internal server error ${error.message}`,
        success: false,
      };
    }
  }

  @Mutation((_return) => PostMutationResponse)
  @UseMiddleware(checkAuth)
  async deletePost(
    @Arg("id", (_type) => ID) id: number
  ): Promise<PostMutationResponse> {
    try {
      const existingPost = await Post.findOne(id);
      if (!existingPost) {
        return {
          code: 300,
          success: false,
          message: `Post NotFound id ${id}`,
        };
      }
      await Post.delete({ id });
      return {
        code: 200,
        success: true,
        message: `Post delete id ${id}`,
      };
    } catch (error) {
      console.log(error);
      return {
        code: 500,
        success: false,
        message: `Internal server error ${error.message}}`,
      };
    }
  }
}
