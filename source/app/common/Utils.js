export const iterateObject = obj => Object.keys(obj)

export const forEachPropertyOfObject = (obj, lambda) => 
iterateObject(obj).map(lambda)