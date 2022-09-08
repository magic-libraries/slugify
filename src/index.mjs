export const slugify = (str, dash = false) => {
  if (typeof str !== 'string') {
    return ''
  }

  const replaceMap = {
    A: 'ÁÂÀÃÅĀ',
    B: 'Þ',
    C: 'ČÇĆ',
    D: 'ĎĐ',
    E: 'ÉĚËÈÊẼĔȆ',
    I: 'ÍÌÎÏ',
    N: 'ŇÑ',
    O: 'ÓÒÔÕØ',
    R: 'ŘŔ',
    S: 'ŠŞ',
    T: 'Ť',
    U: 'ÚŮÙÛ',
    Y: 'ÝŸ',
    Z: 'Ž',
    a: 'áâàãāầảàå',
    b: 'þ',
    c: 'čçć',
    d: 'ďđ',
    e: 'éěëèêẽĕȇ',
    h: 'ḩ',
    i: 'íìîïī',
    n: 'ňñ',
    o: 'óòôõøộðồơ',
    r: 'řŕ',
    s: 'šş',
    ss: 'ß',
    t: 'ť',
    u: 'úůùû',
    y: 'ýÿ',
    z: 'ž',
    Ae: 'Ä',
    Oe: 'Ö',
    Ue: 'Ü',
    ae: 'ä',
    oe: 'ö',
    ue: 'ü',
    '-': '·/ _,: ; ',
  }

  const strArray = str.split('')
  const entries = Object.entries(replaceMap)

  for (let i = 0; i < strArray.length; i++) {
    const char = strArray[i]

    const match = entries.find(([_, val]) => val.includes(char))

    if (match) {
      const [k] = match
      strArray[i] = k
    }
  }

  // Make sure we remove all invalid chars
  const final = strArray
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, dash ? '-' : '')
    .replace(/-+/g, dash ? '-' : '')

  return final
}

export default slugify
