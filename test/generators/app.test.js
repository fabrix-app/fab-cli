// const path = require('path')
// const assert = require('yeoman-assert')
// const test = require('yeoman-test')
// const FabrixApp = require('@fabrix/fabrix')
//
// describe('fabrix:app', () => {
//   describe('Should create fabrix application based on hapi and waterline selections', () => {
//     let tmpDir
//     before(() => {
//       return test
//         .run(path.join(__dirname, '..', '..', 'generators', 'app'))
//         .inTmpDir(dir => {
//           tmpDir = dir
//         })
//         .withPrompts({
//           'web-engine': 'hapi',
//           'orm-engine': 'waterline',
//           logger: 'winston',
//
//           footprints: true,
//           authorName: 'fabrixjs',
//           authorEmail: 'hello@fabrixjs.io',
//           license: 'MIT'
//         })
//         .withOptions({
//           'skip-update': true,
//           'skip-install': false,
//           force: true
//         })
//     })
//
//     it('Should properly create root files', () => {
//       assert.file([
//         'index.js',
//         'server.js',
//         'api/index.js',
//         'api/models/index.js',
//         'api/services/index.js',
//         'config/index.js',
//         'config/stores.js',
//         'config/main.js',
//         'config/log.js',
//         'config/routes.js',
//         'config/web.js',
//         'config/env/testing.js',
//         'config/env/staging.js',
//         'config/env/production.js',
//         'config/env/development.js',
//         'config/env/index.js',
//         'test/integration/FabrixApp.test.js',
//         'test/setup.js',
//         'test/mocha.opts',
//         'test/.eslintrc.json',
//         'package.json',
//       ])
//     })
//     it('Should properly start', done => {
//       const fabrixApp = new FabrixApp(require(tmpDir))
//       const stop = () => {
//         return fabrixApp.stop().then(_ => {
//           done()
//         }).catch(done)
//       }
//       fabrixApp.start().then(stop).catch(stop)
//     })
//     it('should properly include selected trailpacks', () => {
//       assert.fileContent('config/main.js', /require\('trailpack-router'\)/)
//       assert.fileContent('config/main.js', /require\('trailpack-hapi'\)/)
//       assert.fileContent('config/main.js', /require\('trailpack-waterline'\)/)
//       assert.fileContent('config/main.js', /require\('trailpack-footprints'\)/)
//       assert.fileContent('config/main.js', /require\('trailpack-winston'\)/)
//     })
//   })
//
//   describe.skip('Should create fabrix based on Express/Waterline from fabrix/archetype', () => {
//     let tmpDir
//     before(() => {
//       return test
//         .run(path.join(__dirname, '..', '..', 'generators', 'app'))
//         .inTmpDir(dir => {
//           tmpDir = dir
//         })
//         .withPrompts({
//           'web-engine': 'express',
//           'express-version': '4',
//           'orm-engine': 'waterline',
//           authorName: 'fabrixjs',
//           authorEmail: 'hello@fabrixjs.io',
//           license: 'MIT'
//         }) // Mock the prompt answers
//         .withOptions({
//           'skip-update': true,
//           'skip-install': false,
//           force: true
//         })
//         .toPromise()
//     })
//
//     it('Should properly create root files', () => {
//       assert.file([
//         'index.js',
//         'server.js',
//         'api/index.js',
//         'api/models/index.js',
//         'api/services/index.js',
//         'config/index.js',
//         'config/stores.js',
//         'config/main.js',
//         'config/log.js',
//         'config/routes.js',
//         'config/web.js',
//         'config/env/testing.js',
//         'config/env/staging.js',
//         'config/env/production.js',
//         'config/env/development.js',
//         'config/env/index.js',
//         'test/integration/FabrixApp.test.js',
//         'test/setup.js',
//         'test/mocha.opts',
//         'test/.eslintrc.json',
//         'package.json',
//       ])
//     })
//     it('Should properly start', done => {
//       const fabrixApp = new FabrixApp(require(tmpDir))
//       const stop = () => {
//         return fabrixApp.stop().then(_ => {
//           done()
//         }).catch(done)
//       }
//       fabrixApp.start().then(stop).catch(stop)
//     })
//   })
// })
