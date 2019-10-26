import { readdir, lstatSync, readFileSync, writeFile } from 'fs-extra'

export const updateIndex = function (directory) {
    let content = readFileSync(directory + '/index.ts')
    console.log('update index to ' + directory)
    return readdir(directory).then(items => {
        items.forEach(item => {
            const path = directory + '/' + item
            const name = item.replace('.ts', '')
            if (content.indexOf('/' + name) === -1 && name !== 'index' && name !== 'locales') {
                if (lstatSync(path).isDirectory()) {
                    content += `export * from './${name}'\n`
                } else {
                    content += `export { ${name} } from './${name}'\n`
                }
            }
        })
        return writeFile(directory + '/index.ts', content)
    })
}
