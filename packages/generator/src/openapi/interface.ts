import { ensureFile, filePath, Imports } from '../generate/util'
import { properties } from './properties'
import { scalarTypes } from './types'

export const addInterface = (params) => {
    const {proj, name, path, def, api, file, fileImports} = params

    if (name in scalarTypes) {
        file.addTypeAlias({
            name,
            isExported: true,
            type: scalarTypes[name],
            docs: def.description ? [{ description: def.description }] : [],
        })
    } else {
        const isResource = !!def.properties?.['kind'] &&
            !!def.properties?.['apiVersion'] &&
            !!def.properties?.['metadata']

        const prop = properties(proj, api, def, fileImports)
        const interfaceFile = file.addInterface({
            name,
            isExported: true,
            properties: prop,
            docs: def.description ? [{ description: def.description }] : [],
        })
        if (isResource) {
            interfaceFile.addExtends('Resource')
            // if (name === 'RuleWithOperations') //JSONSchemaProps
            //   debugger}
        }
    }
}
