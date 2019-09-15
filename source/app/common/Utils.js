export const forEachPropertyOfObject = (obj, lambda) => 
    Object.keys(obj).map(lambda)