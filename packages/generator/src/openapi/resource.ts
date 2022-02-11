import { ensureFile, filePath, Imports } from '../generate/util'
import { StructureKind } from 'ts-morph'
import { properties } from './properties'
import { basicTypes, elidedTypes, emptyTypes, scalarTypes } from './types'
import { addHelperMethod } from './resourceMethods'

export const addResource = (params) => {
    const {proj, name, path, def, api, file, fileImports} = params

    if (name in scalarTypes || name in elidedTypes || name in basicTypes || name in emptyTypes) {
        console.log("name (S): ", name)
    } else {
        console.log("name (R): ", name)
        const helperName = `${name}Helper`
        const classObject = file.addClass({
            name: helperName,
            isExported: true,
            docs: def.description ? [{ description: def.description }] : [],
        })
        classObject.addMember({ isStatic: true, name: "kind", initializer: `'${name}'`, kind: StructureKind.Property})
        classObject.addMember({ isStatic: true, name: "apiVersion", initializer: `'${path}'`, kind: StructureKind.Property})

        if (def.properties) {
            const prop = properties(proj, api, def, fileImports)

            for (const propertyName of Object.keys(def.properties)) {
                const property = def.properties[propertyName]
                if (propertyName == 'kind' || propertyName == 'apiVersion')
                    continue
                addHelperMethod(classObject, name, propertyName, property, prop.find((p => p.name == propertyName)))
            }
        }
        const ctor = classObject.addConstructor({
            /* options like parameters may go here */
            parameters: [{name: 'name'}, {name: 'namespace'}]
        })
        ctor.setBodyText(`super(name, namespace)
this.kind = ${helperName}.kind
this.apiVersion = ${helperName}.apiVersion`)

        classObject.setExtends('ResourceTemplate')
        // if (name === 'RuleWithOperations') //JSONSchemaProps
        //   debugger}
        const isResource = !!def.properties?.['kind'] &&
            !!def.properties?.['apiVersion'] &&
            !!def.properties?.['metadata']
        if (isResource) {
            // add methods to CRUD to a cluster.
        }
    }
}
