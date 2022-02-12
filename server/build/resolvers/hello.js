"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloResolver = void 0;
const tslib_1 = require("tslib");
const type_graphql_1 = require("type-graphql");
let HelloResolver = class HelloResolver {
    hello({ req }) {
        console.log(req.session);
        return `hello world`;
    }
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Query)((_returns) => String),
    (0, tslib_1.__param)(0, (0, type_graphql_1.Ctx)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], HelloResolver.prototype, "hello", null);
HelloResolver = (0, tslib_1.__decorate)([
    (0, type_graphql_1.Resolver)()
], HelloResolver);
exports.HelloResolver = HelloResolver;
//# sourceMappingURL=hello.js.map