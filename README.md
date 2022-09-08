# @magic-libraries/slugify

[@magic](https://magic.github.io/core/)-client library.

@magic-libraries/slugify turns strings into url safe strings. opinionated.

[html-docs](https://magic-libraries.github.io/slugify/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-libraries/slugify.svg
[npm-url]: https://www.npmjs.com/package/@magic-libraries/slugify
[travis-image]: https://img.shields.io/travis/com/magic-libraries/slugify/master
[travis-url]: https://travis-ci.com/magic-libraries/slugify
[appveyor-image]: https://img.shields.io/appveyor/ci/magiclibraries/slugify/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magiclibraries/slugify/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-libraries/slugify/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-libraries/slugify
[snyk-image]: https://snyk.io/test/github/magic-libraries/slugify/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-libraries/slugify

### installation

`npm install --save-exact @magic-libraries/slugify`

### usage

in a page/component, just use the lib.slugify function

#### #usage- slugify

```
lib.slugify('UpperCase @#$ test')

// 'uppercasetest'
```

#### #usage- slugify add dash

replace whitespaces and invalid characters with a single dash by passing true as second argument to slugify

```
lib.slugify('UpperCase @#$ test', true)

// 'uppercase-test'

```

### source

the source for this page is in the
[example directory](https://github.com/magic-libraries/slugify/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)

#### changelog

##### 0.0.1

first release

##### 0.0.2

bump required node version to 14.15.4

##### 0.0.3

update dependencies

##### 0.0.4

- use an object instead of strings to replace chars, allowing multi-character replacements.
- update dependencies

##### 0.0.5 - unreleased

...
