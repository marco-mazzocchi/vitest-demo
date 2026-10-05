import { expect, test } from 'vitest'
import {greatest, sum} from './math'

test('Sum function adds two numbers correctly', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(-1, 1)).toBe(0)
  expect(sum(0, 0)).toBe(0)
})

test('Greatest function', () => {
  expect(greatest(2, 4)).toBe(4)
  expect(greatest(4, 2)).toBe(4)
  expect(greatest(0, 8)).toBe(8)
  expect(greatest(-2, -4)).toBe(-2)
})
