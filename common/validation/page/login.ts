import {EMAIL, FORMAT_EMAIL, MIN_PASSWORD, PASSWORD} from "@/common/validation/types";
import {validation} from "@/common/validation/validation";

export const Validation = {
    email: {
        ...validation.required(EMAIL),
        ...validation.pattern(FORMAT_EMAIL)
    },
    password: {
        ...validation.required(PASSWORD),
        ...validation.minLength(MIN_PASSWORD)
    }
};