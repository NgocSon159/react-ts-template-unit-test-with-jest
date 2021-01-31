export class StringUtil {
  public static replaceAll(
    value: string,
    strFind: string,
    strReplace: string
  ): string {
    let str = value
    while (str.indexOf(strFind) >= 0) {
      str = str.replace(strFind, strReplace)
    }
    return str
  }

  public static trim(s: string): string | undefined {
    if (!s) {
      return
    }
    s = s.trim()
    let i = s.length - 1
    while (
      i >= 0 &&
      (s.charAt(i) === ' ' ||
        s.charAt(i) === '\t' ||
        s.charAt(i) === '\r' ||
        s.charAt(i) === '\n')
    ) {
      i--
    }
    s = s.substring(0, i + 1)
    i = 0
    while (
      i < s.length &&
      (s.charAt(i) === ' ' ||
        s.charAt(i) === '\t' ||
        s.charAt(i) === '\r' ||
        s.charAt(i) === '\n')
    ) {
      i++
    }
    return s.substring(i)
  }

  public static camelCaseToHuman(arg: string) {
    if (arg) {
      return arg
        .replace(/([A-Z])/g, ' $1') // insert a space before all caps
        .replace(/^./, (str) => {
          return str.toUpperCase()
        }) // uppercase the first character
    } else {
      return ''
    }
  }

  // @ts-ignore
  public static indexOf(arrs, str, keyValue, ignoreCase: boolean): number {
    if (!arrs || arrs.length === 0) {
      return -1
    }
    for (let i = 0; i < arrs.length; i++) {
      let valueArray = arrs[i]

      if (keyValue && keyValue.length) {
        valueArray = arrs[i][keyValue]
      }

      if (ignoreCase === true) {
        if (valueArray.toUpperCase() === str.toUpperCase()) {
          return i
        }
      } else {
        if (valueArray === str) {
          return i
        }
      }
    }
    return -1
  }

  public static isEmpty(str: string): boolean {
    return !str || str === ''
  }

  public static toLowerCase(str: string): string {
    if (!str || str === '') {
      return str
    }
    return str.toLowerCase()
  }

  public static toUpperCase(str: string): string {
    if (!str || str === '') {
      return str
    }
    return str.toUpperCase()
  }

  public static searchWildCard = (text: string, searchKey: string) => {
    const newText = StringUtil.toLowerCase(text)
    const newSearchKey = StringUtil.toLowerCase(searchKey)
    return newText.includes(newSearchKey)
  }

  // @ts-ignore
  public static trimEnterChar(value): string {
    if (!value) {
      return value
    }
    value = value.replaceAll('\r\n', '')
    value = value.replaceAll('\r', '')
    value = value.replaceAll('\n', '')
    value = value.replaceAll('\t', '')
    return value
  }
}
