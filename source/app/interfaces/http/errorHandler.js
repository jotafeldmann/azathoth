import { EXPECTED_ERROR_CODE_ENUM } from '../../common/ExpectedError'
import { HTTP_STATUS_CODE_ENUM } from './constants'

const MAP_EXPECTED_ERROR_TO_HTTP_STATUS_CODE = Object.freeze({
    [EXPECTED_ERROR_CODE_ENUM.VALIDATION_ERROR]: HTTP_STATUS_CODE_ENUM.BAD_REQUEST,
    [EXPECTED_ERROR_CODE_ENUM.NOT_FOUND]: HTTP_STATUS_CODE_ENUM.NOT_FOUND,
})

export const errorHandler = ({ httpResponseInstance, error, defaultStatusCode }) => {
    const { code } = error
    const codeToSend = MAP_EXPECTED_ERROR_TO_HTTP_STATUS_CODE[code] || defaultStatusCode
    return httpResponseInstance.status(codeToSend).send({ error })
}
