import { basicTypes, elidedTypes, emptyTypes, scalarTypes } from './types'
import { ClassDeclaration } from 'ts-morph'

/**
 *
 * @param propertyName
 */
const simpleAssignment = (propertyName) => {
    return `this._template.${propertyName} = ${propertyName}
return this`
}

/**
 * keymapAssignment
 * @param propertyName
 */
const keymapAssignment = (propertyName) => {
    return `if (!this._template.${propertyName}) this._template.${propertyName} = []
this._template.${propertyName} = {
    ...this._template.${propertyName},
    ...${propertyName}
}
return this`
}

/**
 * resourceAssignment
 * @param propertyName
 */
const resourceAssignment = (propertyName, propertyType) => {
}

/**
 * objectAssignment
 * @param propertyName
 */
const objectAssignment = (propertyName) => {
    return `if (!this._template.${propertyName}) this._template.${propertyName} = []
this._template.${propertyName} = {
    ...this._template.${propertyName},
    ...${propertyName}
}
return this`
}

/**
 * arrayAssignment
 * @param propertyName
 */
const arrayAssignment = (propertyName) => {
    return `if (!Array.isArray(${propertyName})) { ${propertyName} = [${propertyName}] }
if (!this._template.${propertyName}) this._template.${propertyName} = ${propertyName}
this._template.${propertyName} = [...this._template.${propertyName}, ...${propertyName}]
return this`
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getType = (property, propertyType) => {
    let type
    if (propertyType in scalarTypes || propertyType in elidedTypes || propertyType in basicTypes || propertyType in emptyTypes) {
        type = `${propertyType}`
    } else if(property.additionalProperties?.type == 'string') {
        type = 'any'
    } else if (property.type == 'array') {
        type = `${propertyType}`
    } else {
        type = `${propertyType}Helper` //Helper`
    }
    return type
    // if (propertyType in scalarTypes)
    //     return type
    // else if (Array.isArray(propertyType)) {
    //     return `${type} | ${type}[] | any | any[]`
    // } else {
    //     return `${type} | any`
    // }
    // return type
}
//
// const addGetter = (classObject: ClassDeclaration, propertyName: string, propertyType: string, property: any) => {
//     const { type, fun } = getType(property, propertyType)
//
//     classObject.addProperty({
//         isStatic: false,
//         name: `__${propertyName}`,
//         type,
//     });
//     classObject.getChildSyntaxListOrThrow().addChildText(writer => {
//         writer.write(`get ${propertyName}(): ${type}`).block(() => {
//             writer.writeLine(`return this.__${propertyName}`);
//         });
//     });
// }
//
// const addSetter = (classObject: ClassDeclaration, propertyName: string, propertyType: string, property: any) => {
//     const { type, fun } = getType(property, propertyType)
//     classObject.getChildSyntaxListOrThrow().addChildText(writer => {
//         writer.write(`set ${propertyName}(x: ${type})`).block(() => {
//             writer.writeLine(`this.__${propertyName} = this.${fun}(this.${propertyName}, x, '${type}')`);
//         });
//     });
// }
//
// const addSetSetter = (classObject: ClassDeclaration, propertyName: string, propertyType: string, property: any) => {
//     const { type, fun } = getType(property, propertyType)
//     const method = classObject.getChildSyntaxListOrThrow().addChildText(writer => {
//         writer.write(`set${capitalize(propertyName)}(x: ${type})`).block(() => {
//             writer.writeLine(`this.${propertyName} = x; return this`);
//         });
//     });
// }

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
    // addGetter(classObject, propertyName, prop.type, property)
    // addSetter(classObject, propertyName, prop.type, property)
    // addSetSetter(classObject, propertyName, prop.type, property)
    const type = getType(property, prop.type)

    let method = classObject.addMethod({
        isStatic: false,
        name: propertyName,
        parameters: [{name: propertyName, type: prop.type}],
        returnType: `${templateName}`,
        description: property.description,
    })
    if (property.type in scalarTypes || property.type in elidedTypes ||
        property.type in basicTypes || property.type in emptyTypes) {
        method.setBodyText(simpleAssignment(propertyName))
    } else if(property.additionalProperties?.type == 'string') {
        method.setBodyText(keymapAssignment(propertyName))
    } else if (property.type == 'object' || property.type == undefined) {
        method.setBodyText(objectAssignment(propertyName))
    } else if (property.type == 'array') {
        method.setBodyText(arrayAssignment(propertyName))
    } else {
        //console.log(property.type)
    }
    return method
}
