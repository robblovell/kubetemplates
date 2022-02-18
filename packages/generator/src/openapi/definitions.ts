import { API, Definition } from './index'

interface ResolvedDefinition {
    name: string
    path: string
    root: string
    fullPath: string
    def: Definition
}

export function definitions(api: API): ResolvedDefinition[] {
    const defs = []

    for (const name of Object.keys(api.definitions)) {
        const parsed = parseDefName(name)
        if (parsed == null) {
            continue
        }

        defs.push({ ...parsed, def: api.definitions[name] })
    }
    return defs
}

const simplifyDefName = (name: string): string | undefined => {
    const simplifications = {
        'io.k8s.api.': '',
        'io.k8s.apimachinery.pkg.apis.': '',
        'io.k8s.apimachinery.pkg.': '',
        'io.k8s.apiextensions-apiserver.pkg.apis.': '',
    }
    for (const [prefix, replacement] of Object.entries(simplifications)) {
        if (name.startsWith(prefix)) {
            return `${replacement}${name.slice(prefix.length)}`
        }
    }

    return undefined
}

export function parseDefName(name: string): { name: string; path: string; root: string; fullPath:string } | undefined {
    const simplifiedName = simplifyDefName(name)
    if (simplifiedName == null) {
        return undefined
    }
    const fullPath = name
    name = simplifiedName

    const parts = name.split('.')
    name = parts[parts.length - 1]
    const path = parts.slice(0, -1).join('/')
    const root = parts.length > 2 ?
        parts.slice(0, -2).join('/') :
        `./`
    return { name, path, root, fullPath }
}