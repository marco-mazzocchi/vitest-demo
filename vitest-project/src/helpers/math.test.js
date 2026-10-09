import {expect, test, describe, beforeEach, beforeAll, afterEach, afterAll, vi} from 'vitest'
import {doubles, greatest, sum} from './math'

describe('Math helpers', () => {

  test('Doubles function', () => {
    expect(doubles(2)).toBe(4)
    expect(doubles(12)).toBe(24)
    expect(doubles(2026)).toBe(4052)
  })

  test.skip('Sum function adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(-1, 1)).toBe(0)
    expect(sum(0, 0)).toBe(0)
  })

  test.skip('Greatest function', () => {
    expect(greatest(2, 4)).toBe(4)
    expect(greatest(4, 2)).toBe(4)
    expect(greatest(0, 8)).toBe(8)
    expect(greatest(-2, -4)).toBe(-2)
  })

})

/*let items

beforeEach(() => {
  items = ['apple', 'banana', 'cherry']
})

afterEach(() => {
  items = []
})*/

/*beforeAll(() => {
  console.log("Before all tests")
})

afterAll(() => {
  console.log("After all tests")
})*/

describe.todo('Matchers', () => {
// describe('Matchers', () => {

  test('object assignment', () => {
    const data = { one: 1 }
    data.two = 2
    expect(data).toEqual({ one: 1, two: 2 })
  })

  test('toBe vs toEqual', () => {
    const a = { name: 'Alice' }
    const b = { name: 'Alice' }

    // These are different objects in memory
    expect(a).not.toBe(b)

    // But they have the same structure
    expect(a).toEqual(b)
  })

  test('null checks', () => {
    const n = null

    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).toBeFalsy()
    expect(n).not.toBeTruthy()
    expect(n).not.toBeUndefined()
  })

  test('zero', () => {
    const z = 0

    expect(z).toBeDefined() // passes: 0 is defined
    expect(z).toBeFalsy() // passes: 0 is falsy
    expect(z).not.toBeNull() // passes: 0 is not null
  })

  test('number comparisons', () => {
    const value = 4

    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)

    // For exact equality, both toBe and toEqual work the same for numbers
    expect(value).toBe(4)
    expect(value).toEqual(4)
  })

  test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
  })

  test('version string matches semver format', () => {
    expect('vitest@1.0.0').toMatch(/vitest@\d+\.\d+\.\d+/)
  })

  test('the shopping list has milk in it', () => {
    const shoppingList = ['milk', 'bread', 'eggs', 'butter']

    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
  })

  test('user has expected fields', () => {
    const user = {
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      createdAt: '2024-01-01'
    }

    // We only care about name and email here
    expect(user).toMatchObject({
      name: 'Alice',
      email: 'alice@example.com',
    })
  })

  test('compiling an empty string throws', () => {
    function compileCode(code) {
      if (code === '') {
        throw new Error('Cannot compile empty string')
      }
      return code
    }

    // Check that it throws at all
    expect(() => compileCode('')).toThrow()

    // Check the error message
    expect(() => compileCode('')).toThrow('Cannot compile empty string')

    // Check the message with a regex
    expect(() => compileCode('')).toThrow(/empty string/)
  })

  /*test('check multiple fields', () => {
    const user = { name: 'Alice', age: 30, role: 'admin' }

    expect.soft(user.name).toBe('Alice')
    expect.soft(user.age).toBe(25) // this fails but execution continues
    expect.soft(user.role).toBe('admin')
    // the test report will show that age didn't match
  })*/
})

describe.skip('Mocks & Snapshots', () => {

  test('mock function basics', () => {
    const getApples = vi.fn()

    // Call it
    getApples()

    // Check it was called
    expect(getApples).toHaveBeenCalled()
    expect(getApples).toHaveBeenCalledTimes(1)

    // By default, a mock returns undefined
    expect(getApples()).toBeUndefined()

    // Always return this value
    getApples.mockReturnValue(10)
    expect(getApples()).toBe(10)

    // Return this value only once, then fall back to the default
    getApples.mockReturnValueOnce(20)
    expect(getApples()).toBe(20) // 20 (one-time)
    expect(getApples()).toBe(10) // back to default
  })

  function generateGreeting(name) {
    return {
      message: `Hello, ${name}!`,
      timestamp: null,
      version: 2,
    }
  }

  // TIP: execute `npx vitest run --update` to update snapshot
  test('generates a greeting', () => {
    expect(generateGreeting('Alice')).toMatchSnapshot()
  })
})
