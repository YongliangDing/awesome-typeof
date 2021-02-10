/**
 * Detect JavaScript variable type.
 * @param v variable
 * @param mode Detection mode, the default value is 1, the larger the value, the more detailed
 * @returns type
 */
declare function typeOf(v: any, mode?: 0 | 1 | 2): string;
export default typeOf;
export {typeOf};
