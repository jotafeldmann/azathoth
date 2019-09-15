export const iterateObject = obj => Object.keys(obj)

export const forEachPropertyOfObject = (obj, lambda = {propName, propValue}) => 
iterateObject(obj).map(propName => lambda (propName, obj[propName]))