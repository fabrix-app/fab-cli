import { copy, readdir, existsSync, lstatSync } from 'fs-extra'

export const archetype = (name, directory, options = {}) => {
  console.log('copy archetype files from ' + directory)
  const filterFunc = (src, dest) => {
    console.log('filter copy', src, dest)
    // your logic here
    // it will be copied if return true
    return true
  }

  return readdir(directory).then(items => {
    const promises = []
    items.forEach(item => {
      const path = directory + '/' + item + '/archetype'
      if (existsSync(path) && lstatSync(path).isDirectory()) {
        promises.push(copy(path, `${name}`, { ...options, filter: filterFunc }).catch(err => {/* ignore copy errors */}))
      }
    })
    return Promise.all(promises).then(() => console.log('success!'))
  })
}

export default archetype
