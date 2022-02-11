import { basicTypes, elidedTypes, emptyTypes, scalarTypes } from './types'
import { ClassDeclaration } from 'ts-morph'

/**
 *
 * @param propertyName
 */
const simpleAssignment = (propertyName) => {
    return `get ${propertyName}() { return this.__${propertyName} }
set ${propertyName}(x) { this.__${propertyName} = x }
set${propertyName}(x) { this.${propertyName} = x; return this }`
}

/**
 * keymapAssignment
 * @param propertyName
 */
const keymapAssignment = (propertyName) => {
    return objectAssignment(propertyName)
}

/**
 * resourceAssignment
 * @param propertyName
 */
const resourceAssignment = (propertyName, propertyType) => {
    return `get ${propertyName}() {  return this.__${propertyName} }
set ${propertyName}(x: ${propertyType} | any) { this.__${propertyName} = this.setPropertyByType(this.__${propertyName}, x, ${propertyType}) }
set${propertyName} (x: ${propertyType} | any) { this.${propertyName} = x; return this }`
}

/**
 * objectAssignment
 * @param propertyName
 */
const objectAssignment = (propertyName) => {
    return `get ${propertyName}() {  return this.__${propertyName} }
set ${propertyName}(x: any | any[]) { this.__${propertyName} = this.setPropertyByType(this.__${propertyName}, x, 'any') }
set${propertyName} (x: any | any[]) { this.${propertyName} = x; return this }`
}

/**
 * arrayAssignment
 * @param propertyName
 */
const arrayAssignment = (propertyName) => {

    return `get ${propertyName}() { return this.__${propertyName} }
set ${propertyName}(x: any | any[]) { this.__${propertyName} = this.setArrayByType(this.__${propertyName}, x, 'any') }
set${propertyName}(x: any | any[]) { this.${propertyName} = x; return this }`
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getType = (property, propertyType) => {
    let type
    let fun = 'setPropertyByType'
    if (propertyType in scalarTypes || propertyType in elidedTypes || propertyType in basicTypes || propertyType in emptyTypes) {
        type = `${propertyType}`
    } else if(property.additionalProperties?.type == 'string') {
        type = 'any'
    } else if (property.type == 'array') {
        type = `${propertyType}`
        fun = 'setArrayByType'
    } else {
        type = `${propertyType}Helper` //Helper`
    }
    return { type, fun }
    // if (propertyType in scalarTypes)
    //     return type
    // else if (Array.isArray(propertyType)) {
    //     return `${type} | ${type}[] | any | any[]`
    // } else {
    //     return `${type} | any`
    // }
    // return type
}

const addGetter = (classObject: ClassDeclaration, propertyName: string, propertyType: string, property: any) => {
    const { type, fun } = getType(property, propertyType)

    classObject.addProperty({
        isStatic: false,
        name: `__${propertyName}`,
        type,
    });
    classObject.getChildSyntaxListOrThrow().addChildText(writer => {
        writer.write(`get ${propertyName}(): ${type}`).block(() => {
            writer.writeLine(`return this.__${propertyName}`);
        });
    });
}

const addSetter = (classObject: ClassDeclaration, propertyName: string, propertyType: string, property: any) => {
    const { type, fun } = getType(property, propertyType)
    classObject.getChildSyntaxListOrThrow().addChildText(writer => {
        writer.write(`set ${propertyName}(x: ${type})`).block(() => {
            writer.writeLine(`this.__${propertyName} = this.${fun}(this.${propertyName}, x, '${type}')`);
        });
    });
}

const addSetSetter = (classObject: ClassDeclaration, propertyName: string, propertyType: string, property: any) => {
    const { type, fun } = getType(property, propertyType)
    const method = classObject.getChildSyntaxListOrThrow().addChildText(writer => {
        writer.write(`set${capitalize(propertyName)}(x: ${type})`).block(() => {
            writer.writeLine(`this.${propertyName} = x; return this`);
        });
    });
}

/**
 *
 * @param templateFile
 * @param templateName
 * @param propertyName
 * @param property
 * @param prop
 */
// TODO: clean up parameters.
export const addHelperMethod = (classObject, templateName, propertyName, property, prop) => {
    // TODO: Decide on how to handle reserved word fields.
    // default and continue are javascript reserved words.
    if (propertyName == 'default') propertyName = 'default_'
    if (propertyName == 'continue') propertyName = 'continue_'
    addGetter(classObject, propertyName, prop.type, property)
    addSetter(classObject, propertyName, prop.type, property)
    addSetSetter(classObject, propertyName, prop.type, property)
    // let method = classObject.addMethod({
    //     isStatic: false,
    //     name: propertyName,
    //     parameters: [{name: propertyName, type: prop.type}],
    //     returnType: `${templateName}Helper`,
    //     description: property.description,
    // })
    // if (property.type in scalarTypes || property.type in elidedTypes ||
    //     property.type in basicTypes || property.type in emptyTypes) {
    //     method.setBodyText(simpleAssignment(propertyName))
    // } else if(property.additionalProperties?.type == 'string') {
    //     method.setBodyText(keymapAssignment(propertyName))
    // } else if (property.type == 'object' || property.type == undefined) {
    //     method.setBodyText(objectAssignment(propertyName))
    // } else if (property.type == 'array') {
    //     method.setBodyText(arrayAssignment(propertyName))
    // } else {
    //     // console.log(property.type)
    // }
    // return method
}
