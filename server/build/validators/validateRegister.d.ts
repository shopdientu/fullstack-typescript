import { RegisterInput } from "../types/RegisterInput";
export declare const validateRegister: (input: RegisterInput) => {
    errors: {
        field: string;
        message: string;
    }[];
    message: string;
} | null;
