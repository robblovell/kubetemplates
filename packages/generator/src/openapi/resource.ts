import { ensureFile, filePath, Imports } from '../generate/util'
import { StructureKind } from 'ts-morph'
import { properties } from './properties'
import { basicTypes, elidedTypes, emptyTypes, scalarTypes } from './types'
import { addHelperMethod } from './resourceMethods'

export const addResource = (params) => {
    const {proj, name, path, fullPath, def, api, file, fileImports} = params

    if (name in scalarTypes || name in elidedTypes || name in basicTypes || name in emptyTypes) {
        console.log("name (Simple): ", name)
        return
    }
    // Determine if this is a resource
    const isResource = !!def.properties?.['kind'] &&
        !!def.properties?.['apiVersion'] &&
        !!def.properties?.['metadata']
    // Get the helper name.
    const helperName = `${name}Helper`
    // Create an interface for the helper object.
    const interfaceObject = file.addInterface({
        name: helperName,
        isExported: true
    })
    interfaceObject.addExtends(name)
    fileImports.add(ensureFile(proj, filePath(path)), name)

    // Create a Class for the helper objects (Both Resources and Objects).
    const classObject = file.addClass({
        name: helperName,
        isExported: true,
        docs: def.description ? [{description: def.description}] : [],
    })
    classObject.addImplements(helperName)
    const prop = properties(proj, api, def, fileImports)

    // If this is a resource, create a Resource Helper with name, namespace, kind and apiVersion.
    if (isResource) {
        // Resources extend ResourceTemplate
        classObject.setExtends('ResourceTemplate')
        // set kind and apiVersion.
        let kindVersion: any = {}
        for (const property of prop) {
            if (property.name == 'kind' || property.name == 'apiVersion') {
                // let variable = classObject.addMember({ isStatic: false,
                //     name: property.name, kind: StructureKind.Property })
                // variable.setInitializer(property.type)
                kindVersion[property.name] = property.type
            }
        }
        console.log(`name (Resource): ${name}, ${path}, ${fullPath}, ${kindVersion.kind}, ${kindVersion.apiVersion}`)

        // Static members for kind and apiVersion. These are fixed for a resource.
        // let variable = classObject.addMember({ isStatic: true,
        //     name: "kind", kind: StructureKind.Property})
        // variable.setInitializer(`'${name}'`)
        // variable = classObject.addMember({ isStatic: true,
        //     name: "apiVersion", kind: StructureKind.Property
        // })
        // variable.setInitializer(`'${path}'`)

        // Add the constructor for the Resource class.
        const ctor = classObject.addConstructor({
            /* options like parameters may go here */
            parameters: [
                { name: 'nameOrObject', type: 'string | any' },
                { name: 'namespace', type: 'string' }]
        })
        ctor.setBodyText(
`super(nameOrObject, namespace, ${kindVersion.kind}, ${kindVersion.apiVersion})`)

    } else {
        console.log(`name (Object): ${name}, ${path}, ${fullPath}`)
        // Plain objects extend Template
        classObject.setExtends('Template')
        // Add a constructor to the Object class.
        const ctor = classObject.addConstructor({
            /* options like parameters may go here */
            parameters: [{ name: 'obj', type: 'any' }]
        })
        ctor.setBodyText(`super(obj)`)
    }
    // for each property, add a getter, setter and fluent ($) setter
    if (def.properties) {

        for (const propertyName of Object.keys(def.properties)) {
            const property = def.properties[propertyName]
            // TODO: Figure out how to get the constructor to go-exist with the metadata object and resource interfaces.
            // Don't add setters for kind and apiVersion
            if (propertyName == 'kind' || propertyName == 'apiVersion')
                continue

            // Don't add setters for name and namespace
            if (propertyName == 'name' || propertyName == 'namespace')
                continue
            addHelperMethod(classObject, interfaceObject, helperName, propertyName, property, prop.find((p => p.name == propertyName)), proj, api, fileImports)
        }
    }
}
