export const createMeetingValidation = values => {
    const errors = {};
    const requiredFields = ["title","description"];
    const minimumLengthFields = [
        {field:"title", length:5},
        {field:"description", length:11},
    ];

    requiredFields.forEach(field => {
        if (!values[field])
            errors[field] = "Required";
    });

    minimumLengthFields.forEach(({field, length}) => {
        if (values[field] && values[field].length < length)
            errors[field] = `Must be at least ${length} caracters long`;
    });

    return errors;
};