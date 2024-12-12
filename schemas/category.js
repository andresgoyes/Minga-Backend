import joi from "joi-oid";
import objectId from 'joi-objectid';
joi.objectId = objectId(joi);

const schema = joi.object({
    name: joi
        .string()
        .min(3)
        .max(50)
        .required()
        .messages({
            'string.base': 'The name must be a string',
            'string.min': 'The name must be at least 3 characters long',
            'string.max': 'The name must be no more than 50 characters long',
            'string.empty': 'A name is required',
            'any.required': 'A name is required'
        }),

    color: joi
        .string()
        .pattern(/^#[0-9A-F]{6}$/i)
        .optional()
        .messages({
            'string.base': 'The color must be a valid hex color code',
            'string.empty': 'A color is required',
            'any.required': 'A color is required',
            'string.pattern.base': 'The color must be a valid hex color code (e.g., #FFFFFF)'
        }),

    hover: joi
        .string()
        .pattern(/^#[0-9A-F]{6}$/i)
        .optional()
        .messages({
            'string.base': 'The hover must be a valid hex color code',
            'string.empty': 'A hover color is required',
            'any.required': 'A hover color is required',
            'string.pattern.base': 'The hover color must be a valid hex color code (e.g., #FFFFFF)'
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

    cover_photo: joi
        .string()
        .uri()
        .optional()
        .messages({
            'string.empty': 'The cover photo URL cannot be empty',
            'any.required': 'A cover photo is required',
            'string.uri': 'A valid URL is necessary for the cover photo'
        }),

    character_photo: joi
        .string()
        .uri()
        .optional()
        .messages({
            'string.empty': 'The character photo URL cannot be empty',
            'any.required': 'A character photo is required',
            'string.uri': 'A valid URL is necessary for the character photo'
        }),

    admin_id: joi
        .objectId()
        .messages({
            'invalid': 'user_id is not an objectId'
        }),
});

export default schema