const { body, validationResult } = require('express-validator')

const rules = () => {
    return [
        body('name', 'Name is requied').not().isEmpty(),
        body('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
        body('password', 'Password must be 6 or more characters').isLength({ min: 6 })
    ];
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
        errors: extractedErrors,
    })
}

module.exports = {
    rules,
    validate,
}

// https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go

