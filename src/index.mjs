export const slugify = (str, dash = false) => {
  if (typeof str !== 'string') {
    return ''
  }

  str = str.replace(/^\s+|\s+$/g, '')

  str = str.toLowerCase()

  // Remove accents, swap ñ for n, etc
  const fromString =
    'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđa·/_,:;'

  const fromArray = fromString.split('')

  const toString =
    'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDda------'
  const toArray = toString.split('')

  for (let i = 0; i < fromArray.length; i++) {
    let to = toString.charAt(i)
    const fr = fromString.charAt(i)

    if (fr === 'Ä') {
      to = 'Ae'
    } else if (fr === 'Ö') {
      to = 'Oe'
    } else if (fr === 'Ü') {
      to = 'Ue'
    } else if (fr === 'ä') {
      to = 'ae'
    } else if (fr === 'ö') {
      to = 'oe'
    } else if (fr === 'ü') {
      to = 'ue'
    }

    str = str.replace(new RegExp(fr, 'g'), to)
  }

  // Remove invalid chars
  str = str
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, dash ? '-' : '')
    .replace(/-+/g, dash ? '-' : '')

  return str
}

export default slugify
