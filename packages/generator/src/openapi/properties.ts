import { API, Definition, GroupVersionKind, resolve, Value } from './index'
import { OptionalKind, Project, PropertySignatureStructure } from 'ts-morph'
import { ensureFile, filePath, Imports } from '../generate/util'
import { elidedTypes } from './types'
import { parseDefName } from './definitions'

export function properties(
    proj: Project,
    api: API,
    { required, properties: props, 'x-kubernetes-group-version-kind': gvk }: Definition,
    imports: Imports
): OptionalKind<PropertySignatureStructure>[] {
    if (!props) {
        return []
    }

    return Object.keys(props).map(name => {
        const prop = props[name]
        const badDesc = prop.description?.match(/\*\//g)
        const dashInName = name.match(/-/g)
        return {
            name: dashInName ? `'${name}'` : name,
            type: kindType(gvk, name) || type(proj, api, imports, prop),
            docs: prop.description && !badDesc ? [prop.description] : [],
            hasQuestionToken: !(required || []).includes(name),
            isReadonly: prop.description ? prop.description.includes('Read-only.') : false,
        }
    })
}

export function kindType(
    gvkList: GroupVersionKind[] | undefined,
    propName: string
): string | undefined {
    if (gvkList != null && gvkList.length === 1) {
        const gvk = gvkList[0]
        if (propName === 'apiVersion') {
            return JSON.stringify([gvk.group, gvk.version].filter(Boolean).join('/'))
        } else if (propName === 'kind') {
            return JSON.stringify(gvk.kind)
        }
    }

    return undefined
}

export function type(proj: Project, api: API, imports: Imports, value: Value): string {
    let t = ''

    if ('$ref' in value) {
        const ref = parseDefName(resolve(api, value).name)
        if (ref == null) {
            throw new Error(`Value references excluded type: ${JSON.stringify(value)}`)
        }

        if (ref.name in elidedTypes) {
            t = elidedTypes[ref.name]
        } else {
            imports.add(ensureFile(proj, filePath(ref.path)), ref.name)
            t = ref.name
        }
    } else if ('type' in value) {
        switch (value.type) {
            case 'string':
            case 'number':
            case 'boolean':
                t = value.type
                break
            case 'integer':
                t = 'number'
                break
            case 'object':
                t = `{[name: string]: ${type(proj, api, imports, value.additionalProperties)}}`
                break
            case 'array':
                t = `Array<${type(proj, api, imports, value.items)}>`
                break
            default:
                assertNever(value)
        }
    } else {
        assertNever(value)
    }

    return t
}

const assertNever = (_: never) => {
    throw new Error('"unreachable" code was reached')
}