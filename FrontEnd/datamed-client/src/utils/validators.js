export const validateRequestField = (values, fields) => {
    const errors = fields.reduce((errors, field) => {
        if (!values[field]) {
            errors[field] = "This field is required!"
        }

        return errors
    }, {})

    return errors;
}

export const validateEmail = (values, fields) => {
    const errors = fields.reduce((errors, field) => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[field])) {
            errors[field] = 'Invalid email address!';
        }
        return errors
    }, {})

    return errors;
}

export const validateLength = (values, fields) => {
    const errors = fields.reduce((errors, field) => {
        if (field.maxLength && field.minLength && (values[field.value].length > field.maxLength || values[field.value].length < field.minLength)) {
            errors[field.value] = `Field length must be between ${field.minLength} and ${field.maxLength}`;
        } else if (field.maxLength && values[field.value].length > field.maxLength) {
            errors[field.value] = `Field length must be maximum ${field.maxLength}`;
        } else if (field.minLength && values[field.value].length < field.minLength) {
            errors[field.value] = `Field length must be minimum ${field.minLength}`;
        }

        return errors;
    }, {})

    return errors;
}
//shamelessly stolen validators from borko, love u bochko <3
