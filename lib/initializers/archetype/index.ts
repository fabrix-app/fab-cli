import { copy } from 'fs-extra'

export const archetype = (name, directory) => {
  // Async with promises:
  return copy(directory, `${name}`)
    .then(() => console.log('success!'))
}

export default archetype
