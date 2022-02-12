"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMutationResponse = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const MutationResponse_1 = require("./MutationResponse");
const FieldError_1 = require("./FieldError");
const Post_1 = require("../entities/Post");
let PostMutationResponse = class PostMutationResponse {
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => Post_1.Post, { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Post_1.Post)
], PostMutationResponse.prototype, "post", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => [FieldError_1.FieldError], { nullable: true }),
    (0, tslib_1.__metadata)("design:type", Array)
], PostMutationResponse.prototype, "errors", void 0);
PostMutationResponse = (0, tslib_1.__decorate)([
    (0, type_graphql_1.ObjectType)({ implements: MutationResponse_1.IMutationResponse })
], PostMutationResponse);
exports.PostMutationResponse = PostMutationResponse;
//# sourceMappingURL=PostMutationResponse.js.map