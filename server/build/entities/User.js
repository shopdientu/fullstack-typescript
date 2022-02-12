"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let User = class User extends typeorm_1.BaseEntity {
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, tslib_1.__metadata)("design:type", Number)
], User.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => String),
    (0, typeorm_1.Column)({ unique: true }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "username", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)((_type) => String),
    (0, typeorm_1.Column)({ unique: true }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0, tslib_1.__decorate)([
    (0, typeorm_1.Column)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "password", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    (0, tslib_1.__metadata)("design:type", Date)
], User.prototype, "createAt", void 0);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    (0, tslib_1.__metadata)("design:type", Date)
], User.prototype, "updateAt", void 0);
User = (0, tslib_1.__decorate)([
    (0, type_graphql_1.ObjectType)() // return data DB => app
    ,
    (0, typeorm_1.Entity)() //create table
], User);
exports.User = User;
//# sourceMappingURL=User.js.map