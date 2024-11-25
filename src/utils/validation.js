import Joi from "joi";

const userValidationSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
            'string.base': 'Name should be a string',
            'string.empty': 'Name cannot be empty',
            'string.min': 'Name should be at least 3 characters long',
            'any.required': 'Name is required',
        }),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .messages({
            'string.base': 'Email should be a string',
            'string.empty': 'Email cannot be empty',
            'string.email': 'Email should be a valid email address',
            'any.required': 'Email is required',
        }),
    password: Joi.string()
        .min(6)
        .required()
        .messages({
            'string.base': 'Password should be a combination of letters and numbers that you will not forget',
            'string.empty': 'Password cannot be empty',
            'string.min': 'Password should be at least 6 characters long',
            'any.required': 'Password is required',
        }),
});

export default userValidationSchema;