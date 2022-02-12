"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResolver = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const PostMutationResponse_1 = require("../types/PostMutationResponse");
const CreatePostInput_1 = require("../types/CreatePostInput");
const Post_1 = require("../entities/Post");
const UpdatePostInput_1 = require("../types/UpdatePostInput");
const checkAuth_1 = require("../middleware/checkAuth");
let PostResolver = class PostResolver {
    // describe (mutation of graphql) of server graphql for user (status, code , message)
    async createPost({ title, text }) {
        try {
            const newPost = Post_1.Post.create({ title, text });
            await newPost.save();
            return {
                code: 200,
                message: "Post created successfully",
                success: true,
                post: newPost,
            };
        }
        catch (error) {
            console.log(error);
            return {
                code: 500,
                message: `Internal server error ${error.message}`,
                success: false,
            };
        }
    }
    async posts() {
        const posts = await Post_1.Post.find();
        return posts;
    }
    async post(id) {
        const post = await Post_1.Post.findOne(id);
        return post;
    }
    async updatePost({ id, title, text }) {
        try {
            const existingPost = await Post_1.Post.findOne(id);
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
        }
        catch (error) {
            return {
                code: 500,
                message: `Internal server error ${error.message}`,
                success: false,
            };
        }
    }
    async deletePost(id) {
        try {
            const existingPost = await Post_1.Post.findOne(id);
            if (!existingPost) {
                return {
                    code: 300,
                    success: false,
                    message: `Post NotFound id ${id}`,
                };
            }
            await Post_1.Post.delete({ id });
            return {
                code: 200,
                success: true,
                message: `Post delete id ${id}`,
            };
        }
        catch (error) {
            console.log(error);
            return {
                code: 500,
                success: false,
                message: `Internal server error ${error.message}}`,
            };
        }
    }
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Mutation)((_returns) => PostMutationResponse_1.PostMutationResponse),
    (0, type_graphql_1.UseMiddleware)(checkAuth_1.checkAuth),
    (0, tslib_1.__param)(0, (0, type_graphql_1.Arg)("createPostInput")),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [CreatePostInput_1.CreatePostInput]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Query)((_return) => [Post_1.Post]),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostResolver.prototype, "posts", null);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Query)((_return) => Post_1.Post, { nullable: true }),
    (0, tslib_1.__param)(0, (0, type_graphql_1.Arg)("id", (_type) => type_graphql_1.ID)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostResolver.prototype, "post", null);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Mutation)((_return) => PostMutationResponse_1.PostMutationResponse),
    (0, type_graphql_1.UseMiddleware)(checkAuth_1.checkAuth),
    (0, tslib_1.__param)(0, (0, type_graphql_1.Arg)("updatePostInput")),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [UpdatePostInput_1.UpdatePostInput]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostResolver.prototype, "updatePost", null);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Mutation)((_return) => PostMutationResponse_1.PostMutationResponse),
    (0, type_graphql_1.UseMiddleware)(checkAuth_1.checkAuth),
    (0, tslib_1.__param)(0, (0, type_graphql_1.Arg)("id", (_type) => type_graphql_1.ID)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PostResolver.prototype, "deletePost", null);
PostResolver = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], PostResolver);
exports.PostResolver = PostResolver;
//# sourceMappingURL=post.js.map