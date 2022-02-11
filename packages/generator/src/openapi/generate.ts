import { Project } from 'ts-morph'
import { ensureFile, filePath, Imports } from '../generate/util'
import { API } from './'
import { basicTypes, elidedTypes, emptyTypes } from './types'
import { addInterface } from './interface'
import { addResource } from './resource'
import { definitions } from './definitions'

// const bases = ['Secret', 'ConfigMap', 'Namespace', 'Spec', 'Deployment', 'Object', 'MutatingWebhook', 'Container']
// const smallSet = bases.reduce((ac, x) => {
//   ac.push(x)
//   ac.push(x+'List')
//   ac.push(x+'Item')
//   ac.push(x+'Spec')
//   ac.push(x+'Status')
//   ac.push(x+'Meta')
//   return ac
// }, [])
// console.log(smallSet)

export const generate = (proj: Project, api: API) => {
  const imports: Map<string, Imports> = new Map()

  for (const { name, path, def } of definitions(api)) {
    //console.log(`Processing ${path} ${name}`)
    //console.log(`Processing ${path} ${name}`)
    if (name in elidedTypes) {
      continue
    }
    const file1 = ensureFile(proj, filePath(path))
    let fileImports1 = imports.get(file1.getFilePath())

    if (fileImports1 == null) {
      fileImports1 = new Imports(file1)
      imports.set(file1.getFilePath(), fileImports1)
    }
    addInterface({proj, name, path, def, api, file: file1, fileImports: fileImports1})

    const file2 = ensureFile(proj, filePath(path+'-helper'))
    let fileImports2 = imports.get(file2.getFilePath())
    if (fileImports2 == null) {
      fileImports2 = new Imports(file2)
      imports.set(file2.getFilePath(), fileImports2)
    }
    if (name in basicTypes || name in emptyTypes) continue
    // if (!(smallSet.find(n => n == name))) continue

    addResource({proj, name, path, def, api, file: file2, fileImports: fileImports2})
  }

  for (const fileImports of imports.values()) {
    fileImports.apply(['Resource', 'ResourceTemplate'])
  }
}




