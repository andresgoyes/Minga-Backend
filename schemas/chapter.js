import joi from "joi-oid";
import objectId from 'joi-objectid';
joi.objectId = objectId(joi);

const schema = joi.object({
    manga_id: joi
        .objectId()
        .required()
        .messages({
            'string.empty': 'A manga ID is required',
            'any.required': 'A manga ID is required',
            'invalid': 'manga_id must be a valid ObjectId'
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
            'string.uri': 'A valid URL is necessary for the cover photo'
        }),

    pages: joi
        .array()
        .items(
            joi.string()
                .uri()
                .required()
                .messages({
                    'string.empty': 'Each page URL cannot be empty',
                    'string.uri': 'Each page must be a valid URL'
                })
        )
        .min(1)
        .required()
        .messages({
            'array.base': 'Pages must be an array of URLs',
            'array.min': 'At least one page is required',
            'any.required': 'Pages are required'
        }),

    order: joi
        .number()
        .integer()
        .positive()
        .required()
        .messages({
            'number.base': 'The order must be a number',
            'number.integer': 'The order must be an integer',
            'number.positive': 'The order must be a positive number',
            'any.required': 'An order is required'
        })
});

export default schema;