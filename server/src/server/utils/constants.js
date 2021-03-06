module.exports = {
    // ************ LABELS *****************
    ACTIVE: 'ACTIVE',

    // ************ COMMON CODES *****************
    ZERO: 0,
    SUCCESS: 1,
    DEFAULT: -2,
    ERROR: -3,
    ERR_UNDEFINED: -4,
    BLANK: -5,
    NULL: -8,
    EMPTY: -37,

    // ************ AUTHENTICATION CODES *****************
    AUTH_ERROR: -41,
    AUTH_KEY_EXPIRED: -43,
    AUTH_KEY_INVALID: -44,
    AUTH_KEY_NOT_PASSED: -49,
    

    // ************ DATABASE CODES *****************
    DB_CONNECTION_ERROR: -80,
    DB_QUERY_INVALID: -82,
    DB_QUERY_ERROR: -83,
    DB_QUERY_NO_RECORD_FOUND: -88,
    
    // ******** HTTP STATUS CODES  *************
    // #### 1xx Informational
    HTTP_CONTINUE: 100,
    HTTP_SWITCHING_PROTOCOLS: 101,
    HTTP_PROCESSING_WEBDAV: 102,
    
    // #### 2xx SUCCESS
    HTTP_OK: 200,
    HTTP_CREATED: 201,
    HTTP_ACCEPTED: 202,
    HTTP_NON_AUTHORITATIVE_INFORMATION: 203,
    HTTP_NO_CONTENT: 204,
    HTTP_RESET_CONTENT: 205,
    HTTP_PARTIAL_CONTENT: 206,
    HTTP_MULTI_STATUS_WEBDAV: 207,
    HTTP_ALREADY_REPORTED_WEBDAV: 208,
    HTTP_IM_USED: 226,

    // #### 3xx Redirection
    HTTP_MULTIPLE_CHOICES: 300,
    HTTP_MOVED_PERMANENTLY: 301,
    HTTP_FOUND: 302,
    HTTP_SEE_OTHER: 303,
    HTTP_NOT_MODIFIED: 304,
    HTTP_USE_PROXY: 305,
    HTTP_UNUSED: 306,
    HTTP_TEMPORARY_REDIRECT: 307,
    HTTP_PERMANENT_REDIRECT: 308,

    // #### 4xx Client Error
    HTTP_BAD_REQUEST: 400,
    HTTP_UNAUTHORIZED: 401,
    HTTP_PAYMENT_REQUIRED: 402,
    HTTP_FORBIDDEN: 403,
    HTTP_NOT_FOUND: 404,
    HTTP_METHOD_NOT_ALLOWED: 405,
    HTTP_NOT_ACCEPTABLE: 406,
    HTTP_PROXY_AUTHENTICATION_REQUIRED: 407,
    HTTP_REQUEST_TIMEOUT: 408,
    HTTP_CONFLICT: 409,
    HTTP_GONE: 410,

    // #### 5xx Server Error
    HTTP_INTERNAL_SERVER_ERROR: 500,
    HTTP_NOT_IMPLEMENTED: 501,
    HTTP_BAD_GATEWAY: 502
}