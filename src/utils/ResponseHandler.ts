import { Codes, Messages } from './httpCodesAndMessages'

/**
 * ResponseHandler class to handle success and error responses for Elysia.
 * @class
 */
class ResponseHandler {
  /**
   * Method to send success response.
   * @param {Object} set - Elysia's set object for response manipulation
   * @param {Object} data - The data to be sent in the response
   * @param {number} statusCode - The status code of the response. Default is 200
   * @param {string} message - The message of the response. Default is 'OK'
   * @returns {Object} The success response
   */
  static sendSuccess(set: any, data: any, statusCode: number = Codes.OK, message: string = Messages.OK) {
    set.status = statusCode;
    return /* new Response(JSON.stringify( */ {
        success: true,
        status: statusCode,
        message: message,
        data: data,
    }
}


  /**
   * Method to send error response.
   * @param {Object} set - Elysia's set object for response manipulation
   * @param {Object} error - The error object
   * @param {number} statusCode - The status code of the response. Default is 500
   * @param {string} message - The message of the response. Default is 'Internal Server Error'
   * @returns {Object} The error response
   */
   static sendError(
    set: any,
    error: any,
    statusCode: number = Codes.INTERNAL_SERVER_ERROR,
    message: string = Messages.INTERNAL_SERVER_ERROR
  ) {
    set.status = statusCode
    return {
      success: false,
      status: statusCode,
      message: message,
      error: error.message || error,
    }
  }
}

export default ResponseHandler