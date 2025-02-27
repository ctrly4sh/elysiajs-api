/**
 * HTTP Status Codes
 * This object maps standard HTTP status codes to their numeric values.
 */
export const Codes = {
    CONTINUE: 100,
    SWITCHING_PROTOCOLS: 101,
    PROCESSING: 102,
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NON_AUTHORITATIVE_INFORMATION: 203,
    NO_CONTENT: 204,
    RESET_CONTENT: 205,
    PARTIAL_CONTENT: 206,
    MULTIPLE_CHOICES: 300,
    MOVED_PERMANENTLY: 301,
    FOUND: 302,
    SEE_OTHER: 303,
    NOT_MODIFIED: 304,
    TEMPORARY_REDIRECT: 307,
    PERMANENT_REDIRECT: 308,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    PROXY_AUTHENTICATION_REQUIRED: 407,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    GONE: 410,
    LENGTH_REQUIRED: 411,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    URI_TOO_LONG: 414,
    UNSUPPORTED_MEDIA_TYPE: 415,
    RANGE_NOT_SATISFIABLE: 416,
    EXPECTATION_FAILED: 417,
    IM_A_TEAPOT: 418,
    MISDIRECTED_REQUEST: 421,
    UNPROCESSABLE_ENTITY: 422,
    LOCKED: 423,
    FAILED_DEPENDENCY: 424,
    TOO_EARLY: 425,
    UPGRADE_REQUIRED: 426,
    PRECONDITION_REQUIRED: 428,
    TOO_MANY_REQUESTS: 429,
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
    INTERNAL_SERVER_ERROR: 500,
  } as const
  
  /**
   * HTTP Status Messages
   * This object maps standard HTTP status codes to their default message strings.
   */
  export const Messages = {
    CONTINUE: "Continue",
    SWITCHING_PROTOCOLS: "Switching Protocols",
    PROCESSING: "Processing",
    OK: "The request has succeeded",
    CREATED: "The request has been fulfilled, resulting in the creation of a new resource",
    ACCEPTED: "The request has been accepted for processing, but the processing has not been completed",
    NON_AUTHORITATIVE_INFORMATION: "The server is a transforming proxy that received a 200 OK from its origin but is returning a modified version of the origin's response",
    NO_CONTENT: "The server successfully processed the request and is not returning any content",
    RESET_CONTENT: "The server successfully processed the request, asks that the requester reset its document view, and is not returning any content",
    PARTIAL_CONTENT: "The server is delivering only part of the resource due to a range header sent by the client",
    MULTIPLE_CHOICES: "The request has more than one possible response",
    MOVED_PERMANENTLY: "The URL of the requested resource has been changed permanently",
    FOUND: "The URL of the requested resource has been changed temporarily",
    SEE_OTHER: "The server sent this response to direct the client to get the requested resource at another URI with a GET request",
    NOT_MODIFIED: "Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match",
    TEMPORARY_REDIRECT: "The server is currently responding to the request with a different URI but the client should continue to use the original URI for future requests",
    PERMANENT_REDIRECT: "The server is currently responding to the request with a different URI, and the client should use the new URI for future requests",
    BAD_REQUEST: "The server could not understand the request due to invalid syntax",
    UNAUTHORIZED: "The client must authenticate itself to get the requested response",
    PAYMENT_REQUIRED: "This response code is reserved for future use",
    FORBIDDEN: "The client does not have access rights to the content",
    NOT_FOUND: "The server can not find the requested resource",
    METHOD_NOT_ALLOWED: "The request method is known by the server but is not supported by the target resource",
    NOT_ACCEPTABLE: "The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers",
    PROXY_AUTHENTICATION_REQUIRED: "The client must first authenticate itself with the proxy",
    REQUEST_TIMEOUT: "The server would like to shut down this unused connection",
    CONFLICT: "This response is sent when a request conflicts with the current state of the server",
    GONE: "This response is sent when the requested content has been permanently deleted from the server, with no forwarding address",
    LENGTH_REQUIRED: "The server rejects the request because the Content-Length header field is not defined and the server requires it",
    PRECONDITION_FAILED: "The client has indicated preconditions in its headers which the server does not meet",
    PAYLOAD_TOO_LARGE: "The request entity is larger than limits defined by server",
    URI_TOO_LONG: "The URI requested by the client is longer than the server is willing to interpret",
    UNSUPPORTED_MEDIA_TYPE: "The media format of the requested data is not supported by the server",
    RANGE_NOT_SATISFIABLE: "The range specified by the Range header field in the request can't be fulfilled",
    EXPECTATION_FAILED: "This response code means the expectation indicated by the Expect request-header field can't be met by the server",
    IM_A_TEAPOT: "The server refuses the attempt to brew coffee with a teapot",
    MISDIRECTED_REQUEST: "The request was directed at a server that is not able to produce a response",
    UNPROCESSABLE_ENTITY: "The request was well-formed but was unable to be followed due to semantic errors",
    LOCKED: "The resource that is being accessed is locked",
    FAILED_DEPENDENCY: "The request failed due to failure of a previous request",
    TOO_EARLY: "Indicates that the server is unwilling to risk processing a request that might be replayed",
    UPGRADE_REQUIRED: "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol",
    PRECONDITION_REQUIRED: "The origin server requires the request to be conditional",
    TOO_MANY_REQUESTS: "The user has sent too many requests in a given amount of time ('rate limiting')",
    REQUEST_HEADER_FIELDS_TOO_LARGE: "The server is unwilling to process the request because its header fields are too large",
    UNAVAILABLE_FOR_LEGAL_REASONS: "The server is denying access to the resource as a consequence of a legal demand",
    INTERNAL_SERVER_ERROR: "Internal server error occurred.",
    DATA_RETRIEVED_SUCCESS: "Data retrieved successfully",
    DATA_CREATED_SUCCESS: "Data created successfully",
    DATA_UPDATED_SUCCESS: "Data updated successfully",
    DATA_DELETED_SUCCESS: "Data deleted successfully",
    VALIDATION_ERROR: "Validation Failed",
    EMAIL_ALREADY_EXISTS: "Email already exists"
  } as const
  
  export type StatusCodes = keyof typeof Codes
  export type StatusMessages = keyof typeof Messages