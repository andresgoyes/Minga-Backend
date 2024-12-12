import joi from "joi";

const userSchema = joi.object({
    email: joi
        .string()
        .email()
        .required()
        .messages({
            'string.base': 'The email must be a string',
            'string.email': 'The email must be a valid email address',
            'string.empty': 'An email is required',
            'any.required': 'An email is required'
        }),

    password: joi
        .string()
        .min(8)
        .max(128)
        .required()
        .messages({
            'string.base': 'The password must be a string',
            'string.min': 'The password must be at least 8 characters long',
            'string.max': 'The password must be no more than 128 characters long',
            'string.empty': 'A password is required',
            'any.required': 'A password is required'
        }),

    photo: joi
        .string()
        .uri()
        .required()
        .messages({
            'string.empty': 'A photo URL is required',
            'any.required': 'A photo URL is required',
            'string.uri': 'The photo must be a valid URL'
        }),

    role: joi
        .number()
        .integer()
        .valid(0, 1, 2, 3) // 0: User, 1: Author, 2: Companie, 3: Admin
        .default(0)
        .messages({
            'number.base': 'The role must be a number',
            'any.only': 'The role must be one of the following values: 0 (User), 1 (Author), 2 (Companie), 3 (Admin)'
        }),

    online: joi
        .boolean()
        .default(true)
        .messages({
            'boolean.base': 'The online status must be true or false',
        }),
    is_active: joi
        .boolean()
        .default(true)
        .messages({
            'boolean.base': 'Is active status must be true or false',
        }),
});

export default userSchema;