import joi from "joi-oid";
import objectId from 'joi-objectid';
joi.objectId = objectId(joi);

const schema = joi.object({
    manga_id: joi
        .objectId()
        .optional()
        .messages({
            'string.empty': 'A manga ID is required',
            'any.required': 'A manga ID is required',
            'invalid': 'manga_id must be a valid ObjectId'
        }),

    author_id: joi
        .objectId()
        .allow(null)
        .messages({
            'invalid': 'author_id must be a valid ObjectId',
        }),

    company_id: joi
        .objectId()
        .allow(null)
        .messages({
            'invalid': 'company_id must be a valid ObjectId',
        }),

    reaction: joi
        .string()
        .valid('like', 'dislike', 'surprised', 'love')
        .min(1)
        .max(50)
        .required()
        .messages({
            'string.base': 'The reaction must be a string',
            'string.min': 'The reaction must be at least 1 character long',
            'string.max': 'The reaction must be no more than 50 characters long',
            'string.empty': 'A reaction is required',
            'any.required': 'A reaction is required'
        }),
});

export default schema;