import joi from "joi-oid";
import objectId from 'joi-objectid';
joi.objectId = objectId(joi);

const schema = joi.object({
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

    title: joi
        .string()
        .min(3)
        .max(100)
        .required()
        .messages({
            'string.base': 'The title must be a string',
            'string.min': 'The title must be at least 3 characters long',
            'string.max': 'The title must be no more than 100 characters long',
            'string.empty': 'A title is required',
            'any.required': 'A title is required'
        }),

    cover_photo: joi
        .string()
        .uri()
        .required()
        .messages({
            'string.empty': 'The cover photo URL cannot be empty',
            'any.required': 'A cover photo is required',
            'string.uri': 'The cover photo must be a valid URL'
        }),

    description: joi
        .string()
        .min(10)
        .max(500)
        .required()
        .messages({
            'string.base': 'The description must be a string',
            'string.min': 'The description must be at least 10 characters long',
            'string.max': 'The description must be no more than 500 characters long',
            'string.empty': 'A description is required',
            'any.required': 'A description is required'
        }),

    category_id: joi
        .objectId()
        .required()
        .messages({
            'string.empty': 'A category ID is required',
            'any.required': 'A category ID is required',
            'invalid': 'category_id must be a valid ObjectId'
        })
});

export default schema;