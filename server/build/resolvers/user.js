"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const tslib_1 = require("tslib");
const User_1 = require("../entities/User");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const argon2_1 = (0, tslib_1.__importDefault)(require("argon2"));
const UserMutationResponse_1 = require("../types/UserMutationResponse");
const RegisterInput_1 = require("../types/RegisterInput");
const validateRegister_1 = require("../validators/validateRegister");
const LoginInput_1 = require("../types/LoginInput");
const constants_1 = require("../constants");
let UserResolver = class UserResolver {
    // describe (mutation of graphql) of server graphql for user (status, code , message)
    async register(registerInput, { req }) {
        const { username, email, password } = registerInput;
        const validateRegisterInputError = (0, validateRegister_1.validateRegister)(registerInput);
        if (validateRegisterInputError !== null)
            return {
                code: 400,
                success: false,
                ...validateRegisterInputError,
            };
        try {
            const existingUser = await User_1.User.findOne({
                //find username or email => find true
                where: [{ username }, { email }],
            });
            if (existingUser) {
                return {
                    code: 400,
                    success: false,
                    message: "Duplicate username or email",
                    errors: [
                        {
                            field: existingUser.username === username ? "username" : "email",
                            message: (existingUser.username === username ? `username` : `email`) +
                                "  already taken",
                        },
                    ],
                };
            }
            const hashedPass = await argon2_1.default.hash(password);
            const newUser = User_1.User.create({
                username,
                password: hashedPass,
                email,
            });
            // save user in PostgresDB
            await User_1.User.save(newUser);
            req.session.userId = newUser.id;
            return {
                code: 200,
                success: true,
                message: "User registration successful",
                user: newUser,
            };
        }
        catch (error) {
            console.log(error);
            return {
                code: 500,
                success: false,
                message: `Internal server error ${error.message}`,
            };
        }
    }
    async login(loginInput, { req }) {
        const { usernameOrEmail, password } = loginInput;
        try {
            const existingUser = await User_1.User.findOne(usernameOrEmail.includes("@")
                ? { email: usernameOrEmail }
                : { username: usernameOrEmail });
            // console.log(usernameOrEmail, password, 1, await User.find());
            if (!existingUser)
                return {
                    code: 400,
                    success: false,
                    message: `usernameOrEmail  invalid`,
                };
            //Create Session and Cookie
            // console.log(req.session);
            //verify password in database
            const verifyPass = await argon2_1.default.verify(existingUser.password, password);
            if (!verifyPass)
                return {
                    code: 400,
                    success: false,
                    message: `password  invalid`,
                };
            req.session.userId = existingUser.id;
            console.log(req.session);
            return {
                code: 200,
                success: true,
                message: "success",
                user: existingUser,
            };
        }
        catch (error) {
            console.log(error);
            return {
                code: 500,
                success: false,
                message: `interval server `,
            };
        }
    }
    async logout({ req, res }) {
        return new Promise((resolve, _rejects) => {
            res.clearCookie(constants_1.COOKIE_NAME);
            req.session.destroy((error) => {
                if (error) {
                    console.log(error);
                    resolve(false);
                }
                resolve(true);
            });
        });
    }
};
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Mutation)((_returns) => UserMutationResponse_1.UserMutationResponse),
    (0, tslib_1.__param)(0, (0, type_graphql_1.Arg)("registerInput")),
    (0, tslib_1.__param)(1, (0, type_graphql_1.Ctx)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [RegisterInput_1.RegisterInput, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserResolver.prototype, "register", null);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Mutation)((_returns) => UserMutationResponse_1.UserMutationResponse),
    (0, tslib_1.__param)(0, (0, type_graphql_1.Arg)("loginInput")),
    (0, tslib_1.__param)(1, (0, type_graphql_1.Ctx)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [LoginInput_1.LoginInput, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserResolver.prototype, "login", null);
(0, tslib_1.__decorate)([
    (0, type_graphql_1.Mutation)((_returns) => Boolean),
    (0, tslib_1.__param)(0, (0, type_graphql_1.Ctx)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UserResolver.prototype, "logout", null);
UserResolver = (0, tslib_1.__decorate)([
    (0, typeorm_1.Entity)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.js.map