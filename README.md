# Fabrix CLI

<img src="https://s3.us-east-2.amazonaws.com/fabrix-app/web/sw-002-1_rect-01-01.png" height="96px" title="Fabrix Logo" />

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]


## Install
Install the Fabrix CLI globally.

```sh
$ npm install @fabrix/fab-cli -g
```

## Usage
See the options for the CLI
```sh
$ fab --help
```

Create a New Fabrix Application
```sh
$ fab app <name>
```

## FAQ
See https://github.com/fabrix-app/fabrix/wiki/FAQ

## Contributing
We love contributions! Please check out our [Contributor's Guide](https://github.com/fabrix-app/fabrix/blob/master/.github/CONTRIBUTING.md) for more information on how our projects are organized and how to get started.

### Release Instructions
When the master is tagged with a release, it will automatically publish to npm, updates the Changelog and bumps the version. Fabrix uses the [standard-version library](https://www.npmjs.com/package/standard-version) to manage it all.

To run a patch release: 
```bash
npm run release -- --release-as patch
``` 
and then commit to master. `git push --follow-tags origin master`

You can also test the release by running
```bash
npm run release -- --dry-run --release-as patch
``` 

## License
[MIT](https://github.com/fabrix-app/fabrix-cli/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/@fabrix/fab-cli.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/fab-cli
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/fab-cli/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/fab-cli/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/fab-cli.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/fab-cli
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/fab-cli.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/fab-cli/coverage
