export class ExpectedError extends Error {
    constructor(code, message, details) {
        super(message)
        this.code = code
        this.message = message
        this.details = details
    }
}

export const EXPECTED_ERROR_CODE_ENUM = Object.freeze({
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    NOT_FOUND: 'NOT_FOUND',
    INPUT_ERROR: 'INPUT_ERROR',
})
