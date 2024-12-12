const validator = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.body, { abortEarly: false })
        if (validation.error) {
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(error => error.message)
            })
        }
        return next();
    }
]

const validatorParams = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.params, {
            abortEarly: false,
        })
    
        if (validation.error) {
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(detail => detail.message)
            })
        }
        return next();
    }
]
export { validator, validatorParams }