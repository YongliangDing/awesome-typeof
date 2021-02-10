const isNumber = (v: Number | number, mode: number): string => {
  if (mode === 0) {
    return typeof v;
  }
  if (mode === 1) {
    return typeof v === 'number' ? 'number' : 'Number';
  }
  const type = typeof v == 'number' ? 'number' : 'Number';
  if (isNaN(v as number)) {
    return `NaN-${type}`;
  }
  if (!isFinite(v as number)) {
    return v > 0
      ? `Infinity-${type}`
      : `-Infinity-${type}`;
  }
  return type;
};

const isString = (v: String | string, mode: number): string => {
  if (mode === 0) {
    return typeof v;
  }
  if (mode === 1) {
    return typeof v === 'string' ? 'string' : 'String';
  }
  const type = typeof v === 'string' ? 'string' : 'String';
  return v.length ? `NonEmpty-${type}` : `Empty-${type}`;
};

const isBoolean = (v: Boolean | boolean, mode: number): string => {
  if (mode === 0) {
    return typeof v;
  }
  return typeof v === 'boolean' ? 'boolean' : 'Boolean';
};

const isSymbol = (v: Symbol | symbol, mode: number): string => {
  if (mode === 0) {
    return typeof v;
  }
  return typeof v === 'symbol' ? 'symbol' : 'Symbol';
};

const isBigInt = (v: BigInt | bigint, mode: number): string => {
  if (mode === 0) {
    return typeof v;
  }
  return typeof v === 'bigint' ? 'bigint' : 'BigInt';
};

const isUndefined = (v: undefined, mode: number): string => 'undefined';

const isNull = (v: null, mode: number): string => 'null';

const isSet = (v: Set<any>, mode: number): string => {
  if (mode === 0) {
    return 'object';
  }
  if (mode === 1) {
    return 'Set';
  }
  return v.size ? 'NonEmpty-Set' : 'Empty-Set';
};

const isMap = (v: Map<any, any>, mode: number): string => {
  if (mode === 0) {
    return 'object';
  }
  if (mode === 1) {
    return 'Map';
  }
  return v.size ? 'NonEmpty-Map' : 'Empty-Map';
};

const isArray = (v: Array<any>, mode: number): string => {
  if (mode === 0) {
    return 'object';
  }
  if (mode === 1) {
    return 'Array';
  }
  return v.length ? 'NonEmpty-Array' : 'Empty-Array';
};

const isFunction = (v: Function, mode: number): string => {
  if (mode === 0) {
    return 'object';
  }
  if (mode === 1) {
    return 'Function';
  }
  if (/^\(/.test(v.toString())) {
    return 'Arrow-Function';
  }
  if (/^class/.test(v.toString())) {
    return 'Class';
  }
  return 'Function';
}

const isObject = (v: any, mode: number, type: string = 'Object'): string => {
  if (mode === 0) {
    return 'object';
  }
  return type === 'Object'
    ? v.constructor?.name || type
    : type;
}

const judgeHandler: { [key: string]: Function } = {
  isNumber,
  isString,
  isBoolean,
  isSymbol,
  isBigInt,
  isUndefined,
  isNull,
  isSet,
  isMap,
  isArray,
  isFunction,
  isObject,
}

export default function typeOf(v: any, mode: 0 | 1 | 2 = 1): string {
  const type = Object.prototype.toString.call(v).slice(8, -1);
  const func = `is${type}`;
  return func in judgeHandler
    ? judgeHandler[func](v, mode)
    // WeakSet, WeakMap, GenerateFunction, Promise, Date, RegExp ...
    : judgeHandler.isObject(v, mode, type);
}

export {
  typeOf
};
