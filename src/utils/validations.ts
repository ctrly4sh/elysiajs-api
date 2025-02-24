// Validation.ts
const emailRegex: RegExp = /^[^s@]+@[^s@]+.[^s@]+$/;
const phoneRegex: RegExp =  /^\d{3}-\d{3}-\d{4}$/;

/**
 * Validate if a value is a valid email.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email: string): boolean {
    return emailRegex.test(email);
}

/**
 * Validate if a value is a valid phone number.
 * @param {string} phoneNumber
 * @returns {boolean}
 */
function isValidPhoneNumber(phoneNumber: string): boolean {
    return phoneRegex.test(phoneNumber);
}

/**
 * Validate if a value is an empty string.
 * @param {string} str
 * @returns {boolean}
 */
function isEmptyString(str: string): boolean {
    return typeof str === 'string' && str.trim().length === 0;
}

/**
 * Validate if a value is an empty array.
 * @param {Array<any>} arr
 * @returns {boolean}
 */
function isEmptyArray(arr: any[]): boolean {
    return Array.isArray(arr) && arr.length === 0;
}

/**
 * Validate if a value is not null or undefined.
 * @param {*} value
 * @returns {boolean}
 */
function isNotNullOrUndefined(value: any): boolean {
    return value !== null && value !== undefined;
}

/**
 * Validate if an object has all required fields.
 * @param {Object} obj
 * @param {Array<string>} requiredFields
 * @returns {boolean}
 */
function hasRequiredFields(obj: Record<string, any>, requiredFields: string[]): boolean {
    return requiredFields.every(field => obj.hasOwnProperty(field) && isNotNullOrUndefined(obj[field]));
}

export {
    isValidEmail,
    isValidPhoneNumber,
    isEmptyString,
    isEmptyArray,
    isNotNullOrUndefined,
    hasRequiredFields
};