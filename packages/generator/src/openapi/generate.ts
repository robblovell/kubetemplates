import { Project } from 'ts-morph'
import { ensureFile, filePath, Imports } from '../generate/util'
import { API } from './'
import { basicTypes, elidedTypes, emptyTypes } from './types'
import { addInterface } from './interface'
import { addResource } from './resource'
import { definitions } from './definitions'

export const generate = (proj: Project, api: API) => {
  const imports1: Map<string, Imports> = new Map()
  const imports2: Map<string, Imports> = new Map()

  // let i=0
  for (const { name, path, root, fullPath, def } of definitions(api)) {
    if (name in elidedTypes) continue

    // Create an interface file
    const file1 = ensureFile(proj, filePath(path))
    let fileImports1 = imports1.get(file1.getFilePath())

    if (fileImports1 == null) {
      fileImports1 = new Imports(file1, root)
      imports1.set(file1.getFilePath(), fileImports1)
    }
    addInterface({proj, name, path, def, api, file: file1, fileImports: fileImports1})

    // create the Helper file
    const file2 = ensureFile(proj, filePath(path+'-helper'))
    let fileImports2 = imports2.get(file2.getFilePath())
    if (fileImports2 == null) {
      fileImports2 = new Imports(file2, root)
      imports2.set(file2.getFilePath(), fileImports2)
    }

    if (name in basicTypes || name in emptyTypes) continue

    addResource({proj, name, path, fullPath, def, api, file: file2, fileImports: fileImports2})
    // if (i++ > 10)
    //   break
  }

  for (const fileImports of imports1.values()) {
    fileImports.apply(['Resource'], '@c6o/kubeclient-contracts')
  }
  for (const fileImports of imports2.values()) {
    if (fileImports.root == './')
      fileImports.apply(['ResourceTemplate', 'Template'], './resourceTemplate')
    else
      fileImports.apply(['ResourceTemplate', 'Template'], '../resourceTemplate')
  }
}




