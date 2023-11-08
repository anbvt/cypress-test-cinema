import {
    ADDRESS,
    EMAIL,
    FORMAT_EMAIL,
    FORMAT_PHONE,
    GENDER,
    MAX_PASSWORD,
    MAX_PHONE,
    MIN_PASSWORD,
    MIN_PHONE,
    NAME,
    PASSWORD,
    PHONE
} from '@/common/validation/types';
import { validation } from '@/common/validation/validation';

export const Validation = {
    name: {
        ...validation.required(NAME),
    },
    gender: {
        ...validation.required(GENDER),
    },
    email: {
        ...validation.required(EMAIL),
        ...validation.pattern(FORMAT_EMAIL)
    },
    phone: {
        ...validation.required(PHONE),
        ...validation.pattern(FORMAT_PHONE),
        ...validation.minLength(MIN_PHONE),
        ...validation.maxLength(MAX_PHONE)
    },
    address: {
        ...validation.required(ADDRESS),
    },
    password: {
        ...validation.required(PASSWORD),
        ...validation.maxLength(MAX_PASSWORD),
        ...validation.minLength(MIN_PASSWORD)
    }
}