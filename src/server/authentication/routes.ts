/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/pricing"];

/**
 * An array of API prefixes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicAPIPrefixes = ["/api/webhook"];

/**
 * An array of API prefixes that are protected by bearer token authorization
 * These routes require authentication
 * @type {string[]}
 */
export const protectedAPIPrefixes = ["/api/agents", "/api/buckets"];

/**
 * An array of routes that are used
 * These routes will redirect logged in users to /app
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/signup", "/auth/error"];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/app";

/**
 * Request user to be logged in
 * @type {string}
 */
export const REQUEST_TO_LOGIN_ROUTE = "/auth/login";

/**
 * Request user to be signed up
 * @type {string}
 */
export const REQUEST_TO_SIGNUP_ROUTE = "/auth/signup";
