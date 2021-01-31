import {StringUtil} from '../utils/StringUtil'
import {NumberUtil} from '../utils/NumberUtil'

test('should return false given external link', () => {
    expect(StringUtil.trim('abc')).toBe('abc')
})

test('should return false given external link', () => {
    expect(NumberUtil.getOrdinalNumber('18')).toBe('18th')
})

test('should return false given external link', () => {
    expect(NumberUtil.getOrdinalNumber(0)).toBe(0)
})



