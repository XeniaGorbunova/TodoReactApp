export const getMessageFromError = (error: unknown) => {
    if (error instanceof Error) {
        return error.message;
    }

    return '';
}

export const getEnvVariable = (key: string) => {
    const value = import.meta.env[key];

    if (value === undefined) throw new Error(`Env variable ${key} is required`)

    return value;
}