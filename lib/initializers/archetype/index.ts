import { copy } from 'fs-extra'

export const archetype = (name, directory, options = {}) => {
  const filterFunc = (src, dest) => {
    console.log('filter', src, dest)
    // your logic here
    // it will be copied if return true
    return true
  }

  return copy(directory, `${name}`, { ...options, filter: filterFunc })
    .then(() => console.log('success!'))
}

export default archetype
