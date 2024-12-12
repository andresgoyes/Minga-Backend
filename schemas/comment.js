import joi from "joi-oid";
import objectId from 'joi-objectid';
joi.objectId = objectId(joi);

const schema = joi.object({
    chapter_id: joi
        .objectId()
        .required()
        .messages({
            'string.empty': 'A chapter ID is required',
            'any.required': 'A chapter ID is required',
            'invalid': 'chapterid_ must be a valid ObjectId'
        }),

    author_id: joi
        .objectId()
        .allow(null)
        .messages({
            "invalid": "author_id must be a valid ObjectId",
        }),

    company_id: joi
        .objectId()
        .allow(null)
        .messages({
            "invalid": "company_id must be a valid ObjectId",
        }),

    message: joi
        .string()
        .min(1)
        .max(500)
        .required()
        .messages({
            'string.base': 'The message must be a string',
            'string.min': 'The message must be at least 1 character long',
            'string.max': 'The message must be no more than 500 characters long',
            'string.empty': 'A message is required',
            'any.required': 'A message is required'
        }),
});

export default schema;