export function createProps(schemas) {
    const validators = {};
    for (const [name, schema] of Object.entries(schemas)) {
        validators[name] = {
            validator: (value) => {
                return schema.isValid(value);
            },
        };
    }
    return validators;
}
