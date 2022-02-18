import { ArgumentParser } from 'argparse'
import { readFileSync, writeFileSync } from 'fs'
import { sync as mkdirpSync } from 'mkdirp'
import fetch from 'node-fetch'
import * as path from 'path'
import { Project, ScriptTarget } from 'ts-morph'

import { API } from '../openapi'
import { generate } from '../openapi/generate'

// This is the same level as src
const assetsPath = path.normalize(path.join(__dirname, '..', '..', 'assets'))
const pkgPath = path.normalize(path.join(__dirname, '..', '..', 'package.json'))

interface Arguments {
  api: string
  file: string | undefined
  patch: number
  beta: number | undefined
}

async function main({ api: apiVersion, file, patch, beta }: Arguments) {
  const api: API = file ? JSON.parse(readFileSync(file, 'utf8')) : await fetchAPI(apiVersion)
  const version = releaseVersion(apiVersion, api.info.version, { patch, beta })

  const proj = new Project({
    compilerOptions: { target: ScriptTarget.ES2016 },
    useInMemoryFileSystem: true
  })

  generate(proj, api)

  const destPath = path.normalize(path.join(__dirname, '..', '..', '..', 'resources'))

  for (const sourceFile of proj.getSourceFiles()) {
    const text = sourceFile.getFullText()
    const filePath = sourceFile.getFilePath()
    const destFilePath = path.join(destPath, filePath.replace(/^\//, '').replace('d.ts', 'ts'))
    const dirName = path.dirname(destFilePath)
    mkdirpSync(dirName)
    writeFileSync(destFilePath, text, 'utf8')
    console.log(`v${version}${filePath}`)
  }

  const srcPackage = JSON.parse(readFileSync(path.join(pkgPath), 'utf8'))
  const generatedPackage = JSON.parse(readFileSync(path.join(assetsPath, 'package-template.json'), 'utf8'))
  generatedPackage.version = srcPackage.version
  generatedPackage.dependencies['@c6o/kubeclient-contracts'] = `^${srcPackage.version}`
  writeFileSync(
    path.join(destPath, 'package.json'),
    JSON.stringify(generatedPackage, null, 2),
    'utf8'
  )

  writeFileSync(
    path.join(destPath, 'README.md'),
    readFileSync(path.join(assetsPath, 'README-template.md'), 'utf8'),
    'utf8'
  )

  writeFileSync(
      path.join(destPath, 'resourceTemplate.ts'),
      readFileSync(path.join(assetsPath, 'resourceTemplate.ts'), 'utf8'),
      'utf8'
  )

  writeFileSync(
      path.join(destPath, 'template.ts'),
      readFileSync(path.join(assetsPath, 'template.ts'), 'utf8'),
      'utf8'
  )

  writeFileSync(
      path.join(destPath, 'tsconfig.json'),
      readFileSync(path.join(assetsPath, 'tsconfig-template.json'), 'utf8'),
      'utf8'
  )

}

async function fetchAPI(version: string): Promise<API> {
  if (/^\d/.test(version)) {
    version = `v${version}`
  }
  if (/^v\d+\.\d+$/.test(version)) {
    version = `${version}.0`
  }

  const response = await fetch(
    `https://raw.githubusercontent.com/kubernetes/kubernetes/${version}/api/openapi-spec/swagger.json`
  )
  return response.json()
}

function releaseVersion(
  cliVersion: string,
  apiVersion: string,
  { patch, beta }: Pick<Arguments, 'patch' | 'beta'>
): string {
  apiVersion = apiVersion === 'unversioned' ? cliVersion : apiVersion
  const [major, minor] = apiVersion.replace(/^v/, '').split('.')
  let version = `${major}.${minor}.${patch}`
  if (beta) {
    version += `-beta.${beta}`
  }
  return version
}

const parser = new ArgumentParser({
  description: 'Generate TypeScript types for the Kubernetes API',
  version: '1.0.0',
})
parser.addArgument(['-a', '--api'], { help: 'Kubernetes API version', defaultValue: 'master' })
parser.addArgument(['-f', '--file'], { help: 'Path to local swagger.json file' })
parser.addArgument(['-p', '--patch'], {
  help: 'Patch version of generates types',
  type: Number,
  defaultValue: 0,
})
parser.addArgument('--beta', { help: 'Create a beta release', type: Number })

main(parser.parseArgs()).catch(err => {
  console.error(err.stack)
  process.exit(1)
})
