import joi from "joi-oid";
import objectId from 'joi-objectid';
joi.objectId = objectId(joi);

const schema = joi.object({

    name: joi
        .string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': 'The name must be a string',
            'string.min': 'The name must be at least 3 characters long',
            'string.max': 'The name must be no more than 30 characters long',
            'string.empty': 'A name is required',
            'any.required': 'A name is required'
        }),

    last_name: joi
        .string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': 'The last name must be a string',
            'string.min': 'The last name must be at least 3 characters long',
            'string.max': 'The last name must be no more than 30 characters long',
            'string.empty': 'A last name is required',
            'any.required': 'A last name is required'
        }),

    city: joi
        .string()
        .min(3)
        .max(30)
        .messages({
            'string.base': 'A city is required',
            'string.min': 'The city must be at least 5 characters long',
            'string.max': 'The city must be 30 characters long max',
            'string.empty': 'A city is required',
            'any.required': 'A city is required'
        }),

    country: joi
        .string()
        .min(5)
        .max(30)
        .messages({
            'string.base': 'A city is required',
            'string.min': 'The country must be at least 5 characters long',
            'string.max': 'The country must be 30 characters long max',
            'string.empty': 'A country is required',
            'any.required': 'A country is required'
        }),

    date: joi
        .date()
        .allow(null)
        .optional()
        .messages({
            'date.base': '"date" must be a valid date',
        })
    ,

    photo: joi
        .string()
        .uri()
        .messages(
            {
                'string.empty': 'The photo field cannot be empty',
                'any.required': 'A photo is required',
                'string.uri': 'A valid URL is necessary for the cover photo'
            }),

    user_id: joi
        .objectId()
        .messages({
            'invalid': 'user_id is not an objectId'
        }),

    active: joi
        .boolean()

})

export default schema