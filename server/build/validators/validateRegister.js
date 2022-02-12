"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
const input_1 = require("./input");
const validateRegister = (input) => {
    const { email, username, password } = input;
    if (!(0, input_1.inputValidator)(username))
        return {
            errors: [
                {
                    field: "username",
                    message: `username harboring Special Character`,
                },
            ],
            message: `invalid username`,
        };
    if (!(0, input_1.minValidator)(password, 6))
        return {
            errors: [
                {
                    field: "password",
                    message: `password less than 6 charters`,
                },
            ],
            message: `invalid password`,
        };
    if (!(0, input_1.emailValidator)(email))
        return {
            errors: [
                {
                    field: "email",
                    message: `username harboring Special Character`,
                },
            ],
            message: `invalid email`,
        };
    if (!(0, input_1.maxValidator)(username, 12))
        return {
            errors: [
                {
                    field: "username",
                    message: `username more than 12 charters`,
                },
            ],
            message: `invalid username`,
        };
    return null;
};
exports.validateRegister = validateRegister;
//# sourceMappingURL=validateRegister.js.map