# ReloadlyUI - Angular UI library

[![npm version](https://badge.fury.io/js/%40ng-bootstrap%2Fng-bootstrap.svg)](https://badge.fury.io/js/%40ng-bootstrap%2Fng-bootstrap)
[![Build Status](https://github.com/ng-bootstrap/ng-bootstrap/workflows/ci/badge.svg?branch=master)](https://github.com/ng-bootstrap/ng-bootstrap/actions)
[![codecov](https://codecov.io/gh/ng-bootstrap/ng-bootstrap/branch/master/graph/badge.svg)](https://codecov.io/gh/ng-bootstrap/ng-bootstrap)
[![devDependency Status](https://david-dm.org/ng-bootstrap/ng-bootstrap/dev-status.svg?branch=master)](https://david-dm.org/ng-bootstrap/ng-bootstrap#info=devDependencies)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/pkozlowski.svg)](https://saucelabs.com/u/pkozlowski)

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

The only dependencies are [Angular](https://angular.io), [Bulma](https://bulma.io).
The supported versions are:

| reloadly-ui  | Angular | Bulma |
| ------------ | ------- | ----- |
| 1.0.0        | 16.0.0  | 0.9.4 |

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

Please, do not open issues for the general support questions as we want to keep GitHub issues for bug reports and feature requests. You've got much better chances of getting your question answered on [StackOverflow](http://stackoverflow.com/questions/tagged/reloadly-ui) where maintainers are looking at questions tagged with `ng-bootstrap`.

StackOverflow is a much better place to ask questions since:

- there are hundreds of people willing to help on StackOverflow
- questions and answers stay available for public viewing so your question/answer might help someone else
- Stack Overflow's voting system assures that the best answers are prominently visible.

To save your and our time we will be systematically closing all the issues that are requests for general support and redirecting people to StackOverflow.

## Do you think you've found a bug?

We want to fix it ASAP! But before fixing a bug we need to reproduce and confirm it.

We ask you to respect two things:

- fill the GitHub issue template by providing the bug description and appropriate versions of Angular, ng-bootstrap and TypeScript
- provide a use-case that fails with a **minimal reproduction scenario** using [StackBlitz](https://stackblitz.com) (you can start by forking one from our [demo page](https://ui.reloadly.com/#/components))

A minimal reproduction scenario allows us to quickly confirm a bug (or point out a coding problem) as well as confirm that we are fixing the right problem.

Please note that **we will be insisting on a minimal reproduction scenario** in order to save maintainers time and ultimately be able to fix more bugs. We'll mark the issue as non-actionable without it and close if not heard from the reporter.

Interestingly, from our experience users often find coding problems themselves while preparing a minimal StackBlitz. We understand that sometimes it might be hard to extract essential bits of code from a larger code-base but we really need to isolate the problem before we can fix it.

## Contributing to the project

Please check [DEVELOPER.md](DEVELOPER.md) for documentation on running the project locally and [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## Code of conduct

Please take a moment and read our [Code of Conduct](CODE_OF_CONDUCT.md)
