import { expect, test } from 'vitest'
import { Sum } from './math'

test('Sum function adds two numbers correctly', () => {
  expect(Sum(1, 2)).toBe(3)
  expect(Sum(-1, 1)).toBe(0)
  expect(Sum(0, 0)).toBe(0)
})
