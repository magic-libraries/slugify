import { is } from '@magic/test'
import defaultSlugify, { slugify } from '../src/index.mjs'

const fromString =
  'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđa·/_,:;'
const fromArray = fromString.split('')

const toString =
  'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDda------'
const toArray = toString.toLowerCase().split('')

const specialChars = {
  Ä: 'ae',
  Ö: 'oe',
  Ü: 'ue',
  ä: 'ae',
  ö: 'oe',
  ü: 'ue',
}

const fromToArray = fromArray.map((from, i) => {
  let to = toArray[i]

  if (Object.keys(specialChars).includes(from)) {
    to = specialChars[from]
  }

  return { from, to }
})

export default [
  {
    fn: slugify(Object.keys(specialChars).join('')),
    expect: is.deep.equal(Object.values(specialChars).join('')),
    info: 'german Umlauts get replaced correctly',
  },

  ...fromToArray.map(({ from, to }) => ({
    fn: () => slugify(from),
    expect: slugify(to),
    info: `slugify(${from}) returns ${slugify(to)}`,
  })),
]
