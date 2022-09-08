# ${title}

[@magic](https://magic.github.io/core/)-client library.

### installation

`npm install --save-exact @magic-libraries/slugify`

### usage

in a page/component, just use the lib.slugify function

#### #usage- slugify

```
lib.slugify('UpperCase @#$ test')

// 'uppercasetest'
```

### usage without magic:

```
import { slugify } from '@magic-libraries/slugify'

slugify('UpperCase @#$ test')

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
