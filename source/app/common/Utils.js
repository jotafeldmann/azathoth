export const iterateObject = obj => Object.keys(obj)

export const forEachPropertyOfObject = (obj, lambda = {propName, propValue}) => 
iterateObject(obj).map(propName => lambda (propName, obj[propName]))

export const fromListGenerateMap = (listWithObjects) =>
    listWithObjects.reduce((map, obj) => {
        let propName = Object.keys(obj)
        map[propName] = obj[propName]
        return map
    }, {})