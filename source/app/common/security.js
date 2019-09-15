import { omit } from 'lodash'

export const removeSensitiveFieldFromObject = 
    (listSensitiveFields = ['password'], obj = {}) =>
        omit(obj, listSensitiveFields)