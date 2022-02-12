import { API, Definition, GroupVersionKind, resolve, Value } from './index'
import { OptionalKind, Project, PropertySignatureStructure } from 'ts-morph'
import { ensureFile, filePath, Imports } from '../generate/util'

export const simpleTypes = [
    'number | string',
    'string',
    'integer',
    'number',
    'boolean',
    'Quantity',
    'Time',
    'MicroTime',
    'JSONSchemaPropsOrArray',
    'JSONSchemaProps | JSONSchemaProps[]',
    'JSONSchemaPropsOrBool',
    'JSONSchemaProps | boolean',
    'JSONSchemaPropsOrStringArray',
]
export const elidedTypes: { [name: string]: string } = {
    IntOrString: 'number | string',
}
export const scalarTypes: { [name: string]: string } = {
    Quantity: 'string',
    Time: 'string',
    MicroTime: 'string',

    JSONSchemaPropsOrArray: 'JSONSchemaProps | JSONSchemaProps[]',
    JSONSchemaPropsOrBool: 'JSONSchemaProps | boolean',
    JSONSchemaPropsOrStringArray: 'JSONSchemaProps | string[]',
}
export const basicTypes: { [name: string]: string } = {
    string: 'string',
    integer: 'integer',
    number: 'number',
    boolean: 'boolean',
}
export const emptyTypes: { [name: string]: string } = {
    Quantity: 'string',
    Time: 'string',
    MicroTime: 'string',
    JSON: 'JSON',
    JSONSchemaProps: 'JSONSchemaProps',
}

interface ResolvedDefinition {
    name: string
    path: string
    def: Definition
}

