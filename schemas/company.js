import joi from "joi-oid";
import objectId from 'joi-objectid';
joi.objectId = objectId(joi);

const schema = joi.object({
    name: joi
        .string()
        .min(3)
        .max(100)
        .required()
        .messages({
            'string.base': 'The name must be a string',
            'string.min': 'The name must be at least 3 characters long',
            'string.max': 'The name must be no more than 100 characters long',
            'string.empty': 'A name is required',
            'any.required': 'A name is required'
        }),

    website: joi
        .string()
        .uri()
        .allow(null, '')
        .messages({
            'string.uri': 'The website must be a valid URL',
            'string.empty': 'If provided, the website cannot be empty'
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

    photo: joi
        .string()
        .uri()
        .required()
        .messages({
            'string.empty': 'The photo URL cannot be empty',
            'any.required': 'A photo is required',
            'string.uri': 'The photo must be a valid URL'
        }),
        
    user_id: joi
        .objectId()
        .messages({
            'invalid': 'user_id is not an objectId'
        }),

    active: joi
        .boolean()
});

export default schema;