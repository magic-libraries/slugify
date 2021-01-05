import { is } from '@magic/test'
import defaultSlugify, { slugify } from '../src/index.mjs'

export default [
  { fn: is.deep.equal(defaultSlugify, slugify), info: 'default export equals named export' },
  {
    fn: () => slugify('UpperCase %^& test'),
    expect: is.string,
    info: 'slugify returns a string',
  },
  {
    fn: () => slugify('UpperCase %^& test'),
    expect: t => t === 'uppercasetest',
    info: '"UpperCase %^& test" turns into "uppercasetest"',
  },
  {
    fn: () => slugify('UpperCase %^& test', true),
    expect: t => t === 'uppercase-test',
    info: '"UpperCase %^& test" turns into "uppercase-test" if dash is set',
  },
  {
    fn: () => slugify([1, 2, 3]),
    expect: t => is.string(t) && is.empty(t),
    info: 'slugify returns empty string when called with array',
  },

  {
    fn: () => slugify({}),
    expect: t => is.string(t) && is.empty(t),
    info: 'slugify returns empty string when called with object',
  },
  {
    fn: () => slugify(() => {}),
    expect: is.string,
    info: 'slugify returns string when called with fn',
  },
]
