import ResponseHandler from '../utils/ResponseHandler';  // Import the ResponseHandler class
import { Codes, Messages } from '../utils/httpCodesAndMessages';  // Import HTTP status codes and messages

/**
 * Controller function to get the health status of the server.
 *
 * @param {object} context - Elysia context containing store and response settings.
 *                             'store' provides access to application-level data.
 *                             'set' is used to configure the HTTP response (status, headers, etc.).
 * @returns {object} - Returns a success response indicating the server's health status.
 */
export const getHealth = ({ store, set }: any) => {

  // Send a success response indicating that the health check is okay
  ResponseHandler.sendSuccess(set, "Health Okay!", Codes.OK, Messages.OK);

  // Send another success response with profile data from the store, also indicating health status
  return ResponseHandler.sendSuccess(
    set,
    store.profile,  // Retrieve profile data from the application store
    Codes.OK,  // Set HTTP status code to 200 OK
    "Server Health Okay"  // Provide a message indicating the server's health status
  );

};