import { basicTypes, elidedTypes, emptyTypes, scalarTypes, simpleTypes } from './types'
import { ClassDeclaration, StructureKind } from 'ts-morph'
import { ensureFile, filePath } from '../generate/util'

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const getType = (property, propertyType) => {
    let type
    // console.log('type: ', property.type, propertyType)
    if (propertyType in scalarTypes || propertyType in elidedTypes || propertyType in basicTypes || propertyType in emptyTypes) {
        type = `${propertyType}`
    } else if(property.additionalProperties?.type == 'string') {
        type = 'any' // TODO: map?
    } else if (property.type == 'array' || propertyType.includes('{[name: string]:')) {
        type = `${propertyType}`
    } else {
        type = `${propertyType}Helper`
    }
    return type
}

const addGetter = (classObject: ClassDeclaration, propertyName: string, propertyType: string, property: any) => {
    const type = getType(property, propertyType)

    classObject.addProperty({
        isStatic: false,
        name: `_${propertyName}`,
        type: type,
    })
    classObject.getChildSyntaxListOrThrow().addChildText(writer => {
        writer.write(`get ${propertyName}(): ${type}`).block(() => {
            writer.writeLine(`return this._${propertyName}`)
        })
    })
}

const addComplexSetter = (classObject: ClassDeclaration, templateName: string,
                          propertyName: string, propertyType: string, property: any) => {
    const type = getType(property, propertyType)
    classObject.getChildSyntaxListOrThrow().addChildText(writer => {
        writer.write(`set ${propertyName}(x: ${type})`).block(() => {
            writer.writeLine(`this._${propertyName} = this.set(this.${propertyName}, x)`)
        })
    })
}
const addSimpleSetter = (classObject: ClassDeclaration, templateName: string,
                         propertyName: string, propertyType: string, property: any) => {
    const type = getType(property, propertyType)
    classObject.getChildSyntaxListOrThrow().addChildText(writer => {
        writer.write(`set ${propertyName}(x: ${type})`).block(() => {
            writer.writeLine(`this._${propertyName} = x`)
        })
    })
}

const addDollarSetter = (classObject: ClassDeclaration, propertyName: string, propertyType: string, property: any) => {
    const type = getType(property, propertyType)
    const method = classObject.getChildSyntaxListOrThrow().addChildText(writer => {
        writer.write(`$${propertyName}(x: ${type})`).block(() => {
            writer.writeLine(`this.${propertyName} = x; return this`)
        })
    })
}
/**
 *
 * @param classObject
 * @param templateName
 * @param propertyName
 * @param property
 * @param prop
 */
// TODO: clean up parameters.
export const addHelperMethod = (classObject, interfaceObject, templateName,
                                propertyName, property, prop) => {
    // TODO: Decide on how to handle reserved word fields.
    // default and continue are javascript reserved words.
    if (propertyName == 'default') propertyName = 'default_'
    if (propertyName == 'continue') propertyName = 'continue_'

    const trueType = getType(property, prop.type)

    // Interface Methods
    // Add only 'Helper' types to the interface.
    if (trueType == `${prop.type}Helper`) {
        interfaceObject.addProperty({
            name: `${propertyName}`,
            type: trueType
        })
    }

    // Add the fluent ($) signature to the interface.
    const methodSignature = interfaceObject.addMethod({
        name: `$${propertyName}`,
        returnType: templateName
    })
    methodSignature.addParameter({name: 'x', type: trueType})

    // Class Methods
    // Add the field getter
    addGetter(classObject, propertyName,  prop.type, property)

    // add the field setter
    if(prop.type == '{[name: string]: string}' || property.type == 'array' || property.type == 'object') {
        addComplexSetter(classObject, templateName, propertyName, prop.type, property)
    } else {
        addSimpleSetter(classObject, templateName, propertyName, prop.type, property)
    }

    // add the fluent ($) setter.
    addDollarSetter(classObject, propertyName,  prop.type, property)
}
