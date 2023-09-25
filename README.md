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
| 1.0.0        | 16.1.8  |

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
