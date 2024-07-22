# ReloadlyUI

Angular UI library for building rich UI experiences

[![npm version](https://badge.fury.io/js/reloadly-ui.svg)](https://badge.fury.io/js/reloadly-ui)

Please check our [demo site](https://ui.reloadly.com) and the list of
[issues](https://github.com/reloadly/reloadly-ui/issues) to see all the things we are working on. Feel free to make comments there.

## Table of Contents

- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Supported browsers](#supported-browsers)
- [Getting help](#getting-help)
- [Do you think you've found a bug?](#you-think-youve-found-a-bug)
- [Contributing to the project](#contributing-to-the-project)
- [Code of conduct](#code-of-conduct)

## Demo

Please check all components we have in action at https://ui.reloadly.com

## Dependencies

The only dependency is [Angular](https://angular.io).
The supported versions are:

| reloadly-ui  | Angular |
| ------------ | ------- |
| 1.0.2        | 18.0.5  |

## Installation

Just run the following:

```shell
npm install reloadly-ui
```

It will install reloadly-ui for the default application specified in your `angular.json`.
If you have multiple projects and you want to target a specific application, you could specify the `--project` option:

```shell
npm install reloadly-ui --project myProject
```

## Development
To run a local version of the library, and link it to your app, first run in the library:

```shell
npm run build:dev
```
Then
```shell
npm run build:scss:dev
```
Then in dist/reloadly-ui run:
```shell
npm link
```
In your Angular project's package.json, use
```shell
"dependencies": {
    ...
    "reloadly-ui": "file:../reloadly-ui/dist/reloadly-ui",
    ...
}
```

In angular.json use "preserveSymlinks": true, and:
```shell
"styles": [
    "src/styles.scss",
    "node_modules/reloadly-ui/styles/styles.css"
],
```

After installing dependencies (npm install), run:
```shell
npm link reloadly-ui
```
or
```shell
npm link reloadly-ui --force
```
This will make Angular automatically rebuild your project when you modify this ui library. You might need to modify and save a component's style sheet file for global style files to be rebuilt.

## Supported browsers

We support the same browsers and versions supported by Angular. See [Angular browser support](https://angular.io/guide/browser-support) for more details.

Our code is automatically tested on all supported browsers.

## Getting help

Please, do not open issues for the general support questions as we want to keep GitHub issues for bug reports and feature requests. For general support questions you can try StackOverflow and tag the question with the `reloadly-ui` tag.

## Do you think you've found a bug?

We want to fix it ASAP! But before fixing a bug we need to reproduce and confirm it.

We ask you to respect two things:

- fill the GitHub issue template by providing the bug description and appropriate versions of Angular, reloadly-ui and TypeScript
- provide a use-case that fails with a **minimal reproduction scenario** using [StackBlitz](https://stackblitz.com)

A minimal reproduction scenario allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we are fixing the right problem.

Interestingly, from our experience users often find coding problems themselves while preparing a minimal StackBlitz. We understand that sometimes it might be hard to extract essential bits of code from a larger code-base but we really need to isolate the problem before we can fix it.

## Contributing to the project

Please check [DEVELOPER.md](DEVELOPER.md) for documentation on running the project locally and [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Code of conduct

Please take a moment and read our [Code of Conduct](CODE_OF_CONDUCT.md)
