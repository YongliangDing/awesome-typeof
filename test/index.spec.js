const typeOf = require('../dist/awesome-typeof').default;

function testTypeOf(v, types) {
  types.forEach((type, index) => expect(typeOf(v, index)).toBe(type));
}

describe('awesome-typeof suites', () => {
  test('Number test', () => {
    testTypeOf(123, ['number', 'number', 'number']);
    testTypeOf(NaN, ['number', 'number', 'NaN-number']);
    testTypeOf(Infinity, ['number', 'number', 'Infinity-number']);
    testTypeOf(-Infinity, ['number', 'number', '-Infinity-number']);
    testTypeOf(new Number(123), ['object', 'Number', 'Number']);
    testTypeOf(new Number(NaN), ['object', 'Number', 'NaN-Number']);
    testTypeOf(new Number(Infinity), ['object', 'Number', 'Infinity-Number']);
    testTypeOf(new Number(-Infinity), ['object', 'Number', '-Infinity-Number']);
  });

  test('String test', () => {
    testTypeOf('123', ['string', 'string', 'NonEmpty-string']);
    testTypeOf('', ['string', 'string', 'Empty-string']);
    testTypeOf(new String('123'), ['object', 'String', 'NonEmpty-String']);
    testTypeOf(new String(''), ['object', 'String', 'Empty-String']);
  });

  test('Boolean test', () => {
    testTypeOf(true, ['boolean', 'boolean', 'boolean']);
    testTypeOf(new Boolean(true), ['object', 'Boolean', 'Boolean']);
  });

  test('Symbol test', () => {
    testTypeOf(Symbol(1), ['symbol', 'symbol', 'symbol']);
    testTypeOf(Object(Symbol(1)), ['object', 'Symbol', 'Symbol']);
  });

  test('BigInt test', () => {
    testTypeOf(1n, ['bigint', 'bigint', 'bigint']);
    testTypeOf(Object(1n), ['object', 'BigInt', 'BigInt']);
  });

  test('Undefined test', () => {
    testTypeOf(undefined, ['undefined', 'undefined', 'undefined']);
  });

  test('Null test', () => {
    testTypeOf(null, ['null', 'null', 'null']);
  });

  test('Set test', () => {
    testTypeOf(new Set(), ['object', 'Set', 'Empty-Set']);
    testTypeOf(new Set([1, 2, 3]), ['object', 'Set', 'NonEmpty-Set']);
  });

  test('Map test', () => {
    testTypeOf(new Map(), ['object', 'Map', 'Empty-Map']);
    testTypeOf(new Map([['a', [1, 2, 3]]]), ['object', 'Map', 'NonEmpty-Map']);
  });

  test('Array test', () => {
    testTypeOf([], ['object', 'Array', 'Empty-Array']);
    testTypeOf([1, 2, 3], ['object', 'Array', 'NonEmpty-Array']);
  });

  test('Function test', () => {
    testTypeOf(function() {}, ['object', 'Function', 'Function']);
    testTypeOf(() => 1, ['object', 'Function', 'Arrow-Function']);
    testTypeOf(class MyClass{}, ['object', 'Function', 'Class']);
  });

  test('Class test', () => {
    class MyClass {}
    testTypeOf(new MyClass(), ['object', 'MyClass', 'MyClass']);
  });

  test('Promise test', () => {
    testTypeOf(Promise.resolve(1), ['object', 'Promise', 'Promise']);
  });

  test('RegExp test', () => {
    testTypeOf(/123/, ['object', 'RegExp', 'RegExp']);
  });
});
