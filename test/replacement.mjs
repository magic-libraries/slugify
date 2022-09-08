import { is } from '@magic/test'
import { slugify } from '../src/index.mjs'

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

const specialKeys = Object.keys(specialChars).join('')
const specialValues = Object.values(specialChars).join('')

export default [
  {
    fn: slugify(specialKeys),
    expect: is.deep.equal(specialValues),
    info: `german Umlauts get replaced correctly keys: ${specialKeys} values: ${specialValues}, result: ${slugify(
      specialKeys,
    )}`,
  },

  ...fromToArray.map(({ from, to }) => ({
    fn: () => slugify(from),
    expect: slugify(to),
    info: `slugify(${from}) returns ${slugify(to)}`,
  })),
]
