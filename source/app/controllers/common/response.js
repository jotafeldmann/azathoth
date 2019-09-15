const response = ({ data, error }) => ({
    data,
    error
})

export const successResponse = ({ data }) => response ({ data })

export const errorResponse = ({ code, message, details }) => response ({
    error: {
        code,
        message,
        details,
    }
})