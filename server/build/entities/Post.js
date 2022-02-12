"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let Post = class Post extends typeorm_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Post.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => String),
    (0, typeorm_1.Column)({ unique: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Post.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => String),
    (0, typeorm_1.Column)({ unique: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Post.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    (0, tslib_1.__metadata)("design:type", Date)
], Post.prototype, "createAt", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    (0, tslib_1.__metadata)("design:type", Date)
], Post.prototype, "updateAt", void 0);
Post = (0, tslib_1.__decorate)([
    (0, type_graphql_1.ObjectType)() // return data DB => app
    ,
    (0, typeorm_1.Entity)() //create table
], Post);
exports.Post = Post;
//# sourceMappingURL=Post.js.map