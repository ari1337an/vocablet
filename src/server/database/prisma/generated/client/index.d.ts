
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Entitlement
 * 
 */
export type Entitlement = $Result.DefaultSelection<Prisma.$EntitlementPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Turn
 * 
 */
export type Turn = $Result.DefaultSelection<Prisma.$TurnPayload>
/**
 * Model VocabAgentSuggestion
 * 
 */
export type VocabAgentSuggestion = $Result.DefaultSelection<Prisma.$VocabAgentSuggestionPayload>
/**
 * Model VocabularyBucket
 * 
 */
export type VocabularyBucket = $Result.DefaultSelection<Prisma.$VocabularyBucketPayload>
/**
 * Model Vocabulary
 * 
 */
export type Vocabulary = $Result.DefaultSelection<Prisma.$VocabularyPayload>
/**
 * Model Roleplay
 * 
 */
export type Roleplay = $Result.DefaultSelection<Prisma.$RoleplayPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.entitlement`: Exposes CRUD operations for the **Entitlement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Entitlements
    * const entitlements = await prisma.entitlement.findMany()
    * ```
    */
  get entitlement(): Prisma.EntitlementDelegate<ExtArgs>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs>;

  /**
   * `prisma.turn`: Exposes CRUD operations for the **Turn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Turns
    * const turns = await prisma.turn.findMany()
    * ```
    */
  get turn(): Prisma.TurnDelegate<ExtArgs>;

  /**
   * `prisma.vocabAgentSuggestion`: Exposes CRUD operations for the **VocabAgentSuggestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VocabAgentSuggestions
    * const vocabAgentSuggestions = await prisma.vocabAgentSuggestion.findMany()
    * ```
    */
  get vocabAgentSuggestion(): Prisma.VocabAgentSuggestionDelegate<ExtArgs>;

  /**
   * `prisma.vocabularyBucket`: Exposes CRUD operations for the **VocabularyBucket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VocabularyBuckets
    * const vocabularyBuckets = await prisma.vocabularyBucket.findMany()
    * ```
    */
  get vocabularyBucket(): Prisma.VocabularyBucketDelegate<ExtArgs>;

  /**
   * `prisma.vocabulary`: Exposes CRUD operations for the **Vocabulary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vocabularies
    * const vocabularies = await prisma.vocabulary.findMany()
    * ```
    */
  get vocabulary(): Prisma.VocabularyDelegate<ExtArgs>;

  /**
   * `prisma.roleplay`: Exposes CRUD operations for the **Roleplay** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roleplays
    * const roleplays = await prisma.roleplay.findMany()
    * ```
    */
  get roleplay(): Prisma.RoleplayDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.15.1
   * Query Engine version: 5675a3182f972f1a8f31d16eee6abf4fd54910e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Subscription: 'Subscription',
    Entitlement: 'Entitlement',
    Conversation: 'Conversation',
    Turn: 'Turn',
    VocabAgentSuggestion: 'VocabAgentSuggestion',
    VocabularyBucket: 'VocabularyBucket',
    Vocabulary: 'Vocabulary',
    Roleplay: 'Roleplay'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'account' | 'session' | 'verificationToken' | 'subscription' | 'entitlement' | 'conversation' | 'turn' | 'vocabAgentSuggestion' | 'vocabularyBucket' | 'vocabulary' | 'roleplay'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>,
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Entitlement: {
        payload: Prisma.$EntitlementPayload<ExtArgs>
        fields: Prisma.EntitlementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EntitlementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntitlementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EntitlementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntitlementPayload>
          }
          findFirst: {
            args: Prisma.EntitlementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntitlementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EntitlementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntitlementPayload>
          }
          findMany: {
            args: Prisma.EntitlementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntitlementPayload>[]
          }
          create: {
            args: Prisma.EntitlementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntitlementPayload>
          }
          createMany: {
            args: Prisma.EntitlementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EntitlementCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntitlementPayload>[]
          }
          delete: {
            args: Prisma.EntitlementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntitlementPayload>
          }
          update: {
            args: Prisma.EntitlementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntitlementPayload>
          }
          deleteMany: {
            args: Prisma.EntitlementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EntitlementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EntitlementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EntitlementPayload>
          }
          aggregate: {
            args: Prisma.EntitlementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEntitlement>
          }
          groupBy: {
            args: Prisma.EntitlementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EntitlementGroupByOutputType>[]
          }
          count: {
            args: Prisma.EntitlementCountArgs<ExtArgs>,
            result: $Utils.Optional<EntitlementCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>,
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Turn: {
        payload: Prisma.$TurnPayload<ExtArgs>
        fields: Prisma.TurnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TurnFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TurnFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>
          }
          findFirst: {
            args: Prisma.TurnFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TurnFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>
          }
          findMany: {
            args: Prisma.TurnFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>[]
          }
          create: {
            args: Prisma.TurnCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>
          }
          createMany: {
            args: Prisma.TurnCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TurnCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>[]
          }
          delete: {
            args: Prisma.TurnDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>
          }
          update: {
            args: Prisma.TurnUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>
          }
          deleteMany: {
            args: Prisma.TurnDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TurnUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TurnUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TurnPayload>
          }
          aggregate: {
            args: Prisma.TurnAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTurn>
          }
          groupBy: {
            args: Prisma.TurnGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TurnGroupByOutputType>[]
          }
          count: {
            args: Prisma.TurnCountArgs<ExtArgs>,
            result: $Utils.Optional<TurnCountAggregateOutputType> | number
          }
        }
      }
      VocabAgentSuggestion: {
        payload: Prisma.$VocabAgentSuggestionPayload<ExtArgs>
        fields: Prisma.VocabAgentSuggestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VocabAgentSuggestionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabAgentSuggestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VocabAgentSuggestionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabAgentSuggestionPayload>
          }
          findFirst: {
            args: Prisma.VocabAgentSuggestionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabAgentSuggestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VocabAgentSuggestionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabAgentSuggestionPayload>
          }
          findMany: {
            args: Prisma.VocabAgentSuggestionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabAgentSuggestionPayload>[]
          }
          create: {
            args: Prisma.VocabAgentSuggestionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabAgentSuggestionPayload>
          }
          createMany: {
            args: Prisma.VocabAgentSuggestionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VocabAgentSuggestionCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabAgentSuggestionPayload>[]
          }
          delete: {
            args: Prisma.VocabAgentSuggestionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabAgentSuggestionPayload>
          }
          update: {
            args: Prisma.VocabAgentSuggestionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabAgentSuggestionPayload>
          }
          deleteMany: {
            args: Prisma.VocabAgentSuggestionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VocabAgentSuggestionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VocabAgentSuggestionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabAgentSuggestionPayload>
          }
          aggregate: {
            args: Prisma.VocabAgentSuggestionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVocabAgentSuggestion>
          }
          groupBy: {
            args: Prisma.VocabAgentSuggestionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VocabAgentSuggestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.VocabAgentSuggestionCountArgs<ExtArgs>,
            result: $Utils.Optional<VocabAgentSuggestionCountAggregateOutputType> | number
          }
        }
      }
      VocabularyBucket: {
        payload: Prisma.$VocabularyBucketPayload<ExtArgs>
        fields: Prisma.VocabularyBucketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VocabularyBucketFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyBucketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VocabularyBucketFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyBucketPayload>
          }
          findFirst: {
            args: Prisma.VocabularyBucketFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyBucketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VocabularyBucketFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyBucketPayload>
          }
          findMany: {
            args: Prisma.VocabularyBucketFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyBucketPayload>[]
          }
          create: {
            args: Prisma.VocabularyBucketCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyBucketPayload>
          }
          createMany: {
            args: Prisma.VocabularyBucketCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VocabularyBucketCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyBucketPayload>[]
          }
          delete: {
            args: Prisma.VocabularyBucketDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyBucketPayload>
          }
          update: {
            args: Prisma.VocabularyBucketUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyBucketPayload>
          }
          deleteMany: {
            args: Prisma.VocabularyBucketDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VocabularyBucketUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VocabularyBucketUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyBucketPayload>
          }
          aggregate: {
            args: Prisma.VocabularyBucketAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVocabularyBucket>
          }
          groupBy: {
            args: Prisma.VocabularyBucketGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VocabularyBucketGroupByOutputType>[]
          }
          count: {
            args: Prisma.VocabularyBucketCountArgs<ExtArgs>,
            result: $Utils.Optional<VocabularyBucketCountAggregateOutputType> | number
          }
        }
      }
      Vocabulary: {
        payload: Prisma.$VocabularyPayload<ExtArgs>
        fields: Prisma.VocabularyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VocabularyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VocabularyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          findFirst: {
            args: Prisma.VocabularyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VocabularyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          findMany: {
            args: Prisma.VocabularyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>[]
          }
          create: {
            args: Prisma.VocabularyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          createMany: {
            args: Prisma.VocabularyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VocabularyCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>[]
          }
          delete: {
            args: Prisma.VocabularyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          update: {
            args: Prisma.VocabularyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          deleteMany: {
            args: Prisma.VocabularyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VocabularyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VocabularyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VocabularyPayload>
          }
          aggregate: {
            args: Prisma.VocabularyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVocabulary>
          }
          groupBy: {
            args: Prisma.VocabularyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VocabularyGroupByOutputType>[]
          }
          count: {
            args: Prisma.VocabularyCountArgs<ExtArgs>,
            result: $Utils.Optional<VocabularyCountAggregateOutputType> | number
          }
        }
      }
      Roleplay: {
        payload: Prisma.$RoleplayPayload<ExtArgs>
        fields: Prisma.RoleplayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleplayFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleplayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleplayFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleplayPayload>
          }
          findFirst: {
            args: Prisma.RoleplayFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleplayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleplayFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleplayPayload>
          }
          findMany: {
            args: Prisma.RoleplayFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleplayPayload>[]
          }
          create: {
            args: Prisma.RoleplayCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleplayPayload>
          }
          createMany: {
            args: Prisma.RoleplayCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleplayCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleplayPayload>[]
          }
          delete: {
            args: Prisma.RoleplayDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleplayPayload>
          }
          update: {
            args: Prisma.RoleplayUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleplayPayload>
          }
          deleteMany: {
            args: Prisma.RoleplayDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleplayUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleplayUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleplayPayload>
          }
          aggregate: {
            args: Prisma.RoleplayAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoleplay>
          }
          groupBy: {
            args: Prisma.RoleplayGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleplayGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleplayCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleplayCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    Conversation: number
    Turn: number
    Roleplay: number
    vocabularyBuckets: number
    Entitlements: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    Conversation?: boolean | UserCountOutputTypeCountConversationArgs
    Turn?: boolean | UserCountOutputTypeCountTurnArgs
    Roleplay?: boolean | UserCountOutputTypeCountRoleplayArgs
    vocabularyBuckets?: boolean | UserCountOutputTypeCountVocabularyBucketsArgs
    Entitlements?: boolean | UserCountOutputTypeCountEntitlementsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTurnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoleplayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleplayWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVocabularyBucketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyBucketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEntitlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntitlementWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    Turn: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Turn?: boolean | ConversationCountOutputTypeCountTurnArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountTurnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnWhereInput
  }


  /**
   * Count Type TurnCountOutputType
   */

  export type TurnCountOutputType = {
    VocabAgentSuggestion: number
  }

  export type TurnCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    VocabAgentSuggestion?: boolean | TurnCountOutputTypeCountVocabAgentSuggestionArgs
  }

  // Custom InputTypes
  /**
   * TurnCountOutputType without action
   */
  export type TurnCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TurnCountOutputType
     */
    select?: TurnCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TurnCountOutputType without action
   */
  export type TurnCountOutputTypeCountVocabAgentSuggestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabAgentSuggestionWhereInput
  }


  /**
   * Count Type VocabularyBucketCountOutputType
   */

  export type VocabularyBucketCountOutputType = {
    Vocabulary: number
  }

  export type VocabularyBucketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vocabulary?: boolean | VocabularyBucketCountOutputTypeCountVocabularyArgs
  }

  // Custom InputTypes
  /**
   * VocabularyBucketCountOutputType without action
   */
  export type VocabularyBucketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucketCountOutputType
     */
    select?: VocabularyBucketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VocabularyBucketCountOutputType without action
   */
  export type VocabularyBucketCountOutputTypeCountVocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyWhereInput
  }


  /**
   * Count Type RoleplayCountOutputType
   */

  export type RoleplayCountOutputType = {
    conversations: number
  }

  export type RoleplayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | RoleplayCountOutputTypeCountConversationsArgs
  }

  // Custom InputTypes
  /**
   * RoleplayCountOutputType without action
   */
  export type RoleplayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleplayCountOutputType
     */
    select?: RoleplayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleplayCountOutputType without action
   */
  export type RoleplayCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    autoGeneratedBucketId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    password: string | null
    image: string | null
    autoGeneratedBucketId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    password: number
    image: number
    autoGeneratedBucketId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    autoGeneratedBucketId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    autoGeneratedBucketId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    password?: true
    image?: true
    autoGeneratedBucketId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    password: string | null
    image: string | null
    autoGeneratedBucketId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    autoGeneratedBucketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Conversation?: boolean | User$ConversationArgs<ExtArgs>
    Turn?: boolean | User$TurnArgs<ExtArgs>
    Roleplay?: boolean | User$RoleplayArgs<ExtArgs>
    vocabularyBuckets?: boolean | User$vocabularyBucketsArgs<ExtArgs>
    Subscription?: boolean | User$SubscriptionArgs<ExtArgs>
    Entitlements?: boolean | User$EntitlementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    autoGeneratedBucketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    password?: boolean
    image?: boolean
    autoGeneratedBucketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    Conversation?: boolean | User$ConversationArgs<ExtArgs>
    Turn?: boolean | User$TurnArgs<ExtArgs>
    Roleplay?: boolean | User$RoleplayArgs<ExtArgs>
    vocabularyBuckets?: boolean | User$vocabularyBucketsArgs<ExtArgs>
    Subscription?: boolean | User$SubscriptionArgs<ExtArgs>
    Entitlements?: boolean | User$EntitlementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      Conversation: Prisma.$ConversationPayload<ExtArgs>[]
      Turn: Prisma.$TurnPayload<ExtArgs>[]
      Roleplay: Prisma.$RoleplayPayload<ExtArgs>[]
      vocabularyBuckets: Prisma.$VocabularyBucketPayload<ExtArgs>[]
      Subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      Entitlements: Prisma.$EntitlementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      password: string | null
      image: string | null
      autoGeneratedBucketId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends UserCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    Conversation<T extends User$ConversationArgs<ExtArgs> = {}>(args?: Subset<T, User$ConversationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'> | Null>;

    Turn<T extends User$TurnArgs<ExtArgs> = {}>(args?: Subset<T, User$TurnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'findMany'> | Null>;

    Roleplay<T extends User$RoleplayArgs<ExtArgs> = {}>(args?: Subset<T, User$RoleplayArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleplayPayload<ExtArgs>, T, 'findMany'> | Null>;

    vocabularyBuckets<T extends User$vocabularyBucketsArgs<ExtArgs> = {}>(args?: Subset<T, User$vocabularyBucketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyBucketPayload<ExtArgs>, T, 'findMany'> | Null>;

    Subscription<T extends User$SubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$SubscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Entitlements<T extends User$EntitlementsArgs<ExtArgs> = {}>(args?: Subset<T, User$EntitlementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly autoGeneratedBucketId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.Conversation
   */
  export type User$ConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.Turn
   */
  export type User$TurnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    where?: TurnWhereInput
    orderBy?: TurnOrderByWithRelationInput | TurnOrderByWithRelationInput[]
    cursor?: TurnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnScalarFieldEnum | TurnScalarFieldEnum[]
  }

  /**
   * User.Roleplay
   */
  export type User$RoleplayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayInclude<ExtArgs> | null
    where?: RoleplayWhereInput
    orderBy?: RoleplayOrderByWithRelationInput | RoleplayOrderByWithRelationInput[]
    cursor?: RoleplayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleplayScalarFieldEnum | RoleplayScalarFieldEnum[]
  }

  /**
   * User.vocabularyBuckets
   */
  export type User$vocabularyBucketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucket
     */
    select?: VocabularyBucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyBucketInclude<ExtArgs> | null
    where?: VocabularyBucketWhereInput
    orderBy?: VocabularyBucketOrderByWithRelationInput | VocabularyBucketOrderByWithRelationInput[]
    cursor?: VocabularyBucketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VocabularyBucketScalarFieldEnum | VocabularyBucketScalarFieldEnum[]
  }

  /**
   * User.Subscription
   */
  export type User$SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User.Entitlements
   */
  export type User$EntitlementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entitlement
     */
    select?: EntitlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitlementInclude<ExtArgs> | null
    where?: EntitlementWhereInput
    orderBy?: EntitlementOrderByWithRelationInput | EntitlementOrderByWithRelationInput[]
    cursor?: EntitlementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EntitlementScalarFieldEnum | EntitlementScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const accountWithUserIdOnly = await prisma.account.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `userId`
     * const accountWithUserIdOnly = await prisma.account.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    sessionToken: number
    userId: number
    expires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    sessionToken?: true
    userId?: true
    expires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    sessionToken: string
    userId: string
    expires: Date
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sessionToken: string
      userId: string
      expires: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.findMany({ select: { sessionToken: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `sessionToken`
     * const sessionWithSessionTokenOnly = await prisma.session.createManyAndReturn({ 
     *   select: { sessionToken: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({ 
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    messageCurrencyMax: number | null
    messageUsed: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    messageCurrencyMax: number | null
    messageUsed: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    stripeCustomerId: string | null
    userId: string | null
    stripeSubscriptionId: string | null
    stripePriceId: string | null
    stripeSubscriptionActive: boolean | null
    stripeSubscriptionExpires: Date | null
    stripeInvoiceFailed: boolean | null
    messageCurrencyMax: number | null
    messageUsed: number | null
    subscribedAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    stripeCustomerId: string | null
    userId: string | null
    stripeSubscriptionId: string | null
    stripePriceId: string | null
    stripeSubscriptionActive: boolean | null
    stripeSubscriptionExpires: Date | null
    stripeInvoiceFailed: boolean | null
    messageCurrencyMax: number | null
    messageUsed: number | null
    subscribedAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    stripeCustomerId: number
    userId: number
    stripeSubscriptionId: number
    stripePriceId: number
    stripeSubscriptionActive: number
    stripeSubscriptionExpires: number
    stripeInvoiceFailed: number
    messageCurrencyMax: number
    messageUsed: number
    subscribedAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    messageCurrencyMax?: true
    messageUsed?: true
  }

  export type SubscriptionSumAggregateInputType = {
    messageCurrencyMax?: true
    messageUsed?: true
  }

  export type SubscriptionMinAggregateInputType = {
    stripeCustomerId?: true
    userId?: true
    stripeSubscriptionId?: true
    stripePriceId?: true
    stripeSubscriptionActive?: true
    stripeSubscriptionExpires?: true
    stripeInvoiceFailed?: true
    messageCurrencyMax?: true
    messageUsed?: true
    subscribedAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    stripeCustomerId?: true
    userId?: true
    stripeSubscriptionId?: true
    stripePriceId?: true
    stripeSubscriptionActive?: true
    stripeSubscriptionExpires?: true
    stripeInvoiceFailed?: true
    messageCurrencyMax?: true
    messageUsed?: true
    subscribedAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    stripeCustomerId?: true
    userId?: true
    stripeSubscriptionId?: true
    stripePriceId?: true
    stripeSubscriptionActive?: true
    stripeSubscriptionExpires?: true
    stripeInvoiceFailed?: true
    messageCurrencyMax?: true
    messageUsed?: true
    subscribedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    stripeCustomerId: string
    userId: string
    stripeSubscriptionId: string
    stripePriceId: string
    stripeSubscriptionActive: boolean
    stripeSubscriptionExpires: Date | null
    stripeInvoiceFailed: boolean
    messageCurrencyMax: number
    messageUsed: number
    subscribedAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stripeCustomerId?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    stripeSubscriptionActive?: boolean
    stripeSubscriptionExpires?: boolean
    stripeInvoiceFailed?: boolean
    messageCurrencyMax?: boolean
    messageUsed?: boolean
    subscribedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stripeCustomerId?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    stripeSubscriptionActive?: boolean
    stripeSubscriptionExpires?: boolean
    stripeInvoiceFailed?: boolean
    messageCurrencyMax?: boolean
    messageUsed?: boolean
    subscribedAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    stripeCustomerId?: boolean
    userId?: boolean
    stripeSubscriptionId?: boolean
    stripePriceId?: boolean
    stripeSubscriptionActive?: boolean
    stripeSubscriptionExpires?: boolean
    stripeInvoiceFailed?: boolean
    messageCurrencyMax?: boolean
    messageUsed?: boolean
    subscribedAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      stripeCustomerId: string
      userId: string
      stripeSubscriptionId: string
      stripePriceId: string
      stripeSubscriptionActive: boolean
      stripeSubscriptionExpires: Date | null
      stripeInvoiceFailed: boolean
      messageCurrencyMax: number
      messageUsed: number
      subscribedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubscriptionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubscriptionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `stripeCustomerId`
     * const subscriptionWithStripeCustomerIdOnly = await prisma.subscription.findMany({ select: { stripeCustomerId: true } })
     * 
    **/
    findMany<T extends SubscriptionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
    **/
    create<T extends SubscriptionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SubscriptionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `stripeCustomerId`
     * const subscriptionWithStripeCustomerIdOnly = await prisma.subscription.createManyAndReturn({ 
     *   select: { stripeCustomerId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
    **/
    delete<T extends SubscriptionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubscriptionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubscriptionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubscriptionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
    **/
    upsert<T extends SubscriptionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>
    ): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly stripeCustomerId: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"Subscription", 'String'>
    readonly stripePriceId: FieldRef<"Subscription", 'String'>
    readonly stripeSubscriptionActive: FieldRef<"Subscription", 'Boolean'>
    readonly stripeSubscriptionExpires: FieldRef<"Subscription", 'DateTime'>
    readonly stripeInvoiceFailed: FieldRef<"Subscription", 'Boolean'>
    readonly messageCurrencyMax: FieldRef<"Subscription", 'Int'>
    readonly messageUsed: FieldRef<"Subscription", 'Int'>
    readonly subscribedAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Entitlement
   */

  export type AggregateEntitlement = {
    _count: EntitlementCountAggregateOutputType | null
    _min: EntitlementMinAggregateOutputType | null
    _max: EntitlementMaxAggregateOutputType | null
  }

  export type EntitlementMinAggregateOutputType = {
    id: string | null
    userId: string | null
    feature: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntitlementMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    feature: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EntitlementCountAggregateOutputType = {
    id: number
    userId: number
    feature: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EntitlementMinAggregateInputType = {
    id?: true
    userId?: true
    feature?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntitlementMaxAggregateInputType = {
    id?: true
    userId?: true
    feature?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EntitlementCountAggregateInputType = {
    id?: true
    userId?: true
    feature?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EntitlementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entitlement to aggregate.
     */
    where?: EntitlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entitlements to fetch.
     */
    orderBy?: EntitlementOrderByWithRelationInput | EntitlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EntitlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entitlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entitlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Entitlements
    **/
    _count?: true | EntitlementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EntitlementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EntitlementMaxAggregateInputType
  }

  export type GetEntitlementAggregateType<T extends EntitlementAggregateArgs> = {
        [P in keyof T & keyof AggregateEntitlement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEntitlement[P]>
      : GetScalarType<T[P], AggregateEntitlement[P]>
  }




  export type EntitlementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EntitlementWhereInput
    orderBy?: EntitlementOrderByWithAggregationInput | EntitlementOrderByWithAggregationInput[]
    by: EntitlementScalarFieldEnum[] | EntitlementScalarFieldEnum
    having?: EntitlementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EntitlementCountAggregateInputType | true
    _min?: EntitlementMinAggregateInputType
    _max?: EntitlementMaxAggregateInputType
  }

  export type EntitlementGroupByOutputType = {
    id: string
    userId: string
    feature: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: EntitlementCountAggregateOutputType | null
    _min: EntitlementMinAggregateOutputType | null
    _max: EntitlementMaxAggregateOutputType | null
  }

  type GetEntitlementGroupByPayload<T extends EntitlementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EntitlementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EntitlementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EntitlementGroupByOutputType[P]>
            : GetScalarType<T[P], EntitlementGroupByOutputType[P]>
        }
      >
    >


  export type EntitlementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    feature?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entitlement"]>

  export type EntitlementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    feature?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["entitlement"]>

  export type EntitlementSelectScalar = {
    id?: boolean
    userId?: boolean
    feature?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EntitlementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EntitlementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EntitlementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Entitlement"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      feature: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["entitlement"]>
    composites: {}
  }

  type EntitlementGetPayload<S extends boolean | null | undefined | EntitlementDefaultArgs> = $Result.GetResult<Prisma.$EntitlementPayload, S>

  type EntitlementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EntitlementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EntitlementCountAggregateInputType | true
    }

  export interface EntitlementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Entitlement'], meta: { name: 'Entitlement' } }
    /**
     * Find zero or one Entitlement that matches the filter.
     * @param {EntitlementFindUniqueArgs} args - Arguments to find a Entitlement
     * @example
     * // Get one Entitlement
     * const entitlement = await prisma.entitlement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EntitlementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EntitlementFindUniqueArgs<ExtArgs>>
    ): Prisma__EntitlementClient<$Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Entitlement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EntitlementFindUniqueOrThrowArgs} args - Arguments to find a Entitlement
     * @example
     * // Get one Entitlement
     * const entitlement = await prisma.entitlement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EntitlementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntitlementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EntitlementClient<$Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Entitlement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntitlementFindFirstArgs} args - Arguments to find a Entitlement
     * @example
     * // Get one Entitlement
     * const entitlement = await prisma.entitlement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EntitlementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EntitlementFindFirstArgs<ExtArgs>>
    ): Prisma__EntitlementClient<$Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Entitlement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntitlementFindFirstOrThrowArgs} args - Arguments to find a Entitlement
     * @example
     * // Get one Entitlement
     * const entitlement = await prisma.entitlement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EntitlementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EntitlementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EntitlementClient<$Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Entitlements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntitlementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Entitlements
     * const entitlements = await prisma.entitlement.findMany()
     * 
     * // Get first 10 Entitlements
     * const entitlements = await prisma.entitlement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const entitlementWithIdOnly = await prisma.entitlement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EntitlementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntitlementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Entitlement.
     * @param {EntitlementCreateArgs} args - Arguments to create a Entitlement.
     * @example
     * // Create one Entitlement
     * const Entitlement = await prisma.entitlement.create({
     *   data: {
     *     // ... data to create a Entitlement
     *   }
     * })
     * 
    **/
    create<T extends EntitlementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EntitlementCreateArgs<ExtArgs>>
    ): Prisma__EntitlementClient<$Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Entitlements.
     * @param {EntitlementCreateManyArgs} args - Arguments to create many Entitlements.
     * @example
     * // Create many Entitlements
     * const entitlement = await prisma.entitlement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends EntitlementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntitlementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Entitlements and returns the data saved in the database.
     * @param {EntitlementCreateManyAndReturnArgs} args - Arguments to create many Entitlements.
     * @example
     * // Create many Entitlements
     * const entitlement = await prisma.entitlement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Entitlements and only return the `id`
     * const entitlementWithIdOnly = await prisma.entitlement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends EntitlementCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, EntitlementCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Entitlement.
     * @param {EntitlementDeleteArgs} args - Arguments to delete one Entitlement.
     * @example
     * // Delete one Entitlement
     * const Entitlement = await prisma.entitlement.delete({
     *   where: {
     *     // ... filter to delete one Entitlement
     *   }
     * })
     * 
    **/
    delete<T extends EntitlementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EntitlementDeleteArgs<ExtArgs>>
    ): Prisma__EntitlementClient<$Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Entitlement.
     * @param {EntitlementUpdateArgs} args - Arguments to update one Entitlement.
     * @example
     * // Update one Entitlement
     * const entitlement = await prisma.entitlement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EntitlementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EntitlementUpdateArgs<ExtArgs>>
    ): Prisma__EntitlementClient<$Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Entitlements.
     * @param {EntitlementDeleteManyArgs} args - Arguments to filter Entitlements to delete.
     * @example
     * // Delete a few Entitlements
     * const { count } = await prisma.entitlement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EntitlementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EntitlementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Entitlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntitlementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Entitlements
     * const entitlement = await prisma.entitlement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EntitlementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EntitlementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Entitlement.
     * @param {EntitlementUpsertArgs} args - Arguments to update or create a Entitlement.
     * @example
     * // Update or create a Entitlement
     * const entitlement = await prisma.entitlement.upsert({
     *   create: {
     *     // ... data to create a Entitlement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Entitlement we want to update
     *   }
     * })
    **/
    upsert<T extends EntitlementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EntitlementUpsertArgs<ExtArgs>>
    ): Prisma__EntitlementClient<$Result.GetResult<Prisma.$EntitlementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Entitlements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntitlementCountArgs} args - Arguments to filter Entitlements to count.
     * @example
     * // Count the number of Entitlements
     * const count = await prisma.entitlement.count({
     *   where: {
     *     // ... the filter for the Entitlements we want to count
     *   }
     * })
    **/
    count<T extends EntitlementCountArgs>(
      args?: Subset<T, EntitlementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EntitlementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Entitlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntitlementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EntitlementAggregateArgs>(args: Subset<T, EntitlementAggregateArgs>): Prisma.PrismaPromise<GetEntitlementAggregateType<T>>

    /**
     * Group by Entitlement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EntitlementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EntitlementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EntitlementGroupByArgs['orderBy'] }
        : { orderBy?: EntitlementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EntitlementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEntitlementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Entitlement model
   */
  readonly fields: EntitlementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Entitlement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EntitlementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Entitlement model
   */ 
  interface EntitlementFieldRefs {
    readonly id: FieldRef<"Entitlement", 'String'>
    readonly userId: FieldRef<"Entitlement", 'String'>
    readonly feature: FieldRef<"Entitlement", 'String'>
    readonly active: FieldRef<"Entitlement", 'Boolean'>
    readonly createdAt: FieldRef<"Entitlement", 'DateTime'>
    readonly updatedAt: FieldRef<"Entitlement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Entitlement findUnique
   */
  export type EntitlementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entitlement
     */
    select?: EntitlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitlementInclude<ExtArgs> | null
    /**
     * Filter, which Entitlement to fetch.
     */
    where: EntitlementWhereUniqueInput
  }

  /**
   * Entitlement findUniqueOrThrow
   */
  export type EntitlementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entitlement
     */
    select?: EntitlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitlementInclude<ExtArgs> | null
    /**
     * Filter, which Entitlement to fetch.
     */
    where: EntitlementWhereUniqueInput
  }

  /**
   * Entitlement findFirst
   */
  export type EntitlementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entitlement
     */
    select?: EntitlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitlementInclude<ExtArgs> | null
    /**
     * Filter, which Entitlement to fetch.
     */
    where?: EntitlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entitlements to fetch.
     */
    orderBy?: EntitlementOrderByWithRelationInput | EntitlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entitlements.
     */
    cursor?: EntitlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entitlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entitlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entitlements.
     */
    distinct?: EntitlementScalarFieldEnum | EntitlementScalarFieldEnum[]
  }

  /**
   * Entitlement findFirstOrThrow
   */
  export type EntitlementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entitlement
     */
    select?: EntitlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitlementInclude<ExtArgs> | null
    /**
     * Filter, which Entitlement to fetch.
     */
    where?: EntitlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entitlements to fetch.
     */
    orderBy?: EntitlementOrderByWithRelationInput | EntitlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Entitlements.
     */
    cursor?: EntitlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entitlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entitlements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Entitlements.
     */
    distinct?: EntitlementScalarFieldEnum | EntitlementScalarFieldEnum[]
  }

  /**
   * Entitlement findMany
   */
  export type EntitlementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entitlement
     */
    select?: EntitlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitlementInclude<ExtArgs> | null
    /**
     * Filter, which Entitlements to fetch.
     */
    where?: EntitlementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Entitlements to fetch.
     */
    orderBy?: EntitlementOrderByWithRelationInput | EntitlementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Entitlements.
     */
    cursor?: EntitlementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Entitlements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Entitlements.
     */
    skip?: number
    distinct?: EntitlementScalarFieldEnum | EntitlementScalarFieldEnum[]
  }

  /**
   * Entitlement create
   */
  export type EntitlementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entitlement
     */
    select?: EntitlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitlementInclude<ExtArgs> | null
    /**
     * The data needed to create a Entitlement.
     */
    data: XOR<EntitlementCreateInput, EntitlementUncheckedCreateInput>
  }

  /**
   * Entitlement createMany
   */
  export type EntitlementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Entitlements.
     */
    data: EntitlementCreateManyInput | EntitlementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Entitlement createManyAndReturn
   */
  export type EntitlementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entitlement
     */
    select?: EntitlementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Entitlements.
     */
    data: EntitlementCreateManyInput | EntitlementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitlementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Entitlement update
   */
  export type EntitlementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entitlement
     */
    select?: EntitlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitlementInclude<ExtArgs> | null
    /**
     * The data needed to update a Entitlement.
     */
    data: XOR<EntitlementUpdateInput, EntitlementUncheckedUpdateInput>
    /**
     * Choose, which Entitlement to update.
     */
    where: EntitlementWhereUniqueInput
  }

  /**
   * Entitlement updateMany
   */
  export type EntitlementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Entitlements.
     */
    data: XOR<EntitlementUpdateManyMutationInput, EntitlementUncheckedUpdateManyInput>
    /**
     * Filter which Entitlements to update
     */
    where?: EntitlementWhereInput
  }

  /**
   * Entitlement upsert
   */
  export type EntitlementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entitlement
     */
    select?: EntitlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitlementInclude<ExtArgs> | null
    /**
     * The filter to search for the Entitlement to update in case it exists.
     */
    where: EntitlementWhereUniqueInput
    /**
     * In case the Entitlement found by the `where` argument doesn't exist, create a new Entitlement with this data.
     */
    create: XOR<EntitlementCreateInput, EntitlementUncheckedCreateInput>
    /**
     * In case the Entitlement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EntitlementUpdateInput, EntitlementUncheckedUpdateInput>
  }

  /**
   * Entitlement delete
   */
  export type EntitlementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entitlement
     */
    select?: EntitlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitlementInclude<ExtArgs> | null
    /**
     * Filter which Entitlement to delete.
     */
    where: EntitlementWhereUniqueInput
  }

  /**
   * Entitlement deleteMany
   */
  export type EntitlementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Entitlements to delete
     */
    where?: EntitlementWhereInput
  }

  /**
   * Entitlement without action
   */
  export type EntitlementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Entitlement
     */
    select?: EntitlementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EntitlementInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    title: string | null
    userId: string | null
    roleplayId: string | null
    createdAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    userId: string | null
    roleplayId: string | null
    createdAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    title: number
    userId: number
    roleplayId: number
    createdAt: number
    _all: number
  }


  export type ConversationMinAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    roleplayId?: true
    createdAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    roleplayId?: true
    createdAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    title?: true
    userId?: true
    roleplayId?: true
    createdAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    title: string
    userId: string
    roleplayId: string | null
    createdAt: Date
    _count: ConversationCountAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    roleplayId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Turn?: boolean | Conversation$TurnArgs<ExtArgs>
    Roleplay?: boolean | Conversation$RoleplayArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    userId?: boolean
    roleplayId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Roleplay?: boolean | Conversation$RoleplayArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    title?: boolean
    userId?: boolean
    roleplayId?: boolean
    createdAt?: boolean
  }

  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Turn?: boolean | Conversation$TurnArgs<ExtArgs>
    Roleplay?: boolean | Conversation$RoleplayArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Roleplay?: boolean | Conversation$RoleplayArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Turn: Prisma.$TurnPayload<ExtArgs>[]
      Roleplay: Prisma.$RoleplayPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      userId: string
      roleplayId: string | null
      createdAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConversationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConversationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConversationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
    **/
    create<T extends ConversationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ConversationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
    **/
    delete<T extends ConversationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConversationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConversationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConversationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
    **/
    upsert<T extends ConversationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Turn<T extends Conversation$TurnArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$TurnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'findMany'> | Null>;

    Roleplay<T extends Conversation$RoleplayArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$RoleplayArgs<ExtArgs>>): Prisma__RoleplayClient<$Result.GetResult<Prisma.$RoleplayPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Conversation model
   */ 
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly title: FieldRef<"Conversation", 'String'>
    readonly userId: FieldRef<"Conversation", 'String'>
    readonly roleplayId: FieldRef<"Conversation", 'String'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
  }

  /**
   * Conversation.Turn
   */
  export type Conversation$TurnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    where?: TurnWhereInput
    orderBy?: TurnOrderByWithRelationInput | TurnOrderByWithRelationInput[]
    cursor?: TurnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TurnScalarFieldEnum | TurnScalarFieldEnum[]
  }

  /**
   * Conversation.Roleplay
   */
  export type Conversation$RoleplayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayInclude<ExtArgs> | null
    where?: RoleplayWhereInput
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Turn
   */

  export type AggregateTurn = {
    _count: TurnCountAggregateOutputType | null
    _avg: TurnAvgAggregateOutputType | null
    _sum: TurnSumAggregateOutputType | null
    _min: TurnMinAggregateOutputType | null
    _max: TurnMaxAggregateOutputType | null
  }

  export type TurnAvgAggregateOutputType = {
    totalTokens: number | null
  }

  export type TurnSumAggregateOutputType = {
    totalTokens: number | null
  }

  export type TurnMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
    userId: string | null
    message: string | null
    reply: string | null
    totalTokens: number | null
    createdAt: Date | null
  }

  export type TurnMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
    userId: string | null
    message: string | null
    reply: string | null
    totalTokens: number | null
    createdAt: Date | null
  }

  export type TurnCountAggregateOutputType = {
    id: number
    conversationId: number
    userId: number
    message: number
    reply: number
    totalTokens: number
    createdAt: number
    _all: number
  }


  export type TurnAvgAggregateInputType = {
    totalTokens?: true
  }

  export type TurnSumAggregateInputType = {
    totalTokens?: true
  }

  export type TurnMinAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
    message?: true
    reply?: true
    totalTokens?: true
    createdAt?: true
  }

  export type TurnMaxAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
    message?: true
    reply?: true
    totalTokens?: true
    createdAt?: true
  }

  export type TurnCountAggregateInputType = {
    id?: true
    conversationId?: true
    userId?: true
    message?: true
    reply?: true
    totalTokens?: true
    createdAt?: true
    _all?: true
  }

  export type TurnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turn to aggregate.
     */
    where?: TurnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turns to fetch.
     */
    orderBy?: TurnOrderByWithRelationInput | TurnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TurnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Turns
    **/
    _count?: true | TurnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TurnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TurnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TurnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TurnMaxAggregateInputType
  }

  export type GetTurnAggregateType<T extends TurnAggregateArgs> = {
        [P in keyof T & keyof AggregateTurn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTurn[P]>
      : GetScalarType<T[P], AggregateTurn[P]>
  }




  export type TurnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TurnWhereInput
    orderBy?: TurnOrderByWithAggregationInput | TurnOrderByWithAggregationInput[]
    by: TurnScalarFieldEnum[] | TurnScalarFieldEnum
    having?: TurnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TurnCountAggregateInputType | true
    _avg?: TurnAvgAggregateInputType
    _sum?: TurnSumAggregateInputType
    _min?: TurnMinAggregateInputType
    _max?: TurnMaxAggregateInputType
  }

  export type TurnGroupByOutputType = {
    id: string
    conversationId: string
    userId: string
    message: string
    reply: string
    totalTokens: number
    createdAt: Date
    _count: TurnCountAggregateOutputType | null
    _avg: TurnAvgAggregateOutputType | null
    _sum: TurnSumAggregateOutputType | null
    _min: TurnMinAggregateOutputType | null
    _max: TurnMaxAggregateOutputType | null
  }

  type GetTurnGroupByPayload<T extends TurnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TurnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TurnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TurnGroupByOutputType[P]>
            : GetScalarType<T[P], TurnGroupByOutputType[P]>
        }
      >
    >


  export type TurnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    userId?: boolean
    message?: boolean
    reply?: boolean
    totalTokens?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    VocabAgentSuggestion?: boolean | Turn$VocabAgentSuggestionArgs<ExtArgs>
    _count?: boolean | TurnCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turn"]>

  export type TurnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    userId?: boolean
    message?: boolean
    reply?: boolean
    totalTokens?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["turn"]>

  export type TurnSelectScalar = {
    id?: boolean
    conversationId?: boolean
    userId?: boolean
    message?: boolean
    reply?: boolean
    totalTokens?: boolean
    createdAt?: boolean
  }

  export type TurnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    VocabAgentSuggestion?: boolean | Turn$VocabAgentSuggestionArgs<ExtArgs>
    _count?: boolean | TurnCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TurnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TurnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Turn"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      VocabAgentSuggestion: Prisma.$VocabAgentSuggestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversationId: string
      userId: string
      message: string
      reply: string
      totalTokens: number
      createdAt: Date
    }, ExtArgs["result"]["turn"]>
    composites: {}
  }

  type TurnGetPayload<S extends boolean | null | undefined | TurnDefaultArgs> = $Result.GetResult<Prisma.$TurnPayload, S>

  type TurnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TurnFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TurnCountAggregateInputType | true
    }

  export interface TurnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Turn'], meta: { name: 'Turn' } }
    /**
     * Find zero or one Turn that matches the filter.
     * @param {TurnFindUniqueArgs} args - Arguments to find a Turn
     * @example
     * // Get one Turn
     * const turn = await prisma.turn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TurnFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TurnFindUniqueArgs<ExtArgs>>
    ): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Turn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TurnFindUniqueOrThrowArgs} args - Arguments to find a Turn
     * @example
     * // Get one Turn
     * const turn = await prisma.turn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TurnFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Turn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnFindFirstArgs} args - Arguments to find a Turn
     * @example
     * // Get one Turn
     * const turn = await prisma.turn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TurnFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnFindFirstArgs<ExtArgs>>
    ): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Turn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnFindFirstOrThrowArgs} args - Arguments to find a Turn
     * @example
     * // Get one Turn
     * const turn = await prisma.turn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TurnFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Turns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Turns
     * const turns = await prisma.turn.findMany()
     * 
     * // Get first 10 Turns
     * const turns = await prisma.turn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const turnWithIdOnly = await prisma.turn.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TurnFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Turn.
     * @param {TurnCreateArgs} args - Arguments to create a Turn.
     * @example
     * // Create one Turn
     * const Turn = await prisma.turn.create({
     *   data: {
     *     // ... data to create a Turn
     *   }
     * })
     * 
    **/
    create<T extends TurnCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TurnCreateArgs<ExtArgs>>
    ): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Turns.
     * @param {TurnCreateManyArgs} args - Arguments to create many Turns.
     * @example
     * // Create many Turns
     * const turn = await prisma.turn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TurnCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Turns and returns the data saved in the database.
     * @param {TurnCreateManyAndReturnArgs} args - Arguments to create many Turns.
     * @example
     * // Create many Turns
     * const turn = await prisma.turn.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Turns and only return the `id`
     * const turnWithIdOnly = await prisma.turn.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends TurnCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Turn.
     * @param {TurnDeleteArgs} args - Arguments to delete one Turn.
     * @example
     * // Delete one Turn
     * const Turn = await prisma.turn.delete({
     *   where: {
     *     // ... filter to delete one Turn
     *   }
     * })
     * 
    **/
    delete<T extends TurnDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TurnDeleteArgs<ExtArgs>>
    ): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Turn.
     * @param {TurnUpdateArgs} args - Arguments to update one Turn.
     * @example
     * // Update one Turn
     * const turn = await prisma.turn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TurnUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TurnUpdateArgs<ExtArgs>>
    ): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Turns.
     * @param {TurnDeleteManyArgs} args - Arguments to filter Turns to delete.
     * @example
     * // Delete a few Turns
     * const { count } = await prisma.turn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TurnDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TurnDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Turns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Turns
     * const turn = await prisma.turn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TurnUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TurnUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Turn.
     * @param {TurnUpsertArgs} args - Arguments to update or create a Turn.
     * @example
     * // Update or create a Turn
     * const turn = await prisma.turn.upsert({
     *   create: {
     *     // ... data to create a Turn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Turn we want to update
     *   }
     * })
    **/
    upsert<T extends TurnUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TurnUpsertArgs<ExtArgs>>
    ): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Turns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnCountArgs} args - Arguments to filter Turns to count.
     * @example
     * // Count the number of Turns
     * const count = await prisma.turn.count({
     *   where: {
     *     // ... the filter for the Turns we want to count
     *   }
     * })
    **/
    count<T extends TurnCountArgs>(
      args?: Subset<T, TurnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TurnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Turn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TurnAggregateArgs>(args: Subset<T, TurnAggregateArgs>): Prisma.PrismaPromise<GetTurnAggregateType<T>>

    /**
     * Group by Turn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TurnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TurnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TurnGroupByArgs['orderBy'] }
        : { orderBy?: TurnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TurnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Turn model
   */
  readonly fields: TurnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Turn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TurnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    VocabAgentSuggestion<T extends Turn$VocabAgentSuggestionArgs<ExtArgs> = {}>(args?: Subset<T, Turn$VocabAgentSuggestionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabAgentSuggestionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Turn model
   */ 
  interface TurnFieldRefs {
    readonly id: FieldRef<"Turn", 'String'>
    readonly conversationId: FieldRef<"Turn", 'String'>
    readonly userId: FieldRef<"Turn", 'String'>
    readonly message: FieldRef<"Turn", 'String'>
    readonly reply: FieldRef<"Turn", 'String'>
    readonly totalTokens: FieldRef<"Turn", 'Int'>
    readonly createdAt: FieldRef<"Turn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Turn findUnique
   */
  export type TurnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * Filter, which Turn to fetch.
     */
    where: TurnWhereUniqueInput
  }

  /**
   * Turn findUniqueOrThrow
   */
  export type TurnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * Filter, which Turn to fetch.
     */
    where: TurnWhereUniqueInput
  }

  /**
   * Turn findFirst
   */
  export type TurnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * Filter, which Turn to fetch.
     */
    where?: TurnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turns to fetch.
     */
    orderBy?: TurnOrderByWithRelationInput | TurnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turns.
     */
    cursor?: TurnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turns.
     */
    distinct?: TurnScalarFieldEnum | TurnScalarFieldEnum[]
  }

  /**
   * Turn findFirstOrThrow
   */
  export type TurnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * Filter, which Turn to fetch.
     */
    where?: TurnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turns to fetch.
     */
    orderBy?: TurnOrderByWithRelationInput | TurnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Turns.
     */
    cursor?: TurnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Turns.
     */
    distinct?: TurnScalarFieldEnum | TurnScalarFieldEnum[]
  }

  /**
   * Turn findMany
   */
  export type TurnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * Filter, which Turns to fetch.
     */
    where?: TurnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Turns to fetch.
     */
    orderBy?: TurnOrderByWithRelationInput | TurnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Turns.
     */
    cursor?: TurnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Turns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Turns.
     */
    skip?: number
    distinct?: TurnScalarFieldEnum | TurnScalarFieldEnum[]
  }

  /**
   * Turn create
   */
  export type TurnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * The data needed to create a Turn.
     */
    data: XOR<TurnCreateInput, TurnUncheckedCreateInput>
  }

  /**
   * Turn createMany
   */
  export type TurnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Turns.
     */
    data: TurnCreateManyInput | TurnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Turn createManyAndReturn
   */
  export type TurnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Turns.
     */
    data: TurnCreateManyInput | TurnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Turn update
   */
  export type TurnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * The data needed to update a Turn.
     */
    data: XOR<TurnUpdateInput, TurnUncheckedUpdateInput>
    /**
     * Choose, which Turn to update.
     */
    where: TurnWhereUniqueInput
  }

  /**
   * Turn updateMany
   */
  export type TurnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Turns.
     */
    data: XOR<TurnUpdateManyMutationInput, TurnUncheckedUpdateManyInput>
    /**
     * Filter which Turns to update
     */
    where?: TurnWhereInput
  }

  /**
   * Turn upsert
   */
  export type TurnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * The filter to search for the Turn to update in case it exists.
     */
    where: TurnWhereUniqueInput
    /**
     * In case the Turn found by the `where` argument doesn't exist, create a new Turn with this data.
     */
    create: XOR<TurnCreateInput, TurnUncheckedCreateInput>
    /**
     * In case the Turn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TurnUpdateInput, TurnUncheckedUpdateInput>
  }

  /**
   * Turn delete
   */
  export type TurnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
    /**
     * Filter which Turn to delete.
     */
    where: TurnWhereUniqueInput
  }

  /**
   * Turn deleteMany
   */
  export type TurnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Turns to delete
     */
    where?: TurnWhereInput
  }

  /**
   * Turn.VocabAgentSuggestion
   */
  export type Turn$VocabAgentSuggestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabAgentSuggestion
     */
    select?: VocabAgentSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabAgentSuggestionInclude<ExtArgs> | null
    where?: VocabAgentSuggestionWhereInput
    orderBy?: VocabAgentSuggestionOrderByWithRelationInput | VocabAgentSuggestionOrderByWithRelationInput[]
    cursor?: VocabAgentSuggestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VocabAgentSuggestionScalarFieldEnum | VocabAgentSuggestionScalarFieldEnum[]
  }

  /**
   * Turn without action
   */
  export type TurnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Turn
     */
    select?: TurnSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TurnInclude<ExtArgs> | null
  }


  /**
   * Model VocabAgentSuggestion
   */

  export type AggregateVocabAgentSuggestion = {
    _count: VocabAgentSuggestionCountAggregateOutputType | null
    _avg: VocabAgentSuggestionAvgAggregateOutputType | null
    _sum: VocabAgentSuggestionSumAggregateOutputType | null
    _min: VocabAgentSuggestionMinAggregateOutputType | null
    _max: VocabAgentSuggestionMaxAggregateOutputType | null
  }

  export type VocabAgentSuggestionAvgAggregateOutputType = {
    totalTokens: number | null
  }

  export type VocabAgentSuggestionSumAggregateOutputType = {
    totalTokens: number | null
  }

  export type VocabAgentSuggestionMinAggregateOutputType = {
    id: string | null
    turnId: string | null
    totalTokens: number | null
    enhancedText: string | null
    createdAt: Date | null
  }

  export type VocabAgentSuggestionMaxAggregateOutputType = {
    id: string | null
    turnId: string | null
    totalTokens: number | null
    enhancedText: string | null
    createdAt: Date | null
  }

  export type VocabAgentSuggestionCountAggregateOutputType = {
    id: number
    turnId: number
    totalTokens: number
    words: number
    enhancedText: number
    createdAt: number
    _all: number
  }


  export type VocabAgentSuggestionAvgAggregateInputType = {
    totalTokens?: true
  }

  export type VocabAgentSuggestionSumAggregateInputType = {
    totalTokens?: true
  }

  export type VocabAgentSuggestionMinAggregateInputType = {
    id?: true
    turnId?: true
    totalTokens?: true
    enhancedText?: true
    createdAt?: true
  }

  export type VocabAgentSuggestionMaxAggregateInputType = {
    id?: true
    turnId?: true
    totalTokens?: true
    enhancedText?: true
    createdAt?: true
  }

  export type VocabAgentSuggestionCountAggregateInputType = {
    id?: true
    turnId?: true
    totalTokens?: true
    words?: true
    enhancedText?: true
    createdAt?: true
    _all?: true
  }

  export type VocabAgentSuggestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VocabAgentSuggestion to aggregate.
     */
    where?: VocabAgentSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabAgentSuggestions to fetch.
     */
    orderBy?: VocabAgentSuggestionOrderByWithRelationInput | VocabAgentSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VocabAgentSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabAgentSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabAgentSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VocabAgentSuggestions
    **/
    _count?: true | VocabAgentSuggestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VocabAgentSuggestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VocabAgentSuggestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VocabAgentSuggestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VocabAgentSuggestionMaxAggregateInputType
  }

  export type GetVocabAgentSuggestionAggregateType<T extends VocabAgentSuggestionAggregateArgs> = {
        [P in keyof T & keyof AggregateVocabAgentSuggestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocabAgentSuggestion[P]>
      : GetScalarType<T[P], AggregateVocabAgentSuggestion[P]>
  }




  export type VocabAgentSuggestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabAgentSuggestionWhereInput
    orderBy?: VocabAgentSuggestionOrderByWithAggregationInput | VocabAgentSuggestionOrderByWithAggregationInput[]
    by: VocabAgentSuggestionScalarFieldEnum[] | VocabAgentSuggestionScalarFieldEnum
    having?: VocabAgentSuggestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VocabAgentSuggestionCountAggregateInputType | true
    _avg?: VocabAgentSuggestionAvgAggregateInputType
    _sum?: VocabAgentSuggestionSumAggregateInputType
    _min?: VocabAgentSuggestionMinAggregateInputType
    _max?: VocabAgentSuggestionMaxAggregateInputType
  }

  export type VocabAgentSuggestionGroupByOutputType = {
    id: string
    turnId: string
    totalTokens: number
    words: string[]
    enhancedText: string
    createdAt: Date
    _count: VocabAgentSuggestionCountAggregateOutputType | null
    _avg: VocabAgentSuggestionAvgAggregateOutputType | null
    _sum: VocabAgentSuggestionSumAggregateOutputType | null
    _min: VocabAgentSuggestionMinAggregateOutputType | null
    _max: VocabAgentSuggestionMaxAggregateOutputType | null
  }

  type GetVocabAgentSuggestionGroupByPayload<T extends VocabAgentSuggestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VocabAgentSuggestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VocabAgentSuggestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VocabAgentSuggestionGroupByOutputType[P]>
            : GetScalarType<T[P], VocabAgentSuggestionGroupByOutputType[P]>
        }
      >
    >


  export type VocabAgentSuggestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    turnId?: boolean
    totalTokens?: boolean
    words?: boolean
    enhancedText?: boolean
    createdAt?: boolean
    Turn?: boolean | TurnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabAgentSuggestion"]>

  export type VocabAgentSuggestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    turnId?: boolean
    totalTokens?: boolean
    words?: boolean
    enhancedText?: boolean
    createdAt?: boolean
    Turn?: boolean | TurnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabAgentSuggestion"]>

  export type VocabAgentSuggestionSelectScalar = {
    id?: boolean
    turnId?: boolean
    totalTokens?: boolean
    words?: boolean
    enhancedText?: boolean
    createdAt?: boolean
  }

  export type VocabAgentSuggestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Turn?: boolean | TurnDefaultArgs<ExtArgs>
  }
  export type VocabAgentSuggestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Turn?: boolean | TurnDefaultArgs<ExtArgs>
  }

  export type $VocabAgentSuggestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VocabAgentSuggestion"
    objects: {
      Turn: Prisma.$TurnPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      turnId: string
      totalTokens: number
      words: string[]
      enhancedText: string
      createdAt: Date
    }, ExtArgs["result"]["vocabAgentSuggestion"]>
    composites: {}
  }

  type VocabAgentSuggestionGetPayload<S extends boolean | null | undefined | VocabAgentSuggestionDefaultArgs> = $Result.GetResult<Prisma.$VocabAgentSuggestionPayload, S>

  type VocabAgentSuggestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VocabAgentSuggestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VocabAgentSuggestionCountAggregateInputType | true
    }

  export interface VocabAgentSuggestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VocabAgentSuggestion'], meta: { name: 'VocabAgentSuggestion' } }
    /**
     * Find zero or one VocabAgentSuggestion that matches the filter.
     * @param {VocabAgentSuggestionFindUniqueArgs} args - Arguments to find a VocabAgentSuggestion
     * @example
     * // Get one VocabAgentSuggestion
     * const vocabAgentSuggestion = await prisma.vocabAgentSuggestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VocabAgentSuggestionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VocabAgentSuggestionFindUniqueArgs<ExtArgs>>
    ): Prisma__VocabAgentSuggestionClient<$Result.GetResult<Prisma.$VocabAgentSuggestionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VocabAgentSuggestion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VocabAgentSuggestionFindUniqueOrThrowArgs} args - Arguments to find a VocabAgentSuggestion
     * @example
     * // Get one VocabAgentSuggestion
     * const vocabAgentSuggestion = await prisma.vocabAgentSuggestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VocabAgentSuggestionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabAgentSuggestionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VocabAgentSuggestionClient<$Result.GetResult<Prisma.$VocabAgentSuggestionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VocabAgentSuggestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabAgentSuggestionFindFirstArgs} args - Arguments to find a VocabAgentSuggestion
     * @example
     * // Get one VocabAgentSuggestion
     * const vocabAgentSuggestion = await prisma.vocabAgentSuggestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VocabAgentSuggestionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabAgentSuggestionFindFirstArgs<ExtArgs>>
    ): Prisma__VocabAgentSuggestionClient<$Result.GetResult<Prisma.$VocabAgentSuggestionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VocabAgentSuggestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabAgentSuggestionFindFirstOrThrowArgs} args - Arguments to find a VocabAgentSuggestion
     * @example
     * // Get one VocabAgentSuggestion
     * const vocabAgentSuggestion = await prisma.vocabAgentSuggestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VocabAgentSuggestionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabAgentSuggestionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VocabAgentSuggestionClient<$Result.GetResult<Prisma.$VocabAgentSuggestionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VocabAgentSuggestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabAgentSuggestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VocabAgentSuggestions
     * const vocabAgentSuggestions = await prisma.vocabAgentSuggestion.findMany()
     * 
     * // Get first 10 VocabAgentSuggestions
     * const vocabAgentSuggestions = await prisma.vocabAgentSuggestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vocabAgentSuggestionWithIdOnly = await prisma.vocabAgentSuggestion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VocabAgentSuggestionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabAgentSuggestionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabAgentSuggestionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VocabAgentSuggestion.
     * @param {VocabAgentSuggestionCreateArgs} args - Arguments to create a VocabAgentSuggestion.
     * @example
     * // Create one VocabAgentSuggestion
     * const VocabAgentSuggestion = await prisma.vocabAgentSuggestion.create({
     *   data: {
     *     // ... data to create a VocabAgentSuggestion
     *   }
     * })
     * 
    **/
    create<T extends VocabAgentSuggestionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VocabAgentSuggestionCreateArgs<ExtArgs>>
    ): Prisma__VocabAgentSuggestionClient<$Result.GetResult<Prisma.$VocabAgentSuggestionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VocabAgentSuggestions.
     * @param {VocabAgentSuggestionCreateManyArgs} args - Arguments to create many VocabAgentSuggestions.
     * @example
     * // Create many VocabAgentSuggestions
     * const vocabAgentSuggestion = await prisma.vocabAgentSuggestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VocabAgentSuggestionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabAgentSuggestionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VocabAgentSuggestions and returns the data saved in the database.
     * @param {VocabAgentSuggestionCreateManyAndReturnArgs} args - Arguments to create many VocabAgentSuggestions.
     * @example
     * // Create many VocabAgentSuggestions
     * const vocabAgentSuggestion = await prisma.vocabAgentSuggestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VocabAgentSuggestions and only return the `id`
     * const vocabAgentSuggestionWithIdOnly = await prisma.vocabAgentSuggestion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends VocabAgentSuggestionCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabAgentSuggestionCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabAgentSuggestionPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a VocabAgentSuggestion.
     * @param {VocabAgentSuggestionDeleteArgs} args - Arguments to delete one VocabAgentSuggestion.
     * @example
     * // Delete one VocabAgentSuggestion
     * const VocabAgentSuggestion = await prisma.vocabAgentSuggestion.delete({
     *   where: {
     *     // ... filter to delete one VocabAgentSuggestion
     *   }
     * })
     * 
    **/
    delete<T extends VocabAgentSuggestionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VocabAgentSuggestionDeleteArgs<ExtArgs>>
    ): Prisma__VocabAgentSuggestionClient<$Result.GetResult<Prisma.$VocabAgentSuggestionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VocabAgentSuggestion.
     * @param {VocabAgentSuggestionUpdateArgs} args - Arguments to update one VocabAgentSuggestion.
     * @example
     * // Update one VocabAgentSuggestion
     * const vocabAgentSuggestion = await prisma.vocabAgentSuggestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VocabAgentSuggestionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VocabAgentSuggestionUpdateArgs<ExtArgs>>
    ): Prisma__VocabAgentSuggestionClient<$Result.GetResult<Prisma.$VocabAgentSuggestionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VocabAgentSuggestions.
     * @param {VocabAgentSuggestionDeleteManyArgs} args - Arguments to filter VocabAgentSuggestions to delete.
     * @example
     * // Delete a few VocabAgentSuggestions
     * const { count } = await prisma.vocabAgentSuggestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VocabAgentSuggestionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabAgentSuggestionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VocabAgentSuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabAgentSuggestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VocabAgentSuggestions
     * const vocabAgentSuggestion = await prisma.vocabAgentSuggestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VocabAgentSuggestionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VocabAgentSuggestionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VocabAgentSuggestion.
     * @param {VocabAgentSuggestionUpsertArgs} args - Arguments to update or create a VocabAgentSuggestion.
     * @example
     * // Update or create a VocabAgentSuggestion
     * const vocabAgentSuggestion = await prisma.vocabAgentSuggestion.upsert({
     *   create: {
     *     // ... data to create a VocabAgentSuggestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VocabAgentSuggestion we want to update
     *   }
     * })
    **/
    upsert<T extends VocabAgentSuggestionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VocabAgentSuggestionUpsertArgs<ExtArgs>>
    ): Prisma__VocabAgentSuggestionClient<$Result.GetResult<Prisma.$VocabAgentSuggestionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VocabAgentSuggestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabAgentSuggestionCountArgs} args - Arguments to filter VocabAgentSuggestions to count.
     * @example
     * // Count the number of VocabAgentSuggestions
     * const count = await prisma.vocabAgentSuggestion.count({
     *   where: {
     *     // ... the filter for the VocabAgentSuggestions we want to count
     *   }
     * })
    **/
    count<T extends VocabAgentSuggestionCountArgs>(
      args?: Subset<T, VocabAgentSuggestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VocabAgentSuggestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VocabAgentSuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabAgentSuggestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VocabAgentSuggestionAggregateArgs>(args: Subset<T, VocabAgentSuggestionAggregateArgs>): Prisma.PrismaPromise<GetVocabAgentSuggestionAggregateType<T>>

    /**
     * Group by VocabAgentSuggestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabAgentSuggestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VocabAgentSuggestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VocabAgentSuggestionGroupByArgs['orderBy'] }
        : { orderBy?: VocabAgentSuggestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VocabAgentSuggestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocabAgentSuggestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VocabAgentSuggestion model
   */
  readonly fields: VocabAgentSuggestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VocabAgentSuggestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VocabAgentSuggestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Turn<T extends TurnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TurnDefaultArgs<ExtArgs>>): Prisma__TurnClient<$Result.GetResult<Prisma.$TurnPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VocabAgentSuggestion model
   */ 
  interface VocabAgentSuggestionFieldRefs {
    readonly id: FieldRef<"VocabAgentSuggestion", 'String'>
    readonly turnId: FieldRef<"VocabAgentSuggestion", 'String'>
    readonly totalTokens: FieldRef<"VocabAgentSuggestion", 'Int'>
    readonly words: FieldRef<"VocabAgentSuggestion", 'String[]'>
    readonly enhancedText: FieldRef<"VocabAgentSuggestion", 'String'>
    readonly createdAt: FieldRef<"VocabAgentSuggestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VocabAgentSuggestion findUnique
   */
  export type VocabAgentSuggestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabAgentSuggestion
     */
    select?: VocabAgentSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabAgentSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which VocabAgentSuggestion to fetch.
     */
    where: VocabAgentSuggestionWhereUniqueInput
  }

  /**
   * VocabAgentSuggestion findUniqueOrThrow
   */
  export type VocabAgentSuggestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabAgentSuggestion
     */
    select?: VocabAgentSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabAgentSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which VocabAgentSuggestion to fetch.
     */
    where: VocabAgentSuggestionWhereUniqueInput
  }

  /**
   * VocabAgentSuggestion findFirst
   */
  export type VocabAgentSuggestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabAgentSuggestion
     */
    select?: VocabAgentSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabAgentSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which VocabAgentSuggestion to fetch.
     */
    where?: VocabAgentSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabAgentSuggestions to fetch.
     */
    orderBy?: VocabAgentSuggestionOrderByWithRelationInput | VocabAgentSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VocabAgentSuggestions.
     */
    cursor?: VocabAgentSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabAgentSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabAgentSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VocabAgentSuggestions.
     */
    distinct?: VocabAgentSuggestionScalarFieldEnum | VocabAgentSuggestionScalarFieldEnum[]
  }

  /**
   * VocabAgentSuggestion findFirstOrThrow
   */
  export type VocabAgentSuggestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabAgentSuggestion
     */
    select?: VocabAgentSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabAgentSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which VocabAgentSuggestion to fetch.
     */
    where?: VocabAgentSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabAgentSuggestions to fetch.
     */
    orderBy?: VocabAgentSuggestionOrderByWithRelationInput | VocabAgentSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VocabAgentSuggestions.
     */
    cursor?: VocabAgentSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabAgentSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabAgentSuggestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VocabAgentSuggestions.
     */
    distinct?: VocabAgentSuggestionScalarFieldEnum | VocabAgentSuggestionScalarFieldEnum[]
  }

  /**
   * VocabAgentSuggestion findMany
   */
  export type VocabAgentSuggestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabAgentSuggestion
     */
    select?: VocabAgentSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabAgentSuggestionInclude<ExtArgs> | null
    /**
     * Filter, which VocabAgentSuggestions to fetch.
     */
    where?: VocabAgentSuggestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabAgentSuggestions to fetch.
     */
    orderBy?: VocabAgentSuggestionOrderByWithRelationInput | VocabAgentSuggestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VocabAgentSuggestions.
     */
    cursor?: VocabAgentSuggestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabAgentSuggestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabAgentSuggestions.
     */
    skip?: number
    distinct?: VocabAgentSuggestionScalarFieldEnum | VocabAgentSuggestionScalarFieldEnum[]
  }

  /**
   * VocabAgentSuggestion create
   */
  export type VocabAgentSuggestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabAgentSuggestion
     */
    select?: VocabAgentSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabAgentSuggestionInclude<ExtArgs> | null
    /**
     * The data needed to create a VocabAgentSuggestion.
     */
    data: XOR<VocabAgentSuggestionCreateInput, VocabAgentSuggestionUncheckedCreateInput>
  }

  /**
   * VocabAgentSuggestion createMany
   */
  export type VocabAgentSuggestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VocabAgentSuggestions.
     */
    data: VocabAgentSuggestionCreateManyInput | VocabAgentSuggestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VocabAgentSuggestion createManyAndReturn
   */
  export type VocabAgentSuggestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabAgentSuggestion
     */
    select?: VocabAgentSuggestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VocabAgentSuggestions.
     */
    data: VocabAgentSuggestionCreateManyInput | VocabAgentSuggestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabAgentSuggestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VocabAgentSuggestion update
   */
  export type VocabAgentSuggestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabAgentSuggestion
     */
    select?: VocabAgentSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabAgentSuggestionInclude<ExtArgs> | null
    /**
     * The data needed to update a VocabAgentSuggestion.
     */
    data: XOR<VocabAgentSuggestionUpdateInput, VocabAgentSuggestionUncheckedUpdateInput>
    /**
     * Choose, which VocabAgentSuggestion to update.
     */
    where: VocabAgentSuggestionWhereUniqueInput
  }

  /**
   * VocabAgentSuggestion updateMany
   */
  export type VocabAgentSuggestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VocabAgentSuggestions.
     */
    data: XOR<VocabAgentSuggestionUpdateManyMutationInput, VocabAgentSuggestionUncheckedUpdateManyInput>
    /**
     * Filter which VocabAgentSuggestions to update
     */
    where?: VocabAgentSuggestionWhereInput
  }

  /**
   * VocabAgentSuggestion upsert
   */
  export type VocabAgentSuggestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabAgentSuggestion
     */
    select?: VocabAgentSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabAgentSuggestionInclude<ExtArgs> | null
    /**
     * The filter to search for the VocabAgentSuggestion to update in case it exists.
     */
    where: VocabAgentSuggestionWhereUniqueInput
    /**
     * In case the VocabAgentSuggestion found by the `where` argument doesn't exist, create a new VocabAgentSuggestion with this data.
     */
    create: XOR<VocabAgentSuggestionCreateInput, VocabAgentSuggestionUncheckedCreateInput>
    /**
     * In case the VocabAgentSuggestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VocabAgentSuggestionUpdateInput, VocabAgentSuggestionUncheckedUpdateInput>
  }

  /**
   * VocabAgentSuggestion delete
   */
  export type VocabAgentSuggestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabAgentSuggestion
     */
    select?: VocabAgentSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabAgentSuggestionInclude<ExtArgs> | null
    /**
     * Filter which VocabAgentSuggestion to delete.
     */
    where: VocabAgentSuggestionWhereUniqueInput
  }

  /**
   * VocabAgentSuggestion deleteMany
   */
  export type VocabAgentSuggestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VocabAgentSuggestions to delete
     */
    where?: VocabAgentSuggestionWhereInput
  }

  /**
   * VocabAgentSuggestion without action
   */
  export type VocabAgentSuggestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabAgentSuggestion
     */
    select?: VocabAgentSuggestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabAgentSuggestionInclude<ExtArgs> | null
  }


  /**
   * Model VocabularyBucket
   */

  export type AggregateVocabularyBucket = {
    _count: VocabularyBucketCountAggregateOutputType | null
    _min: VocabularyBucketMinAggregateOutputType | null
    _max: VocabularyBucketMaxAggregateOutputType | null
  }

  export type VocabularyBucketMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    createdAt: Date | null
  }

  export type VocabularyBucketMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    createdAt: Date | null
  }

  export type VocabularyBucketCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    createdAt: number
    _all: number
  }


  export type VocabularyBucketMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
  }

  export type VocabularyBucketMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
  }

  export type VocabularyBucketCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    createdAt?: true
    _all?: true
  }

  export type VocabularyBucketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VocabularyBucket to aggregate.
     */
    where?: VocabularyBucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabularyBuckets to fetch.
     */
    orderBy?: VocabularyBucketOrderByWithRelationInput | VocabularyBucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VocabularyBucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabularyBuckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabularyBuckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VocabularyBuckets
    **/
    _count?: true | VocabularyBucketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VocabularyBucketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VocabularyBucketMaxAggregateInputType
  }

  export type GetVocabularyBucketAggregateType<T extends VocabularyBucketAggregateArgs> = {
        [P in keyof T & keyof AggregateVocabularyBucket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocabularyBucket[P]>
      : GetScalarType<T[P], AggregateVocabularyBucket[P]>
  }




  export type VocabularyBucketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyBucketWhereInput
    orderBy?: VocabularyBucketOrderByWithAggregationInput | VocabularyBucketOrderByWithAggregationInput[]
    by: VocabularyBucketScalarFieldEnum[] | VocabularyBucketScalarFieldEnum
    having?: VocabularyBucketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VocabularyBucketCountAggregateInputType | true
    _min?: VocabularyBucketMinAggregateInputType
    _max?: VocabularyBucketMaxAggregateInputType
  }

  export type VocabularyBucketGroupByOutputType = {
    id: string
    userId: string
    title: string
    createdAt: Date
    _count: VocabularyBucketCountAggregateOutputType | null
    _min: VocabularyBucketMinAggregateOutputType | null
    _max: VocabularyBucketMaxAggregateOutputType | null
  }

  type GetVocabularyBucketGroupByPayload<T extends VocabularyBucketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VocabularyBucketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VocabularyBucketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VocabularyBucketGroupByOutputType[P]>
            : GetScalarType<T[P], VocabularyBucketGroupByOutputType[P]>
        }
      >
    >


  export type VocabularyBucketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Vocabulary?: boolean | VocabularyBucket$VocabularyArgs<ExtArgs>
    _count?: boolean | VocabularyBucketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabularyBucket"]>

  export type VocabularyBucketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabularyBucket"]>

  export type VocabularyBucketSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    createdAt?: boolean
  }

  export type VocabularyBucketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Vocabulary?: boolean | VocabularyBucket$VocabularyArgs<ExtArgs>
    _count?: boolean | VocabularyBucketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VocabularyBucketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VocabularyBucketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VocabularyBucket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Vocabulary: Prisma.$VocabularyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      createdAt: Date
    }, ExtArgs["result"]["vocabularyBucket"]>
    composites: {}
  }

  type VocabularyBucketGetPayload<S extends boolean | null | undefined | VocabularyBucketDefaultArgs> = $Result.GetResult<Prisma.$VocabularyBucketPayload, S>

  type VocabularyBucketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VocabularyBucketFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VocabularyBucketCountAggregateInputType | true
    }

  export interface VocabularyBucketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VocabularyBucket'], meta: { name: 'VocabularyBucket' } }
    /**
     * Find zero or one VocabularyBucket that matches the filter.
     * @param {VocabularyBucketFindUniqueArgs} args - Arguments to find a VocabularyBucket
     * @example
     * // Get one VocabularyBucket
     * const vocabularyBucket = await prisma.vocabularyBucket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VocabularyBucketFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VocabularyBucketFindUniqueArgs<ExtArgs>>
    ): Prisma__VocabularyBucketClient<$Result.GetResult<Prisma.$VocabularyBucketPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VocabularyBucket that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VocabularyBucketFindUniqueOrThrowArgs} args - Arguments to find a VocabularyBucket
     * @example
     * // Get one VocabularyBucket
     * const vocabularyBucket = await prisma.vocabularyBucket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VocabularyBucketFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyBucketFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VocabularyBucketClient<$Result.GetResult<Prisma.$VocabularyBucketPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VocabularyBucket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyBucketFindFirstArgs} args - Arguments to find a VocabularyBucket
     * @example
     * // Get one VocabularyBucket
     * const vocabularyBucket = await prisma.vocabularyBucket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VocabularyBucketFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyBucketFindFirstArgs<ExtArgs>>
    ): Prisma__VocabularyBucketClient<$Result.GetResult<Prisma.$VocabularyBucketPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VocabularyBucket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyBucketFindFirstOrThrowArgs} args - Arguments to find a VocabularyBucket
     * @example
     * // Get one VocabularyBucket
     * const vocabularyBucket = await prisma.vocabularyBucket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VocabularyBucketFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyBucketFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VocabularyBucketClient<$Result.GetResult<Prisma.$VocabularyBucketPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VocabularyBuckets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyBucketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VocabularyBuckets
     * const vocabularyBuckets = await prisma.vocabularyBucket.findMany()
     * 
     * // Get first 10 VocabularyBuckets
     * const vocabularyBuckets = await prisma.vocabularyBucket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vocabularyBucketWithIdOnly = await prisma.vocabularyBucket.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VocabularyBucketFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyBucketFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyBucketPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VocabularyBucket.
     * @param {VocabularyBucketCreateArgs} args - Arguments to create a VocabularyBucket.
     * @example
     * // Create one VocabularyBucket
     * const VocabularyBucket = await prisma.vocabularyBucket.create({
     *   data: {
     *     // ... data to create a VocabularyBucket
     *   }
     * })
     * 
    **/
    create<T extends VocabularyBucketCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VocabularyBucketCreateArgs<ExtArgs>>
    ): Prisma__VocabularyBucketClient<$Result.GetResult<Prisma.$VocabularyBucketPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VocabularyBuckets.
     * @param {VocabularyBucketCreateManyArgs} args - Arguments to create many VocabularyBuckets.
     * @example
     * // Create many VocabularyBuckets
     * const vocabularyBucket = await prisma.vocabularyBucket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VocabularyBucketCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyBucketCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VocabularyBuckets and returns the data saved in the database.
     * @param {VocabularyBucketCreateManyAndReturnArgs} args - Arguments to create many VocabularyBuckets.
     * @example
     * // Create many VocabularyBuckets
     * const vocabularyBucket = await prisma.vocabularyBucket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VocabularyBuckets and only return the `id`
     * const vocabularyBucketWithIdOnly = await prisma.vocabularyBucket.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends VocabularyBucketCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyBucketCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyBucketPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a VocabularyBucket.
     * @param {VocabularyBucketDeleteArgs} args - Arguments to delete one VocabularyBucket.
     * @example
     * // Delete one VocabularyBucket
     * const VocabularyBucket = await prisma.vocabularyBucket.delete({
     *   where: {
     *     // ... filter to delete one VocabularyBucket
     *   }
     * })
     * 
    **/
    delete<T extends VocabularyBucketDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VocabularyBucketDeleteArgs<ExtArgs>>
    ): Prisma__VocabularyBucketClient<$Result.GetResult<Prisma.$VocabularyBucketPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VocabularyBucket.
     * @param {VocabularyBucketUpdateArgs} args - Arguments to update one VocabularyBucket.
     * @example
     * // Update one VocabularyBucket
     * const vocabularyBucket = await prisma.vocabularyBucket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VocabularyBucketUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VocabularyBucketUpdateArgs<ExtArgs>>
    ): Prisma__VocabularyBucketClient<$Result.GetResult<Prisma.$VocabularyBucketPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VocabularyBuckets.
     * @param {VocabularyBucketDeleteManyArgs} args - Arguments to filter VocabularyBuckets to delete.
     * @example
     * // Delete a few VocabularyBuckets
     * const { count } = await prisma.vocabularyBucket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VocabularyBucketDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyBucketDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VocabularyBuckets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyBucketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VocabularyBuckets
     * const vocabularyBucket = await prisma.vocabularyBucket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VocabularyBucketUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VocabularyBucketUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VocabularyBucket.
     * @param {VocabularyBucketUpsertArgs} args - Arguments to update or create a VocabularyBucket.
     * @example
     * // Update or create a VocabularyBucket
     * const vocabularyBucket = await prisma.vocabularyBucket.upsert({
     *   create: {
     *     // ... data to create a VocabularyBucket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VocabularyBucket we want to update
     *   }
     * })
    **/
    upsert<T extends VocabularyBucketUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VocabularyBucketUpsertArgs<ExtArgs>>
    ): Prisma__VocabularyBucketClient<$Result.GetResult<Prisma.$VocabularyBucketPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VocabularyBuckets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyBucketCountArgs} args - Arguments to filter VocabularyBuckets to count.
     * @example
     * // Count the number of VocabularyBuckets
     * const count = await prisma.vocabularyBucket.count({
     *   where: {
     *     // ... the filter for the VocabularyBuckets we want to count
     *   }
     * })
    **/
    count<T extends VocabularyBucketCountArgs>(
      args?: Subset<T, VocabularyBucketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VocabularyBucketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VocabularyBucket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyBucketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VocabularyBucketAggregateArgs>(args: Subset<T, VocabularyBucketAggregateArgs>): Prisma.PrismaPromise<GetVocabularyBucketAggregateType<T>>

    /**
     * Group by VocabularyBucket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyBucketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VocabularyBucketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VocabularyBucketGroupByArgs['orderBy'] }
        : { orderBy?: VocabularyBucketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VocabularyBucketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocabularyBucketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VocabularyBucket model
   */
  readonly fields: VocabularyBucketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VocabularyBucket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VocabularyBucketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Vocabulary<T extends VocabularyBucket$VocabularyArgs<ExtArgs> = {}>(args?: Subset<T, VocabularyBucket$VocabularyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VocabularyBucket model
   */ 
  interface VocabularyBucketFieldRefs {
    readonly id: FieldRef<"VocabularyBucket", 'String'>
    readonly userId: FieldRef<"VocabularyBucket", 'String'>
    readonly title: FieldRef<"VocabularyBucket", 'String'>
    readonly createdAt: FieldRef<"VocabularyBucket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VocabularyBucket findUnique
   */
  export type VocabularyBucketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucket
     */
    select?: VocabularyBucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyBucketInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyBucket to fetch.
     */
    where: VocabularyBucketWhereUniqueInput
  }

  /**
   * VocabularyBucket findUniqueOrThrow
   */
  export type VocabularyBucketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucket
     */
    select?: VocabularyBucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyBucketInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyBucket to fetch.
     */
    where: VocabularyBucketWhereUniqueInput
  }

  /**
   * VocabularyBucket findFirst
   */
  export type VocabularyBucketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucket
     */
    select?: VocabularyBucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyBucketInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyBucket to fetch.
     */
    where?: VocabularyBucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabularyBuckets to fetch.
     */
    orderBy?: VocabularyBucketOrderByWithRelationInput | VocabularyBucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VocabularyBuckets.
     */
    cursor?: VocabularyBucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabularyBuckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabularyBuckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VocabularyBuckets.
     */
    distinct?: VocabularyBucketScalarFieldEnum | VocabularyBucketScalarFieldEnum[]
  }

  /**
   * VocabularyBucket findFirstOrThrow
   */
  export type VocabularyBucketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucket
     */
    select?: VocabularyBucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyBucketInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyBucket to fetch.
     */
    where?: VocabularyBucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabularyBuckets to fetch.
     */
    orderBy?: VocabularyBucketOrderByWithRelationInput | VocabularyBucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VocabularyBuckets.
     */
    cursor?: VocabularyBucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabularyBuckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabularyBuckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VocabularyBuckets.
     */
    distinct?: VocabularyBucketScalarFieldEnum | VocabularyBucketScalarFieldEnum[]
  }

  /**
   * VocabularyBucket findMany
   */
  export type VocabularyBucketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucket
     */
    select?: VocabularyBucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyBucketInclude<ExtArgs> | null
    /**
     * Filter, which VocabularyBuckets to fetch.
     */
    where?: VocabularyBucketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VocabularyBuckets to fetch.
     */
    orderBy?: VocabularyBucketOrderByWithRelationInput | VocabularyBucketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VocabularyBuckets.
     */
    cursor?: VocabularyBucketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VocabularyBuckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VocabularyBuckets.
     */
    skip?: number
    distinct?: VocabularyBucketScalarFieldEnum | VocabularyBucketScalarFieldEnum[]
  }

  /**
   * VocabularyBucket create
   */
  export type VocabularyBucketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucket
     */
    select?: VocabularyBucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyBucketInclude<ExtArgs> | null
    /**
     * The data needed to create a VocabularyBucket.
     */
    data: XOR<VocabularyBucketCreateInput, VocabularyBucketUncheckedCreateInput>
  }

  /**
   * VocabularyBucket createMany
   */
  export type VocabularyBucketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VocabularyBuckets.
     */
    data: VocabularyBucketCreateManyInput | VocabularyBucketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VocabularyBucket createManyAndReturn
   */
  export type VocabularyBucketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucket
     */
    select?: VocabularyBucketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VocabularyBuckets.
     */
    data: VocabularyBucketCreateManyInput | VocabularyBucketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyBucketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VocabularyBucket update
   */
  export type VocabularyBucketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucket
     */
    select?: VocabularyBucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyBucketInclude<ExtArgs> | null
    /**
     * The data needed to update a VocabularyBucket.
     */
    data: XOR<VocabularyBucketUpdateInput, VocabularyBucketUncheckedUpdateInput>
    /**
     * Choose, which VocabularyBucket to update.
     */
    where: VocabularyBucketWhereUniqueInput
  }

  /**
   * VocabularyBucket updateMany
   */
  export type VocabularyBucketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VocabularyBuckets.
     */
    data: XOR<VocabularyBucketUpdateManyMutationInput, VocabularyBucketUncheckedUpdateManyInput>
    /**
     * Filter which VocabularyBuckets to update
     */
    where?: VocabularyBucketWhereInput
  }

  /**
   * VocabularyBucket upsert
   */
  export type VocabularyBucketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucket
     */
    select?: VocabularyBucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyBucketInclude<ExtArgs> | null
    /**
     * The filter to search for the VocabularyBucket to update in case it exists.
     */
    where: VocabularyBucketWhereUniqueInput
    /**
     * In case the VocabularyBucket found by the `where` argument doesn't exist, create a new VocabularyBucket with this data.
     */
    create: XOR<VocabularyBucketCreateInput, VocabularyBucketUncheckedCreateInput>
    /**
     * In case the VocabularyBucket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VocabularyBucketUpdateInput, VocabularyBucketUncheckedUpdateInput>
  }

  /**
   * VocabularyBucket delete
   */
  export type VocabularyBucketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucket
     */
    select?: VocabularyBucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyBucketInclude<ExtArgs> | null
    /**
     * Filter which VocabularyBucket to delete.
     */
    where: VocabularyBucketWhereUniqueInput
  }

  /**
   * VocabularyBucket deleteMany
   */
  export type VocabularyBucketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VocabularyBuckets to delete
     */
    where?: VocabularyBucketWhereInput
  }

  /**
   * VocabularyBucket.Vocabulary
   */
  export type VocabularyBucket$VocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    where?: VocabularyWhereInput
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    cursor?: VocabularyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * VocabularyBucket without action
   */
  export type VocabularyBucketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VocabularyBucket
     */
    select?: VocabularyBucketSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyBucketInclude<ExtArgs> | null
  }


  /**
   * Model Vocabulary
   */

  export type AggregateVocabulary = {
    _count: VocabularyCountAggregateOutputType | null
    _min: VocabularyMinAggregateOutputType | null
    _max: VocabularyMaxAggregateOutputType | null
  }

  export type VocabularyMinAggregateOutputType = {
    id: string | null
    bucketId: string | null
    wordOrPhrase: string | null
    createdAt: Date | null
  }

  export type VocabularyMaxAggregateOutputType = {
    id: string | null
    bucketId: string | null
    wordOrPhrase: string | null
    createdAt: Date | null
  }

  export type VocabularyCountAggregateOutputType = {
    id: number
    bucketId: number
    wordOrPhrase: number
    createdAt: number
    _all: number
  }


  export type VocabularyMinAggregateInputType = {
    id?: true
    bucketId?: true
    wordOrPhrase?: true
    createdAt?: true
  }

  export type VocabularyMaxAggregateInputType = {
    id?: true
    bucketId?: true
    wordOrPhrase?: true
    createdAt?: true
  }

  export type VocabularyCountAggregateInputType = {
    id?: true
    bucketId?: true
    wordOrPhrase?: true
    createdAt?: true
    _all?: true
  }

  export type VocabularyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vocabulary to aggregate.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vocabularies
    **/
    _count?: true | VocabularyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VocabularyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VocabularyMaxAggregateInputType
  }

  export type GetVocabularyAggregateType<T extends VocabularyAggregateArgs> = {
        [P in keyof T & keyof AggregateVocabulary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocabulary[P]>
      : GetScalarType<T[P], AggregateVocabulary[P]>
  }




  export type VocabularyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VocabularyWhereInput
    orderBy?: VocabularyOrderByWithAggregationInput | VocabularyOrderByWithAggregationInput[]
    by: VocabularyScalarFieldEnum[] | VocabularyScalarFieldEnum
    having?: VocabularyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VocabularyCountAggregateInputType | true
    _min?: VocabularyMinAggregateInputType
    _max?: VocabularyMaxAggregateInputType
  }

  export type VocabularyGroupByOutputType = {
    id: string
    bucketId: string
    wordOrPhrase: string
    createdAt: Date
    _count: VocabularyCountAggregateOutputType | null
    _min: VocabularyMinAggregateOutputType | null
    _max: VocabularyMaxAggregateOutputType | null
  }

  type GetVocabularyGroupByPayload<T extends VocabularyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VocabularyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VocabularyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VocabularyGroupByOutputType[P]>
            : GetScalarType<T[P], VocabularyGroupByOutputType[P]>
        }
      >
    >


  export type VocabularySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bucketId?: boolean
    wordOrPhrase?: boolean
    createdAt?: boolean
    bucket?: boolean | VocabularyBucketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabulary"]>

  export type VocabularySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bucketId?: boolean
    wordOrPhrase?: boolean
    createdAt?: boolean
    bucket?: boolean | VocabularyBucketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocabulary"]>

  export type VocabularySelectScalar = {
    id?: boolean
    bucketId?: boolean
    wordOrPhrase?: boolean
    createdAt?: boolean
  }

  export type VocabularyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bucket?: boolean | VocabularyBucketDefaultArgs<ExtArgs>
  }
  export type VocabularyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bucket?: boolean | VocabularyBucketDefaultArgs<ExtArgs>
  }

  export type $VocabularyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vocabulary"
    objects: {
      bucket: Prisma.$VocabularyBucketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bucketId: string
      wordOrPhrase: string
      createdAt: Date
    }, ExtArgs["result"]["vocabulary"]>
    composites: {}
  }

  type VocabularyGetPayload<S extends boolean | null | undefined | VocabularyDefaultArgs> = $Result.GetResult<Prisma.$VocabularyPayload, S>

  type VocabularyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VocabularyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VocabularyCountAggregateInputType | true
    }

  export interface VocabularyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vocabulary'], meta: { name: 'Vocabulary' } }
    /**
     * Find zero or one Vocabulary that matches the filter.
     * @param {VocabularyFindUniqueArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VocabularyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VocabularyFindUniqueArgs<ExtArgs>>
    ): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Vocabulary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VocabularyFindUniqueOrThrowArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VocabularyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Vocabulary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyFindFirstArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VocabularyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyFindFirstArgs<ExtArgs>>
    ): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Vocabulary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyFindFirstOrThrowArgs} args - Arguments to find a Vocabulary
     * @example
     * // Get one Vocabulary
     * const vocabulary = await prisma.vocabulary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VocabularyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Vocabularies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vocabularies
     * const vocabularies = await prisma.vocabulary.findMany()
     * 
     * // Get first 10 Vocabularies
     * const vocabularies = await prisma.vocabulary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vocabularyWithIdOnly = await prisma.vocabulary.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VocabularyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Vocabulary.
     * @param {VocabularyCreateArgs} args - Arguments to create a Vocabulary.
     * @example
     * // Create one Vocabulary
     * const Vocabulary = await prisma.vocabulary.create({
     *   data: {
     *     // ... data to create a Vocabulary
     *   }
     * })
     * 
    **/
    create<T extends VocabularyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VocabularyCreateArgs<ExtArgs>>
    ): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Vocabularies.
     * @param {VocabularyCreateManyArgs} args - Arguments to create many Vocabularies.
     * @example
     * // Create many Vocabularies
     * const vocabulary = await prisma.vocabulary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends VocabularyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vocabularies and returns the data saved in the database.
     * @param {VocabularyCreateManyAndReturnArgs} args - Arguments to create many Vocabularies.
     * @example
     * // Create many Vocabularies
     * const vocabulary = await prisma.vocabulary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vocabularies and only return the `id`
     * const vocabularyWithIdOnly = await prisma.vocabulary.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends VocabularyCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Vocabulary.
     * @param {VocabularyDeleteArgs} args - Arguments to delete one Vocabulary.
     * @example
     * // Delete one Vocabulary
     * const Vocabulary = await prisma.vocabulary.delete({
     *   where: {
     *     // ... filter to delete one Vocabulary
     *   }
     * })
     * 
    **/
    delete<T extends VocabularyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VocabularyDeleteArgs<ExtArgs>>
    ): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Vocabulary.
     * @param {VocabularyUpdateArgs} args - Arguments to update one Vocabulary.
     * @example
     * // Update one Vocabulary
     * const vocabulary = await prisma.vocabulary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VocabularyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VocabularyUpdateArgs<ExtArgs>>
    ): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Vocabularies.
     * @param {VocabularyDeleteManyArgs} args - Arguments to filter Vocabularies to delete.
     * @example
     * // Delete a few Vocabularies
     * const { count } = await prisma.vocabulary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VocabularyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VocabularyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocabularies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vocabularies
     * const vocabulary = await prisma.vocabulary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VocabularyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VocabularyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vocabulary.
     * @param {VocabularyUpsertArgs} args - Arguments to update or create a Vocabulary.
     * @example
     * // Update or create a Vocabulary
     * const vocabulary = await prisma.vocabulary.upsert({
     *   create: {
     *     // ... data to create a Vocabulary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vocabulary we want to update
     *   }
     * })
    **/
    upsert<T extends VocabularyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VocabularyUpsertArgs<ExtArgs>>
    ): Prisma__VocabularyClient<$Result.GetResult<Prisma.$VocabularyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Vocabularies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyCountArgs} args - Arguments to filter Vocabularies to count.
     * @example
     * // Count the number of Vocabularies
     * const count = await prisma.vocabulary.count({
     *   where: {
     *     // ... the filter for the Vocabularies we want to count
     *   }
     * })
    **/
    count<T extends VocabularyCountArgs>(
      args?: Subset<T, VocabularyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VocabularyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vocabulary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VocabularyAggregateArgs>(args: Subset<T, VocabularyAggregateArgs>): Prisma.PrismaPromise<GetVocabularyAggregateType<T>>

    /**
     * Group by Vocabulary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VocabularyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VocabularyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VocabularyGroupByArgs['orderBy'] }
        : { orderBy?: VocabularyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VocabularyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocabularyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vocabulary model
   */
  readonly fields: VocabularyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vocabulary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VocabularyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    bucket<T extends VocabularyBucketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VocabularyBucketDefaultArgs<ExtArgs>>): Prisma__VocabularyBucketClient<$Result.GetResult<Prisma.$VocabularyBucketPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Vocabulary model
   */ 
  interface VocabularyFieldRefs {
    readonly id: FieldRef<"Vocabulary", 'String'>
    readonly bucketId: FieldRef<"Vocabulary", 'String'>
    readonly wordOrPhrase: FieldRef<"Vocabulary", 'String'>
    readonly createdAt: FieldRef<"Vocabulary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vocabulary findUnique
   */
  export type VocabularyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary findUniqueOrThrow
   */
  export type VocabularyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary findFirst
   */
  export type VocabularyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vocabularies.
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vocabularies.
     */
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Vocabulary findFirstOrThrow
   */
  export type VocabularyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabulary to fetch.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vocabularies.
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vocabularies.
     */
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Vocabulary findMany
   */
  export type VocabularyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter, which Vocabularies to fetch.
     */
    where?: VocabularyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vocabularies to fetch.
     */
    orderBy?: VocabularyOrderByWithRelationInput | VocabularyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vocabularies.
     */
    cursor?: VocabularyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vocabularies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vocabularies.
     */
    skip?: number
    distinct?: VocabularyScalarFieldEnum | VocabularyScalarFieldEnum[]
  }

  /**
   * Vocabulary create
   */
  export type VocabularyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * The data needed to create a Vocabulary.
     */
    data: XOR<VocabularyCreateInput, VocabularyUncheckedCreateInput>
  }

  /**
   * Vocabulary createMany
   */
  export type VocabularyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vocabularies.
     */
    data: VocabularyCreateManyInput | VocabularyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vocabulary createManyAndReturn
   */
  export type VocabularyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vocabularies.
     */
    data: VocabularyCreateManyInput | VocabularyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vocabulary update
   */
  export type VocabularyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * The data needed to update a Vocabulary.
     */
    data: XOR<VocabularyUpdateInput, VocabularyUncheckedUpdateInput>
    /**
     * Choose, which Vocabulary to update.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary updateMany
   */
  export type VocabularyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vocabularies.
     */
    data: XOR<VocabularyUpdateManyMutationInput, VocabularyUncheckedUpdateManyInput>
    /**
     * Filter which Vocabularies to update
     */
    where?: VocabularyWhereInput
  }

  /**
   * Vocabulary upsert
   */
  export type VocabularyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * The filter to search for the Vocabulary to update in case it exists.
     */
    where: VocabularyWhereUniqueInput
    /**
     * In case the Vocabulary found by the `where` argument doesn't exist, create a new Vocabulary with this data.
     */
    create: XOR<VocabularyCreateInput, VocabularyUncheckedCreateInput>
    /**
     * In case the Vocabulary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VocabularyUpdateInput, VocabularyUncheckedUpdateInput>
  }

  /**
   * Vocabulary delete
   */
  export type VocabularyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
    /**
     * Filter which Vocabulary to delete.
     */
    where: VocabularyWhereUniqueInput
  }

  /**
   * Vocabulary deleteMany
   */
  export type VocabularyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vocabularies to delete
     */
    where?: VocabularyWhereInput
  }

  /**
   * Vocabulary without action
   */
  export type VocabularyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocabulary
     */
    select?: VocabularySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VocabularyInclude<ExtArgs> | null
  }


  /**
   * Model Roleplay
   */

  export type AggregateRoleplay = {
    _count: RoleplayCountAggregateOutputType | null
    _min: RoleplayMinAggregateOutputType | null
    _max: RoleplayMaxAggregateOutputType | null
  }

  export type RoleplayMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    assistantRole: string | null
    userRole: string | null
    conversationTone: string | null
    conversationContext: string | null
    createdAt: Date | null
  }

  export type RoleplayMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    assistantRole: string | null
    userRole: string | null
    conversationTone: string | null
    conversationContext: string | null
    createdAt: Date | null
  }

  export type RoleplayCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    assistantRole: number
    userRole: number
    conversationTone: number
    conversationContext: number
    createdAt: number
    _all: number
  }


  export type RoleplayMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    assistantRole?: true
    userRole?: true
    conversationTone?: true
    conversationContext?: true
    createdAt?: true
  }

  export type RoleplayMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    assistantRole?: true
    userRole?: true
    conversationTone?: true
    conversationContext?: true
    createdAt?: true
  }

  export type RoleplayCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    assistantRole?: true
    userRole?: true
    conversationTone?: true
    conversationContext?: true
    createdAt?: true
    _all?: true
  }

  export type RoleplayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roleplay to aggregate.
     */
    where?: RoleplayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roleplays to fetch.
     */
    orderBy?: RoleplayOrderByWithRelationInput | RoleplayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleplayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roleplays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roleplays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roleplays
    **/
    _count?: true | RoleplayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleplayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleplayMaxAggregateInputType
  }

  export type GetRoleplayAggregateType<T extends RoleplayAggregateArgs> = {
        [P in keyof T & keyof AggregateRoleplay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleplay[P]>
      : GetScalarType<T[P], AggregateRoleplay[P]>
  }




  export type RoleplayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleplayWhereInput
    orderBy?: RoleplayOrderByWithAggregationInput | RoleplayOrderByWithAggregationInput[]
    by: RoleplayScalarFieldEnum[] | RoleplayScalarFieldEnum
    having?: RoleplayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleplayCountAggregateInputType | true
    _min?: RoleplayMinAggregateInputType
    _max?: RoleplayMaxAggregateInputType
  }

  export type RoleplayGroupByOutputType = {
    id: string
    userId: string
    title: string
    assistantRole: string
    userRole: string
    conversationTone: string
    conversationContext: string
    createdAt: Date
    _count: RoleplayCountAggregateOutputType | null
    _min: RoleplayMinAggregateOutputType | null
    _max: RoleplayMaxAggregateOutputType | null
  }

  type GetRoleplayGroupByPayload<T extends RoleplayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleplayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleplayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleplayGroupByOutputType[P]>
            : GetScalarType<T[P], RoleplayGroupByOutputType[P]>
        }
      >
    >


  export type RoleplaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    assistantRole?: boolean
    userRole?: boolean
    conversationTone?: boolean
    conversationContext?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    conversations?: boolean | Roleplay$conversationsArgs<ExtArgs>
    _count?: boolean | RoleplayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleplay"]>

  export type RoleplaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    assistantRole?: boolean
    userRole?: boolean
    conversationTone?: boolean
    conversationContext?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleplay"]>

  export type RoleplaySelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    assistantRole?: boolean
    userRole?: boolean
    conversationTone?: boolean
    conversationContext?: boolean
    createdAt?: boolean
  }

  export type RoleplayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    conversations?: boolean | Roleplay$conversationsArgs<ExtArgs>
    _count?: boolean | RoleplayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleplayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RoleplayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roleplay"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      assistantRole: string
      userRole: string
      conversationTone: string
      conversationContext: string
      createdAt: Date
    }, ExtArgs["result"]["roleplay"]>
    composites: {}
  }

  type RoleplayGetPayload<S extends boolean | null | undefined | RoleplayDefaultArgs> = $Result.GetResult<Prisma.$RoleplayPayload, S>

  type RoleplayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleplayFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleplayCountAggregateInputType | true
    }

  export interface RoleplayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roleplay'], meta: { name: 'Roleplay' } }
    /**
     * Find zero or one Roleplay that matches the filter.
     * @param {RoleplayFindUniqueArgs} args - Arguments to find a Roleplay
     * @example
     * // Get one Roleplay
     * const roleplay = await prisma.roleplay.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleplayFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleplayFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleplayClient<$Result.GetResult<Prisma.$RoleplayPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Roleplay that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleplayFindUniqueOrThrowArgs} args - Arguments to find a Roleplay
     * @example
     * // Get one Roleplay
     * const roleplay = await prisma.roleplay.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleplayFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleplayFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleplayClient<$Result.GetResult<Prisma.$RoleplayPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Roleplay that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleplayFindFirstArgs} args - Arguments to find a Roleplay
     * @example
     * // Get one Roleplay
     * const roleplay = await prisma.roleplay.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleplayFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleplayFindFirstArgs<ExtArgs>>
    ): Prisma__RoleplayClient<$Result.GetResult<Prisma.$RoleplayPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Roleplay that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleplayFindFirstOrThrowArgs} args - Arguments to find a Roleplay
     * @example
     * // Get one Roleplay
     * const roleplay = await prisma.roleplay.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleplayFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleplayFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleplayClient<$Result.GetResult<Prisma.$RoleplayPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roleplays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleplayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roleplays
     * const roleplays = await prisma.roleplay.findMany()
     * 
     * // Get first 10 Roleplays
     * const roleplays = await prisma.roleplay.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleplayWithIdOnly = await prisma.roleplay.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleplayFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleplayFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleplayPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Roleplay.
     * @param {RoleplayCreateArgs} args - Arguments to create a Roleplay.
     * @example
     * // Create one Roleplay
     * const Roleplay = await prisma.roleplay.create({
     *   data: {
     *     // ... data to create a Roleplay
     *   }
     * })
     * 
    **/
    create<T extends RoleplayCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleplayCreateArgs<ExtArgs>>
    ): Prisma__RoleplayClient<$Result.GetResult<Prisma.$RoleplayPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roleplays.
     * @param {RoleplayCreateManyArgs} args - Arguments to create many Roleplays.
     * @example
     * // Create many Roleplays
     * const roleplay = await prisma.roleplay.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends RoleplayCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleplayCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roleplays and returns the data saved in the database.
     * @param {RoleplayCreateManyAndReturnArgs} args - Arguments to create many Roleplays.
     * @example
     * // Create many Roleplays
     * const roleplay = await prisma.roleplay.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roleplays and only return the `id`
     * const roleplayWithIdOnly = await prisma.roleplay.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends RoleplayCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleplayCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleplayPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Roleplay.
     * @param {RoleplayDeleteArgs} args - Arguments to delete one Roleplay.
     * @example
     * // Delete one Roleplay
     * const Roleplay = await prisma.roleplay.delete({
     *   where: {
     *     // ... filter to delete one Roleplay
     *   }
     * })
     * 
    **/
    delete<T extends RoleplayDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleplayDeleteArgs<ExtArgs>>
    ): Prisma__RoleplayClient<$Result.GetResult<Prisma.$RoleplayPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Roleplay.
     * @param {RoleplayUpdateArgs} args - Arguments to update one Roleplay.
     * @example
     * // Update one Roleplay
     * const roleplay = await prisma.roleplay.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleplayUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleplayUpdateArgs<ExtArgs>>
    ): Prisma__RoleplayClient<$Result.GetResult<Prisma.$RoleplayPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roleplays.
     * @param {RoleplayDeleteManyArgs} args - Arguments to filter Roleplays to delete.
     * @example
     * // Delete a few Roleplays
     * const { count } = await prisma.roleplay.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleplayDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleplayDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roleplays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleplayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roleplays
     * const roleplay = await prisma.roleplay.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleplayUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleplayUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Roleplay.
     * @param {RoleplayUpsertArgs} args - Arguments to update or create a Roleplay.
     * @example
     * // Update or create a Roleplay
     * const roleplay = await prisma.roleplay.upsert({
     *   create: {
     *     // ... data to create a Roleplay
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roleplay we want to update
     *   }
     * })
    **/
    upsert<T extends RoleplayUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleplayUpsertArgs<ExtArgs>>
    ): Prisma__RoleplayClient<$Result.GetResult<Prisma.$RoleplayPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roleplays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleplayCountArgs} args - Arguments to filter Roleplays to count.
     * @example
     * // Count the number of Roleplays
     * const count = await prisma.roleplay.count({
     *   where: {
     *     // ... the filter for the Roleplays we want to count
     *   }
     * })
    **/
    count<T extends RoleplayCountArgs>(
      args?: Subset<T, RoleplayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleplayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roleplay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleplayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleplayAggregateArgs>(args: Subset<T, RoleplayAggregateArgs>): Prisma.PrismaPromise<GetRoleplayAggregateType<T>>

    /**
     * Group by Roleplay.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleplayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleplayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleplayGroupByArgs['orderBy'] }
        : { orderBy?: RoleplayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleplayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleplayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roleplay model
   */
  readonly fields: RoleplayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roleplay.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleplayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    conversations<T extends Roleplay$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Roleplay$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Roleplay model
   */ 
  interface RoleplayFieldRefs {
    readonly id: FieldRef<"Roleplay", 'String'>
    readonly userId: FieldRef<"Roleplay", 'String'>
    readonly title: FieldRef<"Roleplay", 'String'>
    readonly assistantRole: FieldRef<"Roleplay", 'String'>
    readonly userRole: FieldRef<"Roleplay", 'String'>
    readonly conversationTone: FieldRef<"Roleplay", 'String'>
    readonly conversationContext: FieldRef<"Roleplay", 'String'>
    readonly createdAt: FieldRef<"Roleplay", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Roleplay findUnique
   */
  export type RoleplayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayInclude<ExtArgs> | null
    /**
     * Filter, which Roleplay to fetch.
     */
    where: RoleplayWhereUniqueInput
  }

  /**
   * Roleplay findUniqueOrThrow
   */
  export type RoleplayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayInclude<ExtArgs> | null
    /**
     * Filter, which Roleplay to fetch.
     */
    where: RoleplayWhereUniqueInput
  }

  /**
   * Roleplay findFirst
   */
  export type RoleplayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayInclude<ExtArgs> | null
    /**
     * Filter, which Roleplay to fetch.
     */
    where?: RoleplayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roleplays to fetch.
     */
    orderBy?: RoleplayOrderByWithRelationInput | RoleplayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roleplays.
     */
    cursor?: RoleplayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roleplays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roleplays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roleplays.
     */
    distinct?: RoleplayScalarFieldEnum | RoleplayScalarFieldEnum[]
  }

  /**
   * Roleplay findFirstOrThrow
   */
  export type RoleplayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayInclude<ExtArgs> | null
    /**
     * Filter, which Roleplay to fetch.
     */
    where?: RoleplayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roleplays to fetch.
     */
    orderBy?: RoleplayOrderByWithRelationInput | RoleplayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roleplays.
     */
    cursor?: RoleplayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roleplays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roleplays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roleplays.
     */
    distinct?: RoleplayScalarFieldEnum | RoleplayScalarFieldEnum[]
  }

  /**
   * Roleplay findMany
   */
  export type RoleplayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayInclude<ExtArgs> | null
    /**
     * Filter, which Roleplays to fetch.
     */
    where?: RoleplayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roleplays to fetch.
     */
    orderBy?: RoleplayOrderByWithRelationInput | RoleplayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roleplays.
     */
    cursor?: RoleplayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roleplays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roleplays.
     */
    skip?: number
    distinct?: RoleplayScalarFieldEnum | RoleplayScalarFieldEnum[]
  }

  /**
   * Roleplay create
   */
  export type RoleplayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayInclude<ExtArgs> | null
    /**
     * The data needed to create a Roleplay.
     */
    data: XOR<RoleplayCreateInput, RoleplayUncheckedCreateInput>
  }

  /**
   * Roleplay createMany
   */
  export type RoleplayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roleplays.
     */
    data: RoleplayCreateManyInput | RoleplayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roleplay createManyAndReturn
   */
  export type RoleplayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roleplays.
     */
    data: RoleplayCreateManyInput | RoleplayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roleplay update
   */
  export type RoleplayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayInclude<ExtArgs> | null
    /**
     * The data needed to update a Roleplay.
     */
    data: XOR<RoleplayUpdateInput, RoleplayUncheckedUpdateInput>
    /**
     * Choose, which Roleplay to update.
     */
    where: RoleplayWhereUniqueInput
  }

  /**
   * Roleplay updateMany
   */
  export type RoleplayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roleplays.
     */
    data: XOR<RoleplayUpdateManyMutationInput, RoleplayUncheckedUpdateManyInput>
    /**
     * Filter which Roleplays to update
     */
    where?: RoleplayWhereInput
  }

  /**
   * Roleplay upsert
   */
  export type RoleplayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayInclude<ExtArgs> | null
    /**
     * The filter to search for the Roleplay to update in case it exists.
     */
    where: RoleplayWhereUniqueInput
    /**
     * In case the Roleplay found by the `where` argument doesn't exist, create a new Roleplay with this data.
     */
    create: XOR<RoleplayCreateInput, RoleplayUncheckedCreateInput>
    /**
     * In case the Roleplay was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleplayUpdateInput, RoleplayUncheckedUpdateInput>
  }

  /**
   * Roleplay delete
   */
  export type RoleplayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayInclude<ExtArgs> | null
    /**
     * Filter which Roleplay to delete.
     */
    where: RoleplayWhereUniqueInput
  }

  /**
   * Roleplay deleteMany
   */
  export type RoleplayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roleplays to delete
     */
    where?: RoleplayWhereInput
  }

  /**
   * Roleplay.conversations
   */
  export type Roleplay$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Roleplay without action
   */
  export type RoleplayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roleplay
     */
    select?: RoleplaySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleplayInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    password: 'password',
    image: 'image',
    autoGeneratedBucketId: 'autoGeneratedBucketId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    stripeCustomerId: 'stripeCustomerId',
    userId: 'userId',
    stripeSubscriptionId: 'stripeSubscriptionId',
    stripePriceId: 'stripePriceId',
    stripeSubscriptionActive: 'stripeSubscriptionActive',
    stripeSubscriptionExpires: 'stripeSubscriptionExpires',
    stripeInvoiceFailed: 'stripeInvoiceFailed',
    messageCurrencyMax: 'messageCurrencyMax',
    messageUsed: 'messageUsed',
    subscribedAt: 'subscribedAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const EntitlementScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    feature: 'feature',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EntitlementScalarFieldEnum = (typeof EntitlementScalarFieldEnum)[keyof typeof EntitlementScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    userId: 'userId',
    roleplayId: 'roleplayId',
    createdAt: 'createdAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const TurnScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    userId: 'userId',
    message: 'message',
    reply: 'reply',
    totalTokens: 'totalTokens',
    createdAt: 'createdAt'
  };

  export type TurnScalarFieldEnum = (typeof TurnScalarFieldEnum)[keyof typeof TurnScalarFieldEnum]


  export const VocabAgentSuggestionScalarFieldEnum: {
    id: 'id',
    turnId: 'turnId',
    totalTokens: 'totalTokens',
    words: 'words',
    enhancedText: 'enhancedText',
    createdAt: 'createdAt'
  };

  export type VocabAgentSuggestionScalarFieldEnum = (typeof VocabAgentSuggestionScalarFieldEnum)[keyof typeof VocabAgentSuggestionScalarFieldEnum]


  export const VocabularyBucketScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    createdAt: 'createdAt'
  };

  export type VocabularyBucketScalarFieldEnum = (typeof VocabularyBucketScalarFieldEnum)[keyof typeof VocabularyBucketScalarFieldEnum]


  export const VocabularyScalarFieldEnum: {
    id: 'id',
    bucketId: 'bucketId',
    wordOrPhrase: 'wordOrPhrase',
    createdAt: 'createdAt'
  };

  export type VocabularyScalarFieldEnum = (typeof VocabularyScalarFieldEnum)[keyof typeof VocabularyScalarFieldEnum]


  export const RoleplayScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    assistantRole: 'assistantRole',
    userRole: 'userRole',
    conversationTone: 'conversationTone',
    conversationContext: 'conversationContext',
    createdAt: 'createdAt'
  };

  export type RoleplayScalarFieldEnum = (typeof RoleplayScalarFieldEnum)[keyof typeof RoleplayScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    autoGeneratedBucketId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Conversation?: ConversationListRelationFilter
    Turn?: TurnListRelationFilter
    Roleplay?: RoleplayListRelationFilter
    vocabularyBuckets?: VocabularyBucketListRelationFilter
    Subscription?: XOR<SubscriptionNullableRelationFilter, SubscriptionWhereInput> | null
    Entitlements?: EntitlementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    autoGeneratedBucketId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    Conversation?: ConversationOrderByRelationAggregateInput
    Turn?: TurnOrderByRelationAggregateInput
    Roleplay?: RoleplayOrderByRelationAggregateInput
    vocabularyBuckets?: VocabularyBucketOrderByRelationAggregateInput
    Subscription?: SubscriptionOrderByWithRelationInput
    Entitlements?: EntitlementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    password?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    autoGeneratedBucketId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    Conversation?: ConversationListRelationFilter
    Turn?: TurnListRelationFilter
    Roleplay?: RoleplayListRelationFilter
    vocabularyBuckets?: VocabularyBucketListRelationFilter
    Subscription?: XOR<SubscriptionNullableRelationFilter, SubscriptionWhereInput> | null
    Entitlements?: EntitlementListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    autoGeneratedBucketId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    autoGeneratedBucketId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    stripeCustomerId?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    stripeSubscriptionId?: StringFilter<"Subscription"> | string
    stripePriceId?: StringFilter<"Subscription"> | string
    stripeSubscriptionActive?: BoolFilter<"Subscription"> | boolean
    stripeSubscriptionExpires?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    stripeInvoiceFailed?: BoolFilter<"Subscription"> | boolean
    messageCurrencyMax?: IntFilter<"Subscription"> | number
    messageUsed?: IntFilter<"Subscription"> | number
    subscribedAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    stripeCustomerId?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    stripeSubscriptionActive?: SortOrder
    stripeSubscriptionExpires?: SortOrderInput | SortOrder
    stripeInvoiceFailed?: SortOrder
    messageCurrencyMax?: SortOrder
    messageUsed?: SortOrder
    subscribedAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    stripeCustomerId?: string
    userId?: string
    stripeSubscriptionId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    stripePriceId?: StringFilter<"Subscription"> | string
    stripeSubscriptionActive?: BoolFilter<"Subscription"> | boolean
    stripeSubscriptionExpires?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    stripeInvoiceFailed?: BoolFilter<"Subscription"> | boolean
    messageCurrencyMax?: IntFilter<"Subscription"> | number
    messageUsed?: IntFilter<"Subscription"> | number
    subscribedAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "stripeCustomerId" | "userId" | "stripeSubscriptionId">

  export type SubscriptionOrderByWithAggregationInput = {
    stripeCustomerId?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    stripeSubscriptionActive?: SortOrder
    stripeSubscriptionExpires?: SortOrderInput | SortOrder
    stripeInvoiceFailed?: SortOrder
    messageCurrencyMax?: SortOrder
    messageUsed?: SortOrder
    subscribedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    stripeCustomerId?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeSubscriptionId?: StringWithAggregatesFilter<"Subscription"> | string
    stripePriceId?: StringWithAggregatesFilter<"Subscription"> | string
    stripeSubscriptionActive?: BoolWithAggregatesFilter<"Subscription"> | boolean
    stripeSubscriptionExpires?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    stripeInvoiceFailed?: BoolWithAggregatesFilter<"Subscription"> | boolean
    messageCurrencyMax?: IntWithAggregatesFilter<"Subscription"> | number
    messageUsed?: IntWithAggregatesFilter<"Subscription"> | number
    subscribedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type EntitlementWhereInput = {
    AND?: EntitlementWhereInput | EntitlementWhereInput[]
    OR?: EntitlementWhereInput[]
    NOT?: EntitlementWhereInput | EntitlementWhereInput[]
    id?: StringFilter<"Entitlement"> | string
    userId?: StringFilter<"Entitlement"> | string
    feature?: StringFilter<"Entitlement"> | string
    active?: BoolFilter<"Entitlement"> | boolean
    createdAt?: DateTimeFilter<"Entitlement"> | Date | string
    updatedAt?: DateTimeFilter<"Entitlement"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type EntitlementOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    feature?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type EntitlementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EntitlementWhereInput | EntitlementWhereInput[]
    OR?: EntitlementWhereInput[]
    NOT?: EntitlementWhereInput | EntitlementWhereInput[]
    userId?: StringFilter<"Entitlement"> | string
    feature?: StringFilter<"Entitlement"> | string
    active?: BoolFilter<"Entitlement"> | boolean
    createdAt?: DateTimeFilter<"Entitlement"> | Date | string
    updatedAt?: DateTimeFilter<"Entitlement"> | Date | string
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type EntitlementOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    feature?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EntitlementCountOrderByAggregateInput
    _max?: EntitlementMaxOrderByAggregateInput
    _min?: EntitlementMinOrderByAggregateInput
  }

  export type EntitlementScalarWhereWithAggregatesInput = {
    AND?: EntitlementScalarWhereWithAggregatesInput | EntitlementScalarWhereWithAggregatesInput[]
    OR?: EntitlementScalarWhereWithAggregatesInput[]
    NOT?: EntitlementScalarWhereWithAggregatesInput | EntitlementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Entitlement"> | string
    userId?: StringWithAggregatesFilter<"Entitlement"> | string
    feature?: StringWithAggregatesFilter<"Entitlement"> | string
    active?: BoolWithAggregatesFilter<"Entitlement"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Entitlement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Entitlement"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    title?: StringFilter<"Conversation"> | string
    userId?: StringFilter<"Conversation"> | string
    roleplayId?: StringNullableFilter<"Conversation"> | string | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    Turn?: TurnListRelationFilter
    Roleplay?: XOR<RoleplayNullableRelationFilter, RoleplayWhereInput> | null
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    roleplayId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Turn?: TurnOrderByRelationAggregateInput
    Roleplay?: RoleplayOrderByWithRelationInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    title?: StringFilter<"Conversation"> | string
    userId?: StringFilter<"Conversation"> | string
    roleplayId?: StringNullableFilter<"Conversation"> | string | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    Turn?: TurnListRelationFilter
    Roleplay?: XOR<RoleplayNullableRelationFilter, RoleplayWhereInput> | null
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    roleplayId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    title?: StringWithAggregatesFilter<"Conversation"> | string
    userId?: StringWithAggregatesFilter<"Conversation"> | string
    roleplayId?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type TurnWhereInput = {
    AND?: TurnWhereInput | TurnWhereInput[]
    OR?: TurnWhereInput[]
    NOT?: TurnWhereInput | TurnWhereInput[]
    id?: StringFilter<"Turn"> | string
    conversationId?: StringFilter<"Turn"> | string
    userId?: StringFilter<"Turn"> | string
    message?: StringFilter<"Turn"> | string
    reply?: StringFilter<"Turn"> | string
    totalTokens?: IntFilter<"Turn"> | number
    createdAt?: DateTimeFilter<"Turn"> | Date | string
    conversation?: XOR<ConversationRelationFilter, ConversationWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    VocabAgentSuggestion?: VocabAgentSuggestionListRelationFilter
  }

  export type TurnOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    reply?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    VocabAgentSuggestion?: VocabAgentSuggestionOrderByRelationAggregateInput
  }

  export type TurnWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TurnWhereInput | TurnWhereInput[]
    OR?: TurnWhereInput[]
    NOT?: TurnWhereInput | TurnWhereInput[]
    conversationId?: StringFilter<"Turn"> | string
    userId?: StringFilter<"Turn"> | string
    message?: StringFilter<"Turn"> | string
    reply?: StringFilter<"Turn"> | string
    totalTokens?: IntFilter<"Turn"> | number
    createdAt?: DateTimeFilter<"Turn"> | Date | string
    conversation?: XOR<ConversationRelationFilter, ConversationWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    VocabAgentSuggestion?: VocabAgentSuggestionListRelationFilter
  }, "id">

  export type TurnOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    reply?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
    _count?: TurnCountOrderByAggregateInput
    _avg?: TurnAvgOrderByAggregateInput
    _max?: TurnMaxOrderByAggregateInput
    _min?: TurnMinOrderByAggregateInput
    _sum?: TurnSumOrderByAggregateInput
  }

  export type TurnScalarWhereWithAggregatesInput = {
    AND?: TurnScalarWhereWithAggregatesInput | TurnScalarWhereWithAggregatesInput[]
    OR?: TurnScalarWhereWithAggregatesInput[]
    NOT?: TurnScalarWhereWithAggregatesInput | TurnScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Turn"> | string
    conversationId?: StringWithAggregatesFilter<"Turn"> | string
    userId?: StringWithAggregatesFilter<"Turn"> | string
    message?: StringWithAggregatesFilter<"Turn"> | string
    reply?: StringWithAggregatesFilter<"Turn"> | string
    totalTokens?: IntWithAggregatesFilter<"Turn"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Turn"> | Date | string
  }

  export type VocabAgentSuggestionWhereInput = {
    AND?: VocabAgentSuggestionWhereInput | VocabAgentSuggestionWhereInput[]
    OR?: VocabAgentSuggestionWhereInput[]
    NOT?: VocabAgentSuggestionWhereInput | VocabAgentSuggestionWhereInput[]
    id?: StringFilter<"VocabAgentSuggestion"> | string
    turnId?: StringFilter<"VocabAgentSuggestion"> | string
    totalTokens?: IntFilter<"VocabAgentSuggestion"> | number
    words?: StringNullableListFilter<"VocabAgentSuggestion">
    enhancedText?: StringFilter<"VocabAgentSuggestion"> | string
    createdAt?: DateTimeFilter<"VocabAgentSuggestion"> | Date | string
    Turn?: XOR<TurnRelationFilter, TurnWhereInput>
  }

  export type VocabAgentSuggestionOrderByWithRelationInput = {
    id?: SortOrder
    turnId?: SortOrder
    totalTokens?: SortOrder
    words?: SortOrder
    enhancedText?: SortOrder
    createdAt?: SortOrder
    Turn?: TurnOrderByWithRelationInput
  }

  export type VocabAgentSuggestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VocabAgentSuggestionWhereInput | VocabAgentSuggestionWhereInput[]
    OR?: VocabAgentSuggestionWhereInput[]
    NOT?: VocabAgentSuggestionWhereInput | VocabAgentSuggestionWhereInput[]
    turnId?: StringFilter<"VocabAgentSuggestion"> | string
    totalTokens?: IntFilter<"VocabAgentSuggestion"> | number
    words?: StringNullableListFilter<"VocabAgentSuggestion">
    enhancedText?: StringFilter<"VocabAgentSuggestion"> | string
    createdAt?: DateTimeFilter<"VocabAgentSuggestion"> | Date | string
    Turn?: XOR<TurnRelationFilter, TurnWhereInput>
  }, "id">

  export type VocabAgentSuggestionOrderByWithAggregationInput = {
    id?: SortOrder
    turnId?: SortOrder
    totalTokens?: SortOrder
    words?: SortOrder
    enhancedText?: SortOrder
    createdAt?: SortOrder
    _count?: VocabAgentSuggestionCountOrderByAggregateInput
    _avg?: VocabAgentSuggestionAvgOrderByAggregateInput
    _max?: VocabAgentSuggestionMaxOrderByAggregateInput
    _min?: VocabAgentSuggestionMinOrderByAggregateInput
    _sum?: VocabAgentSuggestionSumOrderByAggregateInput
  }

  export type VocabAgentSuggestionScalarWhereWithAggregatesInput = {
    AND?: VocabAgentSuggestionScalarWhereWithAggregatesInput | VocabAgentSuggestionScalarWhereWithAggregatesInput[]
    OR?: VocabAgentSuggestionScalarWhereWithAggregatesInput[]
    NOT?: VocabAgentSuggestionScalarWhereWithAggregatesInput | VocabAgentSuggestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VocabAgentSuggestion"> | string
    turnId?: StringWithAggregatesFilter<"VocabAgentSuggestion"> | string
    totalTokens?: IntWithAggregatesFilter<"VocabAgentSuggestion"> | number
    words?: StringNullableListFilter<"VocabAgentSuggestion">
    enhancedText?: StringWithAggregatesFilter<"VocabAgentSuggestion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VocabAgentSuggestion"> | Date | string
  }

  export type VocabularyBucketWhereInput = {
    AND?: VocabularyBucketWhereInput | VocabularyBucketWhereInput[]
    OR?: VocabularyBucketWhereInput[]
    NOT?: VocabularyBucketWhereInput | VocabularyBucketWhereInput[]
    id?: StringFilter<"VocabularyBucket"> | string
    userId?: StringFilter<"VocabularyBucket"> | string
    title?: StringFilter<"VocabularyBucket"> | string
    createdAt?: DateTimeFilter<"VocabularyBucket"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    Vocabulary?: VocabularyListRelationFilter
  }

  export type VocabularyBucketOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Vocabulary?: VocabularyOrderByRelationAggregateInput
  }

  export type VocabularyBucketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VocabularyBucketWhereInput | VocabularyBucketWhereInput[]
    OR?: VocabularyBucketWhereInput[]
    NOT?: VocabularyBucketWhereInput | VocabularyBucketWhereInput[]
    userId?: StringFilter<"VocabularyBucket"> | string
    title?: StringFilter<"VocabularyBucket"> | string
    createdAt?: DateTimeFilter<"VocabularyBucket"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    Vocabulary?: VocabularyListRelationFilter
  }, "id">

  export type VocabularyBucketOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    _count?: VocabularyBucketCountOrderByAggregateInput
    _max?: VocabularyBucketMaxOrderByAggregateInput
    _min?: VocabularyBucketMinOrderByAggregateInput
  }

  export type VocabularyBucketScalarWhereWithAggregatesInput = {
    AND?: VocabularyBucketScalarWhereWithAggregatesInput | VocabularyBucketScalarWhereWithAggregatesInput[]
    OR?: VocabularyBucketScalarWhereWithAggregatesInput[]
    NOT?: VocabularyBucketScalarWhereWithAggregatesInput | VocabularyBucketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VocabularyBucket"> | string
    userId?: StringWithAggregatesFilter<"VocabularyBucket"> | string
    title?: StringWithAggregatesFilter<"VocabularyBucket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VocabularyBucket"> | Date | string
  }

  export type VocabularyWhereInput = {
    AND?: VocabularyWhereInput | VocabularyWhereInput[]
    OR?: VocabularyWhereInput[]
    NOT?: VocabularyWhereInput | VocabularyWhereInput[]
    id?: StringFilter<"Vocabulary"> | string
    bucketId?: StringFilter<"Vocabulary"> | string
    wordOrPhrase?: StringFilter<"Vocabulary"> | string
    createdAt?: DateTimeFilter<"Vocabulary"> | Date | string
    bucket?: XOR<VocabularyBucketRelationFilter, VocabularyBucketWhereInput>
  }

  export type VocabularyOrderByWithRelationInput = {
    id?: SortOrder
    bucketId?: SortOrder
    wordOrPhrase?: SortOrder
    createdAt?: SortOrder
    bucket?: VocabularyBucketOrderByWithRelationInput
  }

  export type VocabularyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VocabularyWhereInput | VocabularyWhereInput[]
    OR?: VocabularyWhereInput[]
    NOT?: VocabularyWhereInput | VocabularyWhereInput[]
    bucketId?: StringFilter<"Vocabulary"> | string
    wordOrPhrase?: StringFilter<"Vocabulary"> | string
    createdAt?: DateTimeFilter<"Vocabulary"> | Date | string
    bucket?: XOR<VocabularyBucketRelationFilter, VocabularyBucketWhereInput>
  }, "id">

  export type VocabularyOrderByWithAggregationInput = {
    id?: SortOrder
    bucketId?: SortOrder
    wordOrPhrase?: SortOrder
    createdAt?: SortOrder
    _count?: VocabularyCountOrderByAggregateInput
    _max?: VocabularyMaxOrderByAggregateInput
    _min?: VocabularyMinOrderByAggregateInput
  }

  export type VocabularyScalarWhereWithAggregatesInput = {
    AND?: VocabularyScalarWhereWithAggregatesInput | VocabularyScalarWhereWithAggregatesInput[]
    OR?: VocabularyScalarWhereWithAggregatesInput[]
    NOT?: VocabularyScalarWhereWithAggregatesInput | VocabularyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vocabulary"> | string
    bucketId?: StringWithAggregatesFilter<"Vocabulary"> | string
    wordOrPhrase?: StringWithAggregatesFilter<"Vocabulary"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vocabulary"> | Date | string
  }

  export type RoleplayWhereInput = {
    AND?: RoleplayWhereInput | RoleplayWhereInput[]
    OR?: RoleplayWhereInput[]
    NOT?: RoleplayWhereInput | RoleplayWhereInput[]
    id?: StringFilter<"Roleplay"> | string
    userId?: StringFilter<"Roleplay"> | string
    title?: StringFilter<"Roleplay"> | string
    assistantRole?: StringFilter<"Roleplay"> | string
    userRole?: StringFilter<"Roleplay"> | string
    conversationTone?: StringFilter<"Roleplay"> | string
    conversationContext?: StringFilter<"Roleplay"> | string
    createdAt?: DateTimeFilter<"Roleplay"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    conversations?: ConversationListRelationFilter
  }

  export type RoleplayOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    assistantRole?: SortOrder
    userRole?: SortOrder
    conversationTone?: SortOrder
    conversationContext?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    conversations?: ConversationOrderByRelationAggregateInput
  }

  export type RoleplayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoleplayWhereInput | RoleplayWhereInput[]
    OR?: RoleplayWhereInput[]
    NOT?: RoleplayWhereInput | RoleplayWhereInput[]
    userId?: StringFilter<"Roleplay"> | string
    title?: StringFilter<"Roleplay"> | string
    assistantRole?: StringFilter<"Roleplay"> | string
    userRole?: StringFilter<"Roleplay"> | string
    conversationTone?: StringFilter<"Roleplay"> | string
    conversationContext?: StringFilter<"Roleplay"> | string
    createdAt?: DateTimeFilter<"Roleplay"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    conversations?: ConversationListRelationFilter
  }, "id">

  export type RoleplayOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    assistantRole?: SortOrder
    userRole?: SortOrder
    conversationTone?: SortOrder
    conversationContext?: SortOrder
    createdAt?: SortOrder
    _count?: RoleplayCountOrderByAggregateInput
    _max?: RoleplayMaxOrderByAggregateInput
    _min?: RoleplayMinOrderByAggregateInput
  }

  export type RoleplayScalarWhereWithAggregatesInput = {
    AND?: RoleplayScalarWhereWithAggregatesInput | RoleplayScalarWhereWithAggregatesInput[]
    OR?: RoleplayScalarWhereWithAggregatesInput[]
    NOT?: RoleplayScalarWhereWithAggregatesInput | RoleplayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Roleplay"> | string
    userId?: StringWithAggregatesFilter<"Roleplay"> | string
    title?: StringWithAggregatesFilter<"Roleplay"> | string
    assistantRole?: StringWithAggregatesFilter<"Roleplay"> | string
    userRole?: StringWithAggregatesFilter<"Roleplay"> | string
    conversationTone?: StringWithAggregatesFilter<"Roleplay"> | string
    conversationContext?: StringWithAggregatesFilter<"Roleplay"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Roleplay"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Conversation?: ConversationCreateNestedManyWithoutUserInput
    Turn?: TurnCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Conversation?: ConversationUncheckedCreateNestedManyWithoutUserInput
    Turn?: TurnUncheckedCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayUncheckedCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUpdateManyWithoutUserNestedInput
    Turn?: TurnUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    Turn?: TurnUncheckedUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUncheckedUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    sessionToken: string
    userId: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    stripeCustomerId: string
    stripeSubscriptionId: string
    stripePriceId: string
    stripeSubscriptionActive?: boolean
    stripeSubscriptionExpires?: Date | string | null
    stripeInvoiceFailed?: boolean
    messageCurrencyMax?: number
    messageUsed?: number
    subscribedAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    stripeCustomerId: string
    userId: string
    stripeSubscriptionId: string
    stripePriceId: string
    stripeSubscriptionActive?: boolean
    stripeSubscriptionExpires?: Date | string | null
    stripeInvoiceFailed?: boolean
    messageCurrencyMax?: number
    messageUsed?: number
    subscribedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    stripeSubscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeInvoiceFailed?: BoolFieldUpdateOperationsInput | boolean
    messageCurrencyMax?: IntFieldUpdateOperationsInput | number
    messageUsed?: IntFieldUpdateOperationsInput | number
    subscribedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    stripeSubscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeInvoiceFailed?: BoolFieldUpdateOperationsInput | boolean
    messageCurrencyMax?: IntFieldUpdateOperationsInput | number
    messageUsed?: IntFieldUpdateOperationsInput | number
    subscribedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    stripeCustomerId: string
    userId: string
    stripeSubscriptionId: string
    stripePriceId: string
    stripeSubscriptionActive?: boolean
    stripeSubscriptionExpires?: Date | string | null
    stripeInvoiceFailed?: boolean
    messageCurrencyMax?: number
    messageUsed?: number
    subscribedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    stripeSubscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeInvoiceFailed?: BoolFieldUpdateOperationsInput | boolean
    messageCurrencyMax?: IntFieldUpdateOperationsInput | number
    messageUsed?: IntFieldUpdateOperationsInput | number
    subscribedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    stripeSubscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeInvoiceFailed?: BoolFieldUpdateOperationsInput | boolean
    messageCurrencyMax?: IntFieldUpdateOperationsInput | number
    messageUsed?: IntFieldUpdateOperationsInput | number
    subscribedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntitlementCreateInput = {
    id?: string
    feature: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutEntitlementsInput
  }

  export type EntitlementUncheckedCreateInput = {
    id?: string
    userId: string
    feature: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntitlementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutEntitlementsNestedInput
  }

  export type EntitlementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntitlementCreateManyInput = {
    id?: string
    userId: string
    feature: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntitlementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntitlementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConversationInput
    Turn?: TurnCreateNestedManyWithoutConversationInput
    Roleplay?: RoleplayCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    title: string
    userId: string
    roleplayId?: string | null
    createdAt?: Date | string
    Turn?: TurnUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversationNestedInput
    Turn?: TurnUpdateManyWithoutConversationNestedInput
    Roleplay?: RoleplayUpdateOneWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleplayId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Turn?: TurnUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    title: string
    userId: string
    roleplayId?: string | null
    createdAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleplayId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnCreateInput = {
    id?: string
    message: string
    reply: string
    totalTokens: number
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutTurnInput
    user: UserCreateNestedOneWithoutTurnInput
    VocabAgentSuggestion?: VocabAgentSuggestionCreateNestedManyWithoutTurnInput
  }

  export type TurnUncheckedCreateInput = {
    id?: string
    conversationId: string
    userId: string
    message: string
    reply: string
    totalTokens: number
    createdAt?: Date | string
    VocabAgentSuggestion?: VocabAgentSuggestionUncheckedCreateNestedManyWithoutTurnInput
  }

  export type TurnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutTurnNestedInput
    user?: UserUpdateOneRequiredWithoutTurnNestedInput
    VocabAgentSuggestion?: VocabAgentSuggestionUpdateManyWithoutTurnNestedInput
  }

  export type TurnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VocabAgentSuggestion?: VocabAgentSuggestionUncheckedUpdateManyWithoutTurnNestedInput
  }

  export type TurnCreateManyInput = {
    id?: string
    conversationId: string
    userId: string
    message: string
    reply: string
    totalTokens: number
    createdAt?: Date | string
  }

  export type TurnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabAgentSuggestionCreateInput = {
    id?: string
    totalTokens: number
    words?: VocabAgentSuggestionCreatewordsInput | string[]
    enhancedText: string
    createdAt?: Date | string
    Turn: TurnCreateNestedOneWithoutVocabAgentSuggestionInput
  }

  export type VocabAgentSuggestionUncheckedCreateInput = {
    id?: string
    turnId: string
    totalTokens: number
    words?: VocabAgentSuggestionCreatewordsInput | string[]
    enhancedText: string
    createdAt?: Date | string
  }

  export type VocabAgentSuggestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    words?: VocabAgentSuggestionUpdatewordsInput | string[]
    enhancedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Turn?: TurnUpdateOneRequiredWithoutVocabAgentSuggestionNestedInput
  }

  export type VocabAgentSuggestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    turnId?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    words?: VocabAgentSuggestionUpdatewordsInput | string[]
    enhancedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabAgentSuggestionCreateManyInput = {
    id?: string
    turnId: string
    totalTokens: number
    words?: VocabAgentSuggestionCreatewordsInput | string[]
    enhancedText: string
    createdAt?: Date | string
  }

  export type VocabAgentSuggestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    words?: VocabAgentSuggestionUpdatewordsInput | string[]
    enhancedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabAgentSuggestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    turnId?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    words?: VocabAgentSuggestionUpdatewordsInput | string[]
    enhancedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyBucketCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVocabularyBucketsInput
    Vocabulary?: VocabularyCreateNestedManyWithoutBucketInput
  }

  export type VocabularyBucketUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    createdAt?: Date | string
    Vocabulary?: VocabularyUncheckedCreateNestedManyWithoutBucketInput
  }

  export type VocabularyBucketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVocabularyBucketsNestedInput
    Vocabulary?: VocabularyUpdateManyWithoutBucketNestedInput
  }

  export type VocabularyBucketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vocabulary?: VocabularyUncheckedUpdateManyWithoutBucketNestedInput
  }

  export type VocabularyBucketCreateManyInput = {
    id?: string
    userId: string
    title: string
    createdAt?: Date | string
  }

  export type VocabularyBucketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyBucketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyCreateInput = {
    id?: string
    wordOrPhrase: string
    createdAt?: Date | string
    bucket: VocabularyBucketCreateNestedOneWithoutVocabularyInput
  }

  export type VocabularyUncheckedCreateInput = {
    id?: string
    bucketId: string
    wordOrPhrase: string
    createdAt?: Date | string
  }

  export type VocabularyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordOrPhrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bucket?: VocabularyBucketUpdateOneRequiredWithoutVocabularyNestedInput
  }

  export type VocabularyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bucketId?: StringFieldUpdateOperationsInput | string
    wordOrPhrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyCreateManyInput = {
    id?: string
    bucketId: string
    wordOrPhrase: string
    createdAt?: Date | string
  }

  export type VocabularyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordOrPhrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bucketId?: StringFieldUpdateOperationsInput | string
    wordOrPhrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleplayCreateInput = {
    id?: string
    title: string
    assistantRole: string
    userRole: string
    conversationTone: string
    conversationContext: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRoleplayInput
    conversations?: ConversationCreateNestedManyWithoutRoleplayInput
  }

  export type RoleplayUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    assistantRole: string
    userRole: string
    conversationTone: string
    conversationContext: string
    createdAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutRoleplayInput
  }

  export type RoleplayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assistantRole?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    conversationTone?: StringFieldUpdateOperationsInput | string
    conversationContext?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoleplayNestedInput
    conversations?: ConversationUpdateManyWithoutRoleplayNestedInput
  }

  export type RoleplayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assistantRole?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    conversationTone?: StringFieldUpdateOperationsInput | string
    conversationContext?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutRoleplayNestedInput
  }

  export type RoleplayCreateManyInput = {
    id?: string
    userId: string
    title: string
    assistantRole: string
    userRole: string
    conversationTone: string
    conversationContext: string
    createdAt?: Date | string
  }

  export type RoleplayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assistantRole?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    conversationTone?: StringFieldUpdateOperationsInput | string
    conversationContext?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleplayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assistantRole?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    conversationTone?: StringFieldUpdateOperationsInput | string
    conversationContext?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type TurnListRelationFilter = {
    every?: TurnWhereInput
    some?: TurnWhereInput
    none?: TurnWhereInput
  }

  export type RoleplayListRelationFilter = {
    every?: RoleplayWhereInput
    some?: RoleplayWhereInput
    none?: RoleplayWhereInput
  }

  export type VocabularyBucketListRelationFilter = {
    every?: VocabularyBucketWhereInput
    some?: VocabularyBucketWhereInput
    none?: VocabularyBucketWhereInput
  }

  export type SubscriptionNullableRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type EntitlementListRelationFilter = {
    every?: EntitlementWhereInput
    some?: EntitlementWhereInput
    none?: EntitlementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleplayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VocabularyBucketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EntitlementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    autoGeneratedBucketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    autoGeneratedBucketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    password?: SortOrder
    image?: SortOrder
    autoGeneratedBucketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SubscriptionCountOrderByAggregateInput = {
    stripeCustomerId?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    stripeSubscriptionActive?: SortOrder
    stripeSubscriptionExpires?: SortOrder
    stripeInvoiceFailed?: SortOrder
    messageCurrencyMax?: SortOrder
    messageUsed?: SortOrder
    subscribedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    messageCurrencyMax?: SortOrder
    messageUsed?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    stripeCustomerId?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    stripeSubscriptionActive?: SortOrder
    stripeSubscriptionExpires?: SortOrder
    stripeInvoiceFailed?: SortOrder
    messageCurrencyMax?: SortOrder
    messageUsed?: SortOrder
    subscribedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    stripeCustomerId?: SortOrder
    userId?: SortOrder
    stripeSubscriptionId?: SortOrder
    stripePriceId?: SortOrder
    stripeSubscriptionActive?: SortOrder
    stripeSubscriptionExpires?: SortOrder
    stripeInvoiceFailed?: SortOrder
    messageCurrencyMax?: SortOrder
    messageUsed?: SortOrder
    subscribedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    messageCurrencyMax?: SortOrder
    messageUsed?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EntitlementCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    feature?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntitlementMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    feature?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EntitlementMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    feature?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleplayNullableRelationFilter = {
    is?: RoleplayWhereInput | null
    isNot?: RoleplayWhereInput | null
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    roleplayId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    roleplayId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    userId?: SortOrder
    roleplayId?: SortOrder
    createdAt?: SortOrder
  }

  export type ConversationRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type VocabAgentSuggestionListRelationFilter = {
    every?: VocabAgentSuggestionWhereInput
    some?: VocabAgentSuggestionWhereInput
    none?: VocabAgentSuggestionWhereInput
  }

  export type VocabAgentSuggestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TurnCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    reply?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type TurnAvgOrderByAggregateInput = {
    totalTokens?: SortOrder
  }

  export type TurnMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    reply?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type TurnMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    reply?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type TurnSumOrderByAggregateInput = {
    totalTokens?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TurnRelationFilter = {
    is?: TurnWhereInput
    isNot?: TurnWhereInput
  }

  export type VocabAgentSuggestionCountOrderByAggregateInput = {
    id?: SortOrder
    turnId?: SortOrder
    totalTokens?: SortOrder
    words?: SortOrder
    enhancedText?: SortOrder
    createdAt?: SortOrder
  }

  export type VocabAgentSuggestionAvgOrderByAggregateInput = {
    totalTokens?: SortOrder
  }

  export type VocabAgentSuggestionMaxOrderByAggregateInput = {
    id?: SortOrder
    turnId?: SortOrder
    totalTokens?: SortOrder
    enhancedText?: SortOrder
    createdAt?: SortOrder
  }

  export type VocabAgentSuggestionMinOrderByAggregateInput = {
    id?: SortOrder
    turnId?: SortOrder
    totalTokens?: SortOrder
    enhancedText?: SortOrder
    createdAt?: SortOrder
  }

  export type VocabAgentSuggestionSumOrderByAggregateInput = {
    totalTokens?: SortOrder
  }

  export type VocabularyListRelationFilter = {
    every?: VocabularyWhereInput
    some?: VocabularyWhereInput
    none?: VocabularyWhereInput
  }

  export type VocabularyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VocabularyBucketCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type VocabularyBucketMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type VocabularyBucketMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type VocabularyBucketRelationFilter = {
    is?: VocabularyBucketWhereInput
    isNot?: VocabularyBucketWhereInput
  }

  export type VocabularyCountOrderByAggregateInput = {
    id?: SortOrder
    bucketId?: SortOrder
    wordOrPhrase?: SortOrder
    createdAt?: SortOrder
  }

  export type VocabularyMaxOrderByAggregateInput = {
    id?: SortOrder
    bucketId?: SortOrder
    wordOrPhrase?: SortOrder
    createdAt?: SortOrder
  }

  export type VocabularyMinOrderByAggregateInput = {
    id?: SortOrder
    bucketId?: SortOrder
    wordOrPhrase?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleplayCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    assistantRole?: SortOrder
    userRole?: SortOrder
    conversationTone?: SortOrder
    conversationContext?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleplayMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    assistantRole?: SortOrder
    userRole?: SortOrder
    conversationTone?: SortOrder
    conversationContext?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleplayMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    assistantRole?: SortOrder
    userRole?: SortOrder
    conversationTone?: SortOrder
    conversationContext?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type TurnCreateNestedManyWithoutUserInput = {
    create?: XOR<TurnCreateWithoutUserInput, TurnUncheckedCreateWithoutUserInput> | TurnCreateWithoutUserInput[] | TurnUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TurnCreateOrConnectWithoutUserInput | TurnCreateOrConnectWithoutUserInput[]
    createMany?: TurnCreateManyUserInputEnvelope
    connect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
  }

  export type RoleplayCreateNestedManyWithoutUserInput = {
    create?: XOR<RoleplayCreateWithoutUserInput, RoleplayUncheckedCreateWithoutUserInput> | RoleplayCreateWithoutUserInput[] | RoleplayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleplayCreateOrConnectWithoutUserInput | RoleplayCreateOrConnectWithoutUserInput[]
    createMany?: RoleplayCreateManyUserInputEnvelope
    connect?: RoleplayWhereUniqueInput | RoleplayWhereUniqueInput[]
  }

  export type VocabularyBucketCreateNestedManyWithoutUserInput = {
    create?: XOR<VocabularyBucketCreateWithoutUserInput, VocabularyBucketUncheckedCreateWithoutUserInput> | VocabularyBucketCreateWithoutUserInput[] | VocabularyBucketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VocabularyBucketCreateOrConnectWithoutUserInput | VocabularyBucketCreateOrConnectWithoutUserInput[]
    createMany?: VocabularyBucketCreateManyUserInputEnvelope
    connect?: VocabularyBucketWhereUniqueInput | VocabularyBucketWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type EntitlementCreateNestedManyWithoutUserInput = {
    create?: XOR<EntitlementCreateWithoutUserInput, EntitlementUncheckedCreateWithoutUserInput> | EntitlementCreateWithoutUserInput[] | EntitlementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EntitlementCreateOrConnectWithoutUserInput | EntitlementCreateOrConnectWithoutUserInput[]
    createMany?: EntitlementCreateManyUserInputEnvelope
    connect?: EntitlementWhereUniqueInput | EntitlementWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type TurnUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TurnCreateWithoutUserInput, TurnUncheckedCreateWithoutUserInput> | TurnCreateWithoutUserInput[] | TurnUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TurnCreateOrConnectWithoutUserInput | TurnCreateOrConnectWithoutUserInput[]
    createMany?: TurnCreateManyUserInputEnvelope
    connect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
  }

  export type RoleplayUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoleplayCreateWithoutUserInput, RoleplayUncheckedCreateWithoutUserInput> | RoleplayCreateWithoutUserInput[] | RoleplayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleplayCreateOrConnectWithoutUserInput | RoleplayCreateOrConnectWithoutUserInput[]
    createMany?: RoleplayCreateManyUserInputEnvelope
    connect?: RoleplayWhereUniqueInput | RoleplayWhereUniqueInput[]
  }

  export type VocabularyBucketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VocabularyBucketCreateWithoutUserInput, VocabularyBucketUncheckedCreateWithoutUserInput> | VocabularyBucketCreateWithoutUserInput[] | VocabularyBucketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VocabularyBucketCreateOrConnectWithoutUserInput | VocabularyBucketCreateOrConnectWithoutUserInput[]
    createMany?: VocabularyBucketCreateManyUserInputEnvelope
    connect?: VocabularyBucketWhereUniqueInput | VocabularyBucketWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type EntitlementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EntitlementCreateWithoutUserInput, EntitlementUncheckedCreateWithoutUserInput> | EntitlementCreateWithoutUserInput[] | EntitlementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EntitlementCreateOrConnectWithoutUserInput | EntitlementCreateOrConnectWithoutUserInput[]
    createMany?: EntitlementCreateManyUserInputEnvelope
    connect?: EntitlementWhereUniqueInput | EntitlementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type TurnUpdateManyWithoutUserNestedInput = {
    create?: XOR<TurnCreateWithoutUserInput, TurnUncheckedCreateWithoutUserInput> | TurnCreateWithoutUserInput[] | TurnUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TurnCreateOrConnectWithoutUserInput | TurnCreateOrConnectWithoutUserInput[]
    upsert?: TurnUpsertWithWhereUniqueWithoutUserInput | TurnUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TurnCreateManyUserInputEnvelope
    set?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    disconnect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    delete?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    connect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    update?: TurnUpdateWithWhereUniqueWithoutUserInput | TurnUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TurnUpdateManyWithWhereWithoutUserInput | TurnUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TurnScalarWhereInput | TurnScalarWhereInput[]
  }

  export type RoleplayUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoleplayCreateWithoutUserInput, RoleplayUncheckedCreateWithoutUserInput> | RoleplayCreateWithoutUserInput[] | RoleplayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleplayCreateOrConnectWithoutUserInput | RoleplayCreateOrConnectWithoutUserInput[]
    upsert?: RoleplayUpsertWithWhereUniqueWithoutUserInput | RoleplayUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoleplayCreateManyUserInputEnvelope
    set?: RoleplayWhereUniqueInput | RoleplayWhereUniqueInput[]
    disconnect?: RoleplayWhereUniqueInput | RoleplayWhereUniqueInput[]
    delete?: RoleplayWhereUniqueInput | RoleplayWhereUniqueInput[]
    connect?: RoleplayWhereUniqueInput | RoleplayWhereUniqueInput[]
    update?: RoleplayUpdateWithWhereUniqueWithoutUserInput | RoleplayUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoleplayUpdateManyWithWhereWithoutUserInput | RoleplayUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoleplayScalarWhereInput | RoleplayScalarWhereInput[]
  }

  export type VocabularyBucketUpdateManyWithoutUserNestedInput = {
    create?: XOR<VocabularyBucketCreateWithoutUserInput, VocabularyBucketUncheckedCreateWithoutUserInput> | VocabularyBucketCreateWithoutUserInput[] | VocabularyBucketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VocabularyBucketCreateOrConnectWithoutUserInput | VocabularyBucketCreateOrConnectWithoutUserInput[]
    upsert?: VocabularyBucketUpsertWithWhereUniqueWithoutUserInput | VocabularyBucketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VocabularyBucketCreateManyUserInputEnvelope
    set?: VocabularyBucketWhereUniqueInput | VocabularyBucketWhereUniqueInput[]
    disconnect?: VocabularyBucketWhereUniqueInput | VocabularyBucketWhereUniqueInput[]
    delete?: VocabularyBucketWhereUniqueInput | VocabularyBucketWhereUniqueInput[]
    connect?: VocabularyBucketWhereUniqueInput | VocabularyBucketWhereUniqueInput[]
    update?: VocabularyBucketUpdateWithWhereUniqueWithoutUserInput | VocabularyBucketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VocabularyBucketUpdateManyWithWhereWithoutUserInput | VocabularyBucketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VocabularyBucketScalarWhereInput | VocabularyBucketScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type EntitlementUpdateManyWithoutUserNestedInput = {
    create?: XOR<EntitlementCreateWithoutUserInput, EntitlementUncheckedCreateWithoutUserInput> | EntitlementCreateWithoutUserInput[] | EntitlementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EntitlementCreateOrConnectWithoutUserInput | EntitlementCreateOrConnectWithoutUserInput[]
    upsert?: EntitlementUpsertWithWhereUniqueWithoutUserInput | EntitlementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EntitlementCreateManyUserInputEnvelope
    set?: EntitlementWhereUniqueInput | EntitlementWhereUniqueInput[]
    disconnect?: EntitlementWhereUniqueInput | EntitlementWhereUniqueInput[]
    delete?: EntitlementWhereUniqueInput | EntitlementWhereUniqueInput[]
    connect?: EntitlementWhereUniqueInput | EntitlementWhereUniqueInput[]
    update?: EntitlementUpdateWithWhereUniqueWithoutUserInput | EntitlementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EntitlementUpdateManyWithWhereWithoutUserInput | EntitlementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EntitlementScalarWhereInput | EntitlementScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type TurnUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TurnCreateWithoutUserInput, TurnUncheckedCreateWithoutUserInput> | TurnCreateWithoutUserInput[] | TurnUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TurnCreateOrConnectWithoutUserInput | TurnCreateOrConnectWithoutUserInput[]
    upsert?: TurnUpsertWithWhereUniqueWithoutUserInput | TurnUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TurnCreateManyUserInputEnvelope
    set?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    disconnect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    delete?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    connect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    update?: TurnUpdateWithWhereUniqueWithoutUserInput | TurnUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TurnUpdateManyWithWhereWithoutUserInput | TurnUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TurnScalarWhereInput | TurnScalarWhereInput[]
  }

  export type RoleplayUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoleplayCreateWithoutUserInput, RoleplayUncheckedCreateWithoutUserInput> | RoleplayCreateWithoutUserInput[] | RoleplayUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleplayCreateOrConnectWithoutUserInput | RoleplayCreateOrConnectWithoutUserInput[]
    upsert?: RoleplayUpsertWithWhereUniqueWithoutUserInput | RoleplayUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RoleplayCreateManyUserInputEnvelope
    set?: RoleplayWhereUniqueInput | RoleplayWhereUniqueInput[]
    disconnect?: RoleplayWhereUniqueInput | RoleplayWhereUniqueInput[]
    delete?: RoleplayWhereUniqueInput | RoleplayWhereUniqueInput[]
    connect?: RoleplayWhereUniqueInput | RoleplayWhereUniqueInput[]
    update?: RoleplayUpdateWithWhereUniqueWithoutUserInput | RoleplayUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoleplayUpdateManyWithWhereWithoutUserInput | RoleplayUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoleplayScalarWhereInput | RoleplayScalarWhereInput[]
  }

  export type VocabularyBucketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VocabularyBucketCreateWithoutUserInput, VocabularyBucketUncheckedCreateWithoutUserInput> | VocabularyBucketCreateWithoutUserInput[] | VocabularyBucketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VocabularyBucketCreateOrConnectWithoutUserInput | VocabularyBucketCreateOrConnectWithoutUserInput[]
    upsert?: VocabularyBucketUpsertWithWhereUniqueWithoutUserInput | VocabularyBucketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VocabularyBucketCreateManyUserInputEnvelope
    set?: VocabularyBucketWhereUniqueInput | VocabularyBucketWhereUniqueInput[]
    disconnect?: VocabularyBucketWhereUniqueInput | VocabularyBucketWhereUniqueInput[]
    delete?: VocabularyBucketWhereUniqueInput | VocabularyBucketWhereUniqueInput[]
    connect?: VocabularyBucketWhereUniqueInput | VocabularyBucketWhereUniqueInput[]
    update?: VocabularyBucketUpdateWithWhereUniqueWithoutUserInput | VocabularyBucketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VocabularyBucketUpdateManyWithWhereWithoutUserInput | VocabularyBucketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VocabularyBucketScalarWhereInput | VocabularyBucketScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type EntitlementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EntitlementCreateWithoutUserInput, EntitlementUncheckedCreateWithoutUserInput> | EntitlementCreateWithoutUserInput[] | EntitlementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EntitlementCreateOrConnectWithoutUserInput | EntitlementCreateOrConnectWithoutUserInput[]
    upsert?: EntitlementUpsertWithWhereUniqueWithoutUserInput | EntitlementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EntitlementCreateManyUserInputEnvelope
    set?: EntitlementWhereUniqueInput | EntitlementWhereUniqueInput[]
    disconnect?: EntitlementWhereUniqueInput | EntitlementWhereUniqueInput[]
    delete?: EntitlementWhereUniqueInput | EntitlementWhereUniqueInput[]
    connect?: EntitlementWhereUniqueInput | EntitlementWhereUniqueInput[]
    update?: EntitlementUpdateWithWhereUniqueWithoutUserInput | EntitlementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EntitlementUpdateManyWithWhereWithoutUserInput | EntitlementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EntitlementScalarWhereInput | EntitlementScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserCreateNestedOneWithoutEntitlementsInput = {
    create?: XOR<UserCreateWithoutEntitlementsInput, UserUncheckedCreateWithoutEntitlementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntitlementsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEntitlementsNestedInput = {
    create?: XOR<UserCreateWithoutEntitlementsInput, UserUncheckedCreateWithoutEntitlementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEntitlementsInput
    upsert?: UserUpsertWithoutEntitlementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEntitlementsInput, UserUpdateWithoutEntitlementsInput>, UserUncheckedUpdateWithoutEntitlementsInput>
  }

  export type UserCreateNestedOneWithoutConversationInput = {
    create?: XOR<UserCreateWithoutConversationInput, UserUncheckedCreateWithoutConversationInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationInput
    connect?: UserWhereUniqueInput
  }

  export type TurnCreateNestedManyWithoutConversationInput = {
    create?: XOR<TurnCreateWithoutConversationInput, TurnUncheckedCreateWithoutConversationInput> | TurnCreateWithoutConversationInput[] | TurnUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: TurnCreateOrConnectWithoutConversationInput | TurnCreateOrConnectWithoutConversationInput[]
    createMany?: TurnCreateManyConversationInputEnvelope
    connect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
  }

  export type RoleplayCreateNestedOneWithoutConversationsInput = {
    create?: XOR<RoleplayCreateWithoutConversationsInput, RoleplayUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: RoleplayCreateOrConnectWithoutConversationsInput
    connect?: RoleplayWhereUniqueInput
  }

  export type TurnUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<TurnCreateWithoutConversationInput, TurnUncheckedCreateWithoutConversationInput> | TurnCreateWithoutConversationInput[] | TurnUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: TurnCreateOrConnectWithoutConversationInput | TurnCreateOrConnectWithoutConversationInput[]
    createMany?: TurnCreateManyConversationInputEnvelope
    connect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutConversationNestedInput = {
    create?: XOR<UserCreateWithoutConversationInput, UserUncheckedCreateWithoutConversationInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationInput
    upsert?: UserUpsertWithoutConversationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversationInput, UserUpdateWithoutConversationInput>, UserUncheckedUpdateWithoutConversationInput>
  }

  export type TurnUpdateManyWithoutConversationNestedInput = {
    create?: XOR<TurnCreateWithoutConversationInput, TurnUncheckedCreateWithoutConversationInput> | TurnCreateWithoutConversationInput[] | TurnUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: TurnCreateOrConnectWithoutConversationInput | TurnCreateOrConnectWithoutConversationInput[]
    upsert?: TurnUpsertWithWhereUniqueWithoutConversationInput | TurnUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: TurnCreateManyConversationInputEnvelope
    set?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    disconnect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    delete?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    connect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    update?: TurnUpdateWithWhereUniqueWithoutConversationInput | TurnUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: TurnUpdateManyWithWhereWithoutConversationInput | TurnUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: TurnScalarWhereInput | TurnScalarWhereInput[]
  }

  export type RoleplayUpdateOneWithoutConversationsNestedInput = {
    create?: XOR<RoleplayCreateWithoutConversationsInput, RoleplayUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: RoleplayCreateOrConnectWithoutConversationsInput
    upsert?: RoleplayUpsertWithoutConversationsInput
    disconnect?: RoleplayWhereInput | boolean
    delete?: RoleplayWhereInput | boolean
    connect?: RoleplayWhereUniqueInput
    update?: XOR<XOR<RoleplayUpdateToOneWithWhereWithoutConversationsInput, RoleplayUpdateWithoutConversationsInput>, RoleplayUncheckedUpdateWithoutConversationsInput>
  }

  export type TurnUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<TurnCreateWithoutConversationInput, TurnUncheckedCreateWithoutConversationInput> | TurnCreateWithoutConversationInput[] | TurnUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: TurnCreateOrConnectWithoutConversationInput | TurnCreateOrConnectWithoutConversationInput[]
    upsert?: TurnUpsertWithWhereUniqueWithoutConversationInput | TurnUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: TurnCreateManyConversationInputEnvelope
    set?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    disconnect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    delete?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    connect?: TurnWhereUniqueInput | TurnWhereUniqueInput[]
    update?: TurnUpdateWithWhereUniqueWithoutConversationInput | TurnUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: TurnUpdateManyWithWhereWithoutConversationInput | TurnUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: TurnScalarWhereInput | TurnScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutTurnInput = {
    create?: XOR<ConversationCreateWithoutTurnInput, ConversationUncheckedCreateWithoutTurnInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutTurnInput
    connect?: ConversationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTurnInput = {
    create?: XOR<UserCreateWithoutTurnInput, UserUncheckedCreateWithoutTurnInput>
    connectOrCreate?: UserCreateOrConnectWithoutTurnInput
    connect?: UserWhereUniqueInput
  }

  export type VocabAgentSuggestionCreateNestedManyWithoutTurnInput = {
    create?: XOR<VocabAgentSuggestionCreateWithoutTurnInput, VocabAgentSuggestionUncheckedCreateWithoutTurnInput> | VocabAgentSuggestionCreateWithoutTurnInput[] | VocabAgentSuggestionUncheckedCreateWithoutTurnInput[]
    connectOrCreate?: VocabAgentSuggestionCreateOrConnectWithoutTurnInput | VocabAgentSuggestionCreateOrConnectWithoutTurnInput[]
    createMany?: VocabAgentSuggestionCreateManyTurnInputEnvelope
    connect?: VocabAgentSuggestionWhereUniqueInput | VocabAgentSuggestionWhereUniqueInput[]
  }

  export type VocabAgentSuggestionUncheckedCreateNestedManyWithoutTurnInput = {
    create?: XOR<VocabAgentSuggestionCreateWithoutTurnInput, VocabAgentSuggestionUncheckedCreateWithoutTurnInput> | VocabAgentSuggestionCreateWithoutTurnInput[] | VocabAgentSuggestionUncheckedCreateWithoutTurnInput[]
    connectOrCreate?: VocabAgentSuggestionCreateOrConnectWithoutTurnInput | VocabAgentSuggestionCreateOrConnectWithoutTurnInput[]
    createMany?: VocabAgentSuggestionCreateManyTurnInputEnvelope
    connect?: VocabAgentSuggestionWhereUniqueInput | VocabAgentSuggestionWhereUniqueInput[]
  }

  export type ConversationUpdateOneRequiredWithoutTurnNestedInput = {
    create?: XOR<ConversationCreateWithoutTurnInput, ConversationUncheckedCreateWithoutTurnInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutTurnInput
    upsert?: ConversationUpsertWithoutTurnInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutTurnInput, ConversationUpdateWithoutTurnInput>, ConversationUncheckedUpdateWithoutTurnInput>
  }

  export type UserUpdateOneRequiredWithoutTurnNestedInput = {
    create?: XOR<UserCreateWithoutTurnInput, UserUncheckedCreateWithoutTurnInput>
    connectOrCreate?: UserCreateOrConnectWithoutTurnInput
    upsert?: UserUpsertWithoutTurnInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTurnInput, UserUpdateWithoutTurnInput>, UserUncheckedUpdateWithoutTurnInput>
  }

  export type VocabAgentSuggestionUpdateManyWithoutTurnNestedInput = {
    create?: XOR<VocabAgentSuggestionCreateWithoutTurnInput, VocabAgentSuggestionUncheckedCreateWithoutTurnInput> | VocabAgentSuggestionCreateWithoutTurnInput[] | VocabAgentSuggestionUncheckedCreateWithoutTurnInput[]
    connectOrCreate?: VocabAgentSuggestionCreateOrConnectWithoutTurnInput | VocabAgentSuggestionCreateOrConnectWithoutTurnInput[]
    upsert?: VocabAgentSuggestionUpsertWithWhereUniqueWithoutTurnInput | VocabAgentSuggestionUpsertWithWhereUniqueWithoutTurnInput[]
    createMany?: VocabAgentSuggestionCreateManyTurnInputEnvelope
    set?: VocabAgentSuggestionWhereUniqueInput | VocabAgentSuggestionWhereUniqueInput[]
    disconnect?: VocabAgentSuggestionWhereUniqueInput | VocabAgentSuggestionWhereUniqueInput[]
    delete?: VocabAgentSuggestionWhereUniqueInput | VocabAgentSuggestionWhereUniqueInput[]
    connect?: VocabAgentSuggestionWhereUniqueInput | VocabAgentSuggestionWhereUniqueInput[]
    update?: VocabAgentSuggestionUpdateWithWhereUniqueWithoutTurnInput | VocabAgentSuggestionUpdateWithWhereUniqueWithoutTurnInput[]
    updateMany?: VocabAgentSuggestionUpdateManyWithWhereWithoutTurnInput | VocabAgentSuggestionUpdateManyWithWhereWithoutTurnInput[]
    deleteMany?: VocabAgentSuggestionScalarWhereInput | VocabAgentSuggestionScalarWhereInput[]
  }

  export type VocabAgentSuggestionUncheckedUpdateManyWithoutTurnNestedInput = {
    create?: XOR<VocabAgentSuggestionCreateWithoutTurnInput, VocabAgentSuggestionUncheckedCreateWithoutTurnInput> | VocabAgentSuggestionCreateWithoutTurnInput[] | VocabAgentSuggestionUncheckedCreateWithoutTurnInput[]
    connectOrCreate?: VocabAgentSuggestionCreateOrConnectWithoutTurnInput | VocabAgentSuggestionCreateOrConnectWithoutTurnInput[]
    upsert?: VocabAgentSuggestionUpsertWithWhereUniqueWithoutTurnInput | VocabAgentSuggestionUpsertWithWhereUniqueWithoutTurnInput[]
    createMany?: VocabAgentSuggestionCreateManyTurnInputEnvelope
    set?: VocabAgentSuggestionWhereUniqueInput | VocabAgentSuggestionWhereUniqueInput[]
    disconnect?: VocabAgentSuggestionWhereUniqueInput | VocabAgentSuggestionWhereUniqueInput[]
    delete?: VocabAgentSuggestionWhereUniqueInput | VocabAgentSuggestionWhereUniqueInput[]
    connect?: VocabAgentSuggestionWhereUniqueInput | VocabAgentSuggestionWhereUniqueInput[]
    update?: VocabAgentSuggestionUpdateWithWhereUniqueWithoutTurnInput | VocabAgentSuggestionUpdateWithWhereUniqueWithoutTurnInput[]
    updateMany?: VocabAgentSuggestionUpdateManyWithWhereWithoutTurnInput | VocabAgentSuggestionUpdateManyWithWhereWithoutTurnInput[]
    deleteMany?: VocabAgentSuggestionScalarWhereInput | VocabAgentSuggestionScalarWhereInput[]
  }

  export type VocabAgentSuggestionCreatewordsInput = {
    set: string[]
  }

  export type TurnCreateNestedOneWithoutVocabAgentSuggestionInput = {
    create?: XOR<TurnCreateWithoutVocabAgentSuggestionInput, TurnUncheckedCreateWithoutVocabAgentSuggestionInput>
    connectOrCreate?: TurnCreateOrConnectWithoutVocabAgentSuggestionInput
    connect?: TurnWhereUniqueInput
  }

  export type VocabAgentSuggestionUpdatewordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TurnUpdateOneRequiredWithoutVocabAgentSuggestionNestedInput = {
    create?: XOR<TurnCreateWithoutVocabAgentSuggestionInput, TurnUncheckedCreateWithoutVocabAgentSuggestionInput>
    connectOrCreate?: TurnCreateOrConnectWithoutVocabAgentSuggestionInput
    upsert?: TurnUpsertWithoutVocabAgentSuggestionInput
    connect?: TurnWhereUniqueInput
    update?: XOR<XOR<TurnUpdateToOneWithWhereWithoutVocabAgentSuggestionInput, TurnUpdateWithoutVocabAgentSuggestionInput>, TurnUncheckedUpdateWithoutVocabAgentSuggestionInput>
  }

  export type UserCreateNestedOneWithoutVocabularyBucketsInput = {
    create?: XOR<UserCreateWithoutVocabularyBucketsInput, UserUncheckedCreateWithoutVocabularyBucketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVocabularyBucketsInput
    connect?: UserWhereUniqueInput
  }

  export type VocabularyCreateNestedManyWithoutBucketInput = {
    create?: XOR<VocabularyCreateWithoutBucketInput, VocabularyUncheckedCreateWithoutBucketInput> | VocabularyCreateWithoutBucketInput[] | VocabularyUncheckedCreateWithoutBucketInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutBucketInput | VocabularyCreateOrConnectWithoutBucketInput[]
    createMany?: VocabularyCreateManyBucketInputEnvelope
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
  }

  export type VocabularyUncheckedCreateNestedManyWithoutBucketInput = {
    create?: XOR<VocabularyCreateWithoutBucketInput, VocabularyUncheckedCreateWithoutBucketInput> | VocabularyCreateWithoutBucketInput[] | VocabularyUncheckedCreateWithoutBucketInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutBucketInput | VocabularyCreateOrConnectWithoutBucketInput[]
    createMany?: VocabularyCreateManyBucketInputEnvelope
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutVocabularyBucketsNestedInput = {
    create?: XOR<UserCreateWithoutVocabularyBucketsInput, UserUncheckedCreateWithoutVocabularyBucketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVocabularyBucketsInput
    upsert?: UserUpsertWithoutVocabularyBucketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVocabularyBucketsInput, UserUpdateWithoutVocabularyBucketsInput>, UserUncheckedUpdateWithoutVocabularyBucketsInput>
  }

  export type VocabularyUpdateManyWithoutBucketNestedInput = {
    create?: XOR<VocabularyCreateWithoutBucketInput, VocabularyUncheckedCreateWithoutBucketInput> | VocabularyCreateWithoutBucketInput[] | VocabularyUncheckedCreateWithoutBucketInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutBucketInput | VocabularyCreateOrConnectWithoutBucketInput[]
    upsert?: VocabularyUpsertWithWhereUniqueWithoutBucketInput | VocabularyUpsertWithWhereUniqueWithoutBucketInput[]
    createMany?: VocabularyCreateManyBucketInputEnvelope
    set?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    disconnect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    delete?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    update?: VocabularyUpdateWithWhereUniqueWithoutBucketInput | VocabularyUpdateWithWhereUniqueWithoutBucketInput[]
    updateMany?: VocabularyUpdateManyWithWhereWithoutBucketInput | VocabularyUpdateManyWithWhereWithoutBucketInput[]
    deleteMany?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
  }

  export type VocabularyUncheckedUpdateManyWithoutBucketNestedInput = {
    create?: XOR<VocabularyCreateWithoutBucketInput, VocabularyUncheckedCreateWithoutBucketInput> | VocabularyCreateWithoutBucketInput[] | VocabularyUncheckedCreateWithoutBucketInput[]
    connectOrCreate?: VocabularyCreateOrConnectWithoutBucketInput | VocabularyCreateOrConnectWithoutBucketInput[]
    upsert?: VocabularyUpsertWithWhereUniqueWithoutBucketInput | VocabularyUpsertWithWhereUniqueWithoutBucketInput[]
    createMany?: VocabularyCreateManyBucketInputEnvelope
    set?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    disconnect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    delete?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    connect?: VocabularyWhereUniqueInput | VocabularyWhereUniqueInput[]
    update?: VocabularyUpdateWithWhereUniqueWithoutBucketInput | VocabularyUpdateWithWhereUniqueWithoutBucketInput[]
    updateMany?: VocabularyUpdateManyWithWhereWithoutBucketInput | VocabularyUpdateManyWithWhereWithoutBucketInput[]
    deleteMany?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
  }

  export type VocabularyBucketCreateNestedOneWithoutVocabularyInput = {
    create?: XOR<VocabularyBucketCreateWithoutVocabularyInput, VocabularyBucketUncheckedCreateWithoutVocabularyInput>
    connectOrCreate?: VocabularyBucketCreateOrConnectWithoutVocabularyInput
    connect?: VocabularyBucketWhereUniqueInput
  }

  export type VocabularyBucketUpdateOneRequiredWithoutVocabularyNestedInput = {
    create?: XOR<VocabularyBucketCreateWithoutVocabularyInput, VocabularyBucketUncheckedCreateWithoutVocabularyInput>
    connectOrCreate?: VocabularyBucketCreateOrConnectWithoutVocabularyInput
    upsert?: VocabularyBucketUpsertWithoutVocabularyInput
    connect?: VocabularyBucketWhereUniqueInput
    update?: XOR<XOR<VocabularyBucketUpdateToOneWithWhereWithoutVocabularyInput, VocabularyBucketUpdateWithoutVocabularyInput>, VocabularyBucketUncheckedUpdateWithoutVocabularyInput>
  }

  export type UserCreateNestedOneWithoutRoleplayInput = {
    create?: XOR<UserCreateWithoutRoleplayInput, UserUncheckedCreateWithoutRoleplayInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoleplayInput
    connect?: UserWhereUniqueInput
  }

  export type ConversationCreateNestedManyWithoutRoleplayInput = {
    create?: XOR<ConversationCreateWithoutRoleplayInput, ConversationUncheckedCreateWithoutRoleplayInput> | ConversationCreateWithoutRoleplayInput[] | ConversationUncheckedCreateWithoutRoleplayInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutRoleplayInput | ConversationCreateOrConnectWithoutRoleplayInput[]
    createMany?: ConversationCreateManyRoleplayInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutRoleplayInput = {
    create?: XOR<ConversationCreateWithoutRoleplayInput, ConversationUncheckedCreateWithoutRoleplayInput> | ConversationCreateWithoutRoleplayInput[] | ConversationUncheckedCreateWithoutRoleplayInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutRoleplayInput | ConversationCreateOrConnectWithoutRoleplayInput[]
    createMany?: ConversationCreateManyRoleplayInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRoleplayNestedInput = {
    create?: XOR<UserCreateWithoutRoleplayInput, UserUncheckedCreateWithoutRoleplayInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoleplayInput
    upsert?: UserUpsertWithoutRoleplayInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoleplayInput, UserUpdateWithoutRoleplayInput>, UserUncheckedUpdateWithoutRoleplayInput>
  }

  export type ConversationUpdateManyWithoutRoleplayNestedInput = {
    create?: XOR<ConversationCreateWithoutRoleplayInput, ConversationUncheckedCreateWithoutRoleplayInput> | ConversationCreateWithoutRoleplayInput[] | ConversationUncheckedCreateWithoutRoleplayInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutRoleplayInput | ConversationCreateOrConnectWithoutRoleplayInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutRoleplayInput | ConversationUpsertWithWhereUniqueWithoutRoleplayInput[]
    createMany?: ConversationCreateManyRoleplayInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutRoleplayInput | ConversationUpdateWithWhereUniqueWithoutRoleplayInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutRoleplayInput | ConversationUpdateManyWithWhereWithoutRoleplayInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutRoleplayNestedInput = {
    create?: XOR<ConversationCreateWithoutRoleplayInput, ConversationUncheckedCreateWithoutRoleplayInput> | ConversationCreateWithoutRoleplayInput[] | ConversationUncheckedCreateWithoutRoleplayInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutRoleplayInput | ConversationCreateOrConnectWithoutRoleplayInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutRoleplayInput | ConversationUpsertWithWhereUniqueWithoutRoleplayInput[]
    createMany?: ConversationCreateManyRoleplayInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutRoleplayInput | ConversationUpdateWithWhereUniqueWithoutRoleplayInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutRoleplayInput | ConversationUpdateManyWithWhereWithoutRoleplayInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AccountCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ConversationCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    Turn?: TurnCreateNestedManyWithoutConversationInput
    Roleplay?: RoleplayCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    roleplayId?: string | null
    createdAt?: Date | string
    Turn?: TurnUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutUserInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationCreateManyUserInputEnvelope = {
    data: ConversationCreateManyUserInput | ConversationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TurnCreateWithoutUserInput = {
    id?: string
    message: string
    reply: string
    totalTokens: number
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutTurnInput
    VocabAgentSuggestion?: VocabAgentSuggestionCreateNestedManyWithoutTurnInput
  }

  export type TurnUncheckedCreateWithoutUserInput = {
    id?: string
    conversationId: string
    message: string
    reply: string
    totalTokens: number
    createdAt?: Date | string
    VocabAgentSuggestion?: VocabAgentSuggestionUncheckedCreateNestedManyWithoutTurnInput
  }

  export type TurnCreateOrConnectWithoutUserInput = {
    where: TurnWhereUniqueInput
    create: XOR<TurnCreateWithoutUserInput, TurnUncheckedCreateWithoutUserInput>
  }

  export type TurnCreateManyUserInputEnvelope = {
    data: TurnCreateManyUserInput | TurnCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleplayCreateWithoutUserInput = {
    id?: string
    title: string
    assistantRole: string
    userRole: string
    conversationTone: string
    conversationContext: string
    createdAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutRoleplayInput
  }

  export type RoleplayUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    assistantRole: string
    userRole: string
    conversationTone: string
    conversationContext: string
    createdAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutRoleplayInput
  }

  export type RoleplayCreateOrConnectWithoutUserInput = {
    where: RoleplayWhereUniqueInput
    create: XOR<RoleplayCreateWithoutUserInput, RoleplayUncheckedCreateWithoutUserInput>
  }

  export type RoleplayCreateManyUserInputEnvelope = {
    data: RoleplayCreateManyUserInput | RoleplayCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VocabularyBucketCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    Vocabulary?: VocabularyCreateNestedManyWithoutBucketInput
  }

  export type VocabularyBucketUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    Vocabulary?: VocabularyUncheckedCreateNestedManyWithoutBucketInput
  }

  export type VocabularyBucketCreateOrConnectWithoutUserInput = {
    where: VocabularyBucketWhereUniqueInput
    create: XOR<VocabularyBucketCreateWithoutUserInput, VocabularyBucketUncheckedCreateWithoutUserInput>
  }

  export type VocabularyBucketCreateManyUserInputEnvelope = {
    data: VocabularyBucketCreateManyUserInput | VocabularyBucketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    stripeCustomerId: string
    stripeSubscriptionId: string
    stripePriceId: string
    stripeSubscriptionActive?: boolean
    stripeSubscriptionExpires?: Date | string | null
    stripeInvoiceFailed?: boolean
    messageCurrencyMax?: number
    messageUsed?: number
    subscribedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    stripeCustomerId: string
    stripeSubscriptionId: string
    stripePriceId: string
    stripeSubscriptionActive?: boolean
    stripeSubscriptionExpires?: Date | string | null
    stripeInvoiceFailed?: boolean
    messageCurrencyMax?: number
    messageUsed?: number
    subscribedAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type EntitlementCreateWithoutUserInput = {
    id?: string
    feature: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntitlementUncheckedCreateWithoutUserInput = {
    id?: string
    feature: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EntitlementCreateOrConnectWithoutUserInput = {
    where: EntitlementWhereUniqueInput
    create: XOR<EntitlementCreateWithoutUserInput, EntitlementUncheckedCreateWithoutUserInput>
  }

  export type EntitlementCreateManyUserInputEnvelope = {
    data: EntitlementCreateManyUserInput | EntitlementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type ConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
  }

  export type ConversationUpdateManyWithWhereWithoutUserInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: StringFilter<"Conversation"> | string
    title?: StringFilter<"Conversation"> | string
    userId?: StringFilter<"Conversation"> | string
    roleplayId?: StringNullableFilter<"Conversation"> | string | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
  }

  export type TurnUpsertWithWhereUniqueWithoutUserInput = {
    where: TurnWhereUniqueInput
    update: XOR<TurnUpdateWithoutUserInput, TurnUncheckedUpdateWithoutUserInput>
    create: XOR<TurnCreateWithoutUserInput, TurnUncheckedCreateWithoutUserInput>
  }

  export type TurnUpdateWithWhereUniqueWithoutUserInput = {
    where: TurnWhereUniqueInput
    data: XOR<TurnUpdateWithoutUserInput, TurnUncheckedUpdateWithoutUserInput>
  }

  export type TurnUpdateManyWithWhereWithoutUserInput = {
    where: TurnScalarWhereInput
    data: XOR<TurnUpdateManyMutationInput, TurnUncheckedUpdateManyWithoutUserInput>
  }

  export type TurnScalarWhereInput = {
    AND?: TurnScalarWhereInput | TurnScalarWhereInput[]
    OR?: TurnScalarWhereInput[]
    NOT?: TurnScalarWhereInput | TurnScalarWhereInput[]
    id?: StringFilter<"Turn"> | string
    conversationId?: StringFilter<"Turn"> | string
    userId?: StringFilter<"Turn"> | string
    message?: StringFilter<"Turn"> | string
    reply?: StringFilter<"Turn"> | string
    totalTokens?: IntFilter<"Turn"> | number
    createdAt?: DateTimeFilter<"Turn"> | Date | string
  }

  export type RoleplayUpsertWithWhereUniqueWithoutUserInput = {
    where: RoleplayWhereUniqueInput
    update: XOR<RoleplayUpdateWithoutUserInput, RoleplayUncheckedUpdateWithoutUserInput>
    create: XOR<RoleplayCreateWithoutUserInput, RoleplayUncheckedCreateWithoutUserInput>
  }

  export type RoleplayUpdateWithWhereUniqueWithoutUserInput = {
    where: RoleplayWhereUniqueInput
    data: XOR<RoleplayUpdateWithoutUserInput, RoleplayUncheckedUpdateWithoutUserInput>
  }

  export type RoleplayUpdateManyWithWhereWithoutUserInput = {
    where: RoleplayScalarWhereInput
    data: XOR<RoleplayUpdateManyMutationInput, RoleplayUncheckedUpdateManyWithoutUserInput>
  }

  export type RoleplayScalarWhereInput = {
    AND?: RoleplayScalarWhereInput | RoleplayScalarWhereInput[]
    OR?: RoleplayScalarWhereInput[]
    NOT?: RoleplayScalarWhereInput | RoleplayScalarWhereInput[]
    id?: StringFilter<"Roleplay"> | string
    userId?: StringFilter<"Roleplay"> | string
    title?: StringFilter<"Roleplay"> | string
    assistantRole?: StringFilter<"Roleplay"> | string
    userRole?: StringFilter<"Roleplay"> | string
    conversationTone?: StringFilter<"Roleplay"> | string
    conversationContext?: StringFilter<"Roleplay"> | string
    createdAt?: DateTimeFilter<"Roleplay"> | Date | string
  }

  export type VocabularyBucketUpsertWithWhereUniqueWithoutUserInput = {
    where: VocabularyBucketWhereUniqueInput
    update: XOR<VocabularyBucketUpdateWithoutUserInput, VocabularyBucketUncheckedUpdateWithoutUserInput>
    create: XOR<VocabularyBucketCreateWithoutUserInput, VocabularyBucketUncheckedCreateWithoutUserInput>
  }

  export type VocabularyBucketUpdateWithWhereUniqueWithoutUserInput = {
    where: VocabularyBucketWhereUniqueInput
    data: XOR<VocabularyBucketUpdateWithoutUserInput, VocabularyBucketUncheckedUpdateWithoutUserInput>
  }

  export type VocabularyBucketUpdateManyWithWhereWithoutUserInput = {
    where: VocabularyBucketScalarWhereInput
    data: XOR<VocabularyBucketUpdateManyMutationInput, VocabularyBucketUncheckedUpdateManyWithoutUserInput>
  }

  export type VocabularyBucketScalarWhereInput = {
    AND?: VocabularyBucketScalarWhereInput | VocabularyBucketScalarWhereInput[]
    OR?: VocabularyBucketScalarWhereInput[]
    NOT?: VocabularyBucketScalarWhereInput | VocabularyBucketScalarWhereInput[]
    id?: StringFilter<"VocabularyBucket"> | string
    userId?: StringFilter<"VocabularyBucket"> | string
    title?: StringFilter<"VocabularyBucket"> | string
    createdAt?: DateTimeFilter<"VocabularyBucket"> | Date | string
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    stripeSubscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeInvoiceFailed?: BoolFieldUpdateOperationsInput | boolean
    messageCurrencyMax?: IntFieldUpdateOperationsInput | number
    messageUsed?: IntFieldUpdateOperationsInput | number
    subscribedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    stripeCustomerId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionId?: StringFieldUpdateOperationsInput | string
    stripePriceId?: StringFieldUpdateOperationsInput | string
    stripeSubscriptionActive?: BoolFieldUpdateOperationsInput | boolean
    stripeSubscriptionExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stripeInvoiceFailed?: BoolFieldUpdateOperationsInput | boolean
    messageCurrencyMax?: IntFieldUpdateOperationsInput | number
    messageUsed?: IntFieldUpdateOperationsInput | number
    subscribedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntitlementUpsertWithWhereUniqueWithoutUserInput = {
    where: EntitlementWhereUniqueInput
    update: XOR<EntitlementUpdateWithoutUserInput, EntitlementUncheckedUpdateWithoutUserInput>
    create: XOR<EntitlementCreateWithoutUserInput, EntitlementUncheckedCreateWithoutUserInput>
  }

  export type EntitlementUpdateWithWhereUniqueWithoutUserInput = {
    where: EntitlementWhereUniqueInput
    data: XOR<EntitlementUpdateWithoutUserInput, EntitlementUncheckedUpdateWithoutUserInput>
  }

  export type EntitlementUpdateManyWithWhereWithoutUserInput = {
    where: EntitlementScalarWhereInput
    data: XOR<EntitlementUpdateManyMutationInput, EntitlementUncheckedUpdateManyWithoutUserInput>
  }

  export type EntitlementScalarWhereInput = {
    AND?: EntitlementScalarWhereInput | EntitlementScalarWhereInput[]
    OR?: EntitlementScalarWhereInput[]
    NOT?: EntitlementScalarWhereInput | EntitlementScalarWhereInput[]
    id?: StringFilter<"Entitlement"> | string
    userId?: StringFilter<"Entitlement"> | string
    feature?: StringFilter<"Entitlement"> | string
    active?: BoolFilter<"Entitlement"> | boolean
    createdAt?: DateTimeFilter<"Entitlement"> | Date | string
    updatedAt?: DateTimeFilter<"Entitlement"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    Conversation?: ConversationCreateNestedManyWithoutUserInput
    Turn?: TurnCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Conversation?: ConversationUncheckedCreateNestedManyWithoutUserInput
    Turn?: TurnUncheckedCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayUncheckedCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUpdateManyWithoutUserNestedInput
    Turn?: TurnUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    Turn?: TurnUncheckedUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUncheckedUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    Conversation?: ConversationCreateNestedManyWithoutUserInput
    Turn?: TurnCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    Conversation?: ConversationUncheckedCreateNestedManyWithoutUserInput
    Turn?: TurnUncheckedCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayUncheckedCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUpdateManyWithoutUserNestedInput
    Turn?: TurnUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    Turn?: TurnUncheckedUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUncheckedUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Conversation?: ConversationCreateNestedManyWithoutUserInput
    Turn?: TurnCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketCreateNestedManyWithoutUserInput
    Entitlements?: EntitlementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Conversation?: ConversationUncheckedCreateNestedManyWithoutUserInput
    Turn?: TurnUncheckedCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayUncheckedCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketUncheckedCreateNestedManyWithoutUserInput
    Entitlements?: EntitlementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUpdateManyWithoutUserNestedInput
    Turn?: TurnUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUpdateManyWithoutUserNestedInput
    Entitlements?: EntitlementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    Turn?: TurnUncheckedUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUncheckedUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUncheckedUpdateManyWithoutUserNestedInput
    Entitlements?: EntitlementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEntitlementsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Conversation?: ConversationCreateNestedManyWithoutUserInput
    Turn?: TurnCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEntitlementsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Conversation?: ConversationUncheckedCreateNestedManyWithoutUserInput
    Turn?: TurnUncheckedCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayUncheckedCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEntitlementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEntitlementsInput, UserUncheckedCreateWithoutEntitlementsInput>
  }

  export type UserUpsertWithoutEntitlementsInput = {
    update: XOR<UserUpdateWithoutEntitlementsInput, UserUncheckedUpdateWithoutEntitlementsInput>
    create: XOR<UserCreateWithoutEntitlementsInput, UserUncheckedCreateWithoutEntitlementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEntitlementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEntitlementsInput, UserUncheckedUpdateWithoutEntitlementsInput>
  }

  export type UserUpdateWithoutEntitlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUpdateManyWithoutUserNestedInput
    Turn?: TurnUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEntitlementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    Turn?: TurnUncheckedUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUncheckedUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutConversationInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Turn?: TurnCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversationInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Turn?: TurnUncheckedCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayUncheckedCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversationInput, UserUncheckedCreateWithoutConversationInput>
  }

  export type TurnCreateWithoutConversationInput = {
    id?: string
    message: string
    reply: string
    totalTokens: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTurnInput
    VocabAgentSuggestion?: VocabAgentSuggestionCreateNestedManyWithoutTurnInput
  }

  export type TurnUncheckedCreateWithoutConversationInput = {
    id?: string
    userId: string
    message: string
    reply: string
    totalTokens: number
    createdAt?: Date | string
    VocabAgentSuggestion?: VocabAgentSuggestionUncheckedCreateNestedManyWithoutTurnInput
  }

  export type TurnCreateOrConnectWithoutConversationInput = {
    where: TurnWhereUniqueInput
    create: XOR<TurnCreateWithoutConversationInput, TurnUncheckedCreateWithoutConversationInput>
  }

  export type TurnCreateManyConversationInputEnvelope = {
    data: TurnCreateManyConversationInput | TurnCreateManyConversationInput[]
    skipDuplicates?: boolean
  }

  export type RoleplayCreateWithoutConversationsInput = {
    id?: string
    title: string
    assistantRole: string
    userRole: string
    conversationTone: string
    conversationContext: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRoleplayInput
  }

  export type RoleplayUncheckedCreateWithoutConversationsInput = {
    id?: string
    userId: string
    title: string
    assistantRole: string
    userRole: string
    conversationTone: string
    conversationContext: string
    createdAt?: Date | string
  }

  export type RoleplayCreateOrConnectWithoutConversationsInput = {
    where: RoleplayWhereUniqueInput
    create: XOR<RoleplayCreateWithoutConversationsInput, RoleplayUncheckedCreateWithoutConversationsInput>
  }

  export type UserUpsertWithoutConversationInput = {
    update: XOR<UserUpdateWithoutConversationInput, UserUncheckedUpdateWithoutConversationInput>
    create: XOR<UserCreateWithoutConversationInput, UserUncheckedCreateWithoutConversationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversationInput, UserUncheckedUpdateWithoutConversationInput>
  }

  export type UserUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Turn?: TurnUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Turn?: TurnUncheckedUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUncheckedUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TurnUpsertWithWhereUniqueWithoutConversationInput = {
    where: TurnWhereUniqueInput
    update: XOR<TurnUpdateWithoutConversationInput, TurnUncheckedUpdateWithoutConversationInput>
    create: XOR<TurnCreateWithoutConversationInput, TurnUncheckedCreateWithoutConversationInput>
  }

  export type TurnUpdateWithWhereUniqueWithoutConversationInput = {
    where: TurnWhereUniqueInput
    data: XOR<TurnUpdateWithoutConversationInput, TurnUncheckedUpdateWithoutConversationInput>
  }

  export type TurnUpdateManyWithWhereWithoutConversationInput = {
    where: TurnScalarWhereInput
    data: XOR<TurnUpdateManyMutationInput, TurnUncheckedUpdateManyWithoutConversationInput>
  }

  export type RoleplayUpsertWithoutConversationsInput = {
    update: XOR<RoleplayUpdateWithoutConversationsInput, RoleplayUncheckedUpdateWithoutConversationsInput>
    create: XOR<RoleplayCreateWithoutConversationsInput, RoleplayUncheckedCreateWithoutConversationsInput>
    where?: RoleplayWhereInput
  }

  export type RoleplayUpdateToOneWithWhereWithoutConversationsInput = {
    where?: RoleplayWhereInput
    data: XOR<RoleplayUpdateWithoutConversationsInput, RoleplayUncheckedUpdateWithoutConversationsInput>
  }

  export type RoleplayUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assistantRole?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    conversationTone?: StringFieldUpdateOperationsInput | string
    conversationContext?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoleplayNestedInput
  }

  export type RoleplayUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assistantRole?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    conversationTone?: StringFieldUpdateOperationsInput | string
    conversationContext?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateWithoutTurnInput = {
    id?: string
    title: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConversationInput
    Roleplay?: RoleplayCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutTurnInput = {
    id?: string
    title: string
    userId: string
    roleplayId?: string | null
    createdAt?: Date | string
  }

  export type ConversationCreateOrConnectWithoutTurnInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutTurnInput, ConversationUncheckedCreateWithoutTurnInput>
  }

  export type UserCreateWithoutTurnInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Conversation?: ConversationCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTurnInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Conversation?: ConversationUncheckedCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayUncheckedCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTurnInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTurnInput, UserUncheckedCreateWithoutTurnInput>
  }

  export type VocabAgentSuggestionCreateWithoutTurnInput = {
    id?: string
    totalTokens: number
    words?: VocabAgentSuggestionCreatewordsInput | string[]
    enhancedText: string
    createdAt?: Date | string
  }

  export type VocabAgentSuggestionUncheckedCreateWithoutTurnInput = {
    id?: string
    totalTokens: number
    words?: VocabAgentSuggestionCreatewordsInput | string[]
    enhancedText: string
    createdAt?: Date | string
  }

  export type VocabAgentSuggestionCreateOrConnectWithoutTurnInput = {
    where: VocabAgentSuggestionWhereUniqueInput
    create: XOR<VocabAgentSuggestionCreateWithoutTurnInput, VocabAgentSuggestionUncheckedCreateWithoutTurnInput>
  }

  export type VocabAgentSuggestionCreateManyTurnInputEnvelope = {
    data: VocabAgentSuggestionCreateManyTurnInput | VocabAgentSuggestionCreateManyTurnInput[]
    skipDuplicates?: boolean
  }

  export type ConversationUpsertWithoutTurnInput = {
    update: XOR<ConversationUpdateWithoutTurnInput, ConversationUncheckedUpdateWithoutTurnInput>
    create: XOR<ConversationCreateWithoutTurnInput, ConversationUncheckedCreateWithoutTurnInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutTurnInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutTurnInput, ConversationUncheckedUpdateWithoutTurnInput>
  }

  export type ConversationUpdateWithoutTurnInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversationNestedInput
    Roleplay?: RoleplayUpdateOneWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutTurnInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    roleplayId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutTurnInput = {
    update: XOR<UserUpdateWithoutTurnInput, UserUncheckedUpdateWithoutTurnInput>
    create: XOR<UserCreateWithoutTurnInput, UserUncheckedCreateWithoutTurnInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTurnInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTurnInput, UserUncheckedUpdateWithoutTurnInput>
  }

  export type UserUpdateWithoutTurnInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTurnInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUncheckedUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VocabAgentSuggestionUpsertWithWhereUniqueWithoutTurnInput = {
    where: VocabAgentSuggestionWhereUniqueInput
    update: XOR<VocabAgentSuggestionUpdateWithoutTurnInput, VocabAgentSuggestionUncheckedUpdateWithoutTurnInput>
    create: XOR<VocabAgentSuggestionCreateWithoutTurnInput, VocabAgentSuggestionUncheckedCreateWithoutTurnInput>
  }

  export type VocabAgentSuggestionUpdateWithWhereUniqueWithoutTurnInput = {
    where: VocabAgentSuggestionWhereUniqueInput
    data: XOR<VocabAgentSuggestionUpdateWithoutTurnInput, VocabAgentSuggestionUncheckedUpdateWithoutTurnInput>
  }

  export type VocabAgentSuggestionUpdateManyWithWhereWithoutTurnInput = {
    where: VocabAgentSuggestionScalarWhereInput
    data: XOR<VocabAgentSuggestionUpdateManyMutationInput, VocabAgentSuggestionUncheckedUpdateManyWithoutTurnInput>
  }

  export type VocabAgentSuggestionScalarWhereInput = {
    AND?: VocabAgentSuggestionScalarWhereInput | VocabAgentSuggestionScalarWhereInput[]
    OR?: VocabAgentSuggestionScalarWhereInput[]
    NOT?: VocabAgentSuggestionScalarWhereInput | VocabAgentSuggestionScalarWhereInput[]
    id?: StringFilter<"VocabAgentSuggestion"> | string
    turnId?: StringFilter<"VocabAgentSuggestion"> | string
    totalTokens?: IntFilter<"VocabAgentSuggestion"> | number
    words?: StringNullableListFilter<"VocabAgentSuggestion">
    enhancedText?: StringFilter<"VocabAgentSuggestion"> | string
    createdAt?: DateTimeFilter<"VocabAgentSuggestion"> | Date | string
  }

  export type TurnCreateWithoutVocabAgentSuggestionInput = {
    id?: string
    message: string
    reply: string
    totalTokens: number
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutTurnInput
    user: UserCreateNestedOneWithoutTurnInput
  }

  export type TurnUncheckedCreateWithoutVocabAgentSuggestionInput = {
    id?: string
    conversationId: string
    userId: string
    message: string
    reply: string
    totalTokens: number
    createdAt?: Date | string
  }

  export type TurnCreateOrConnectWithoutVocabAgentSuggestionInput = {
    where: TurnWhereUniqueInput
    create: XOR<TurnCreateWithoutVocabAgentSuggestionInput, TurnUncheckedCreateWithoutVocabAgentSuggestionInput>
  }

  export type TurnUpsertWithoutVocabAgentSuggestionInput = {
    update: XOR<TurnUpdateWithoutVocabAgentSuggestionInput, TurnUncheckedUpdateWithoutVocabAgentSuggestionInput>
    create: XOR<TurnCreateWithoutVocabAgentSuggestionInput, TurnUncheckedCreateWithoutVocabAgentSuggestionInput>
    where?: TurnWhereInput
  }

  export type TurnUpdateToOneWithWhereWithoutVocabAgentSuggestionInput = {
    where?: TurnWhereInput
    data: XOR<TurnUpdateWithoutVocabAgentSuggestionInput, TurnUncheckedUpdateWithoutVocabAgentSuggestionInput>
  }

  export type TurnUpdateWithoutVocabAgentSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutTurnNestedInput
    user?: UserUpdateOneRequiredWithoutTurnNestedInput
  }

  export type TurnUncheckedUpdateWithoutVocabAgentSuggestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutVocabularyBucketsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Conversation?: ConversationCreateNestedManyWithoutUserInput
    Turn?: TurnCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVocabularyBucketsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Conversation?: ConversationUncheckedCreateNestedManyWithoutUserInput
    Turn?: TurnUncheckedCreateNestedManyWithoutUserInput
    Roleplay?: RoleplayUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVocabularyBucketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVocabularyBucketsInput, UserUncheckedCreateWithoutVocabularyBucketsInput>
  }

  export type VocabularyCreateWithoutBucketInput = {
    id?: string
    wordOrPhrase: string
    createdAt?: Date | string
  }

  export type VocabularyUncheckedCreateWithoutBucketInput = {
    id?: string
    wordOrPhrase: string
    createdAt?: Date | string
  }

  export type VocabularyCreateOrConnectWithoutBucketInput = {
    where: VocabularyWhereUniqueInput
    create: XOR<VocabularyCreateWithoutBucketInput, VocabularyUncheckedCreateWithoutBucketInput>
  }

  export type VocabularyCreateManyBucketInputEnvelope = {
    data: VocabularyCreateManyBucketInput | VocabularyCreateManyBucketInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVocabularyBucketsInput = {
    update: XOR<UserUpdateWithoutVocabularyBucketsInput, UserUncheckedUpdateWithoutVocabularyBucketsInput>
    create: XOR<UserCreateWithoutVocabularyBucketsInput, UserUncheckedCreateWithoutVocabularyBucketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVocabularyBucketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVocabularyBucketsInput, UserUncheckedUpdateWithoutVocabularyBucketsInput>
  }

  export type UserUpdateWithoutVocabularyBucketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUpdateManyWithoutUserNestedInput
    Turn?: TurnUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVocabularyBucketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    Turn?: TurnUncheckedUpdateManyWithoutUserNestedInput
    Roleplay?: RoleplayUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VocabularyUpsertWithWhereUniqueWithoutBucketInput = {
    where: VocabularyWhereUniqueInput
    update: XOR<VocabularyUpdateWithoutBucketInput, VocabularyUncheckedUpdateWithoutBucketInput>
    create: XOR<VocabularyCreateWithoutBucketInput, VocabularyUncheckedCreateWithoutBucketInput>
  }

  export type VocabularyUpdateWithWhereUniqueWithoutBucketInput = {
    where: VocabularyWhereUniqueInput
    data: XOR<VocabularyUpdateWithoutBucketInput, VocabularyUncheckedUpdateWithoutBucketInput>
  }

  export type VocabularyUpdateManyWithWhereWithoutBucketInput = {
    where: VocabularyScalarWhereInput
    data: XOR<VocabularyUpdateManyMutationInput, VocabularyUncheckedUpdateManyWithoutBucketInput>
  }

  export type VocabularyScalarWhereInput = {
    AND?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
    OR?: VocabularyScalarWhereInput[]
    NOT?: VocabularyScalarWhereInput | VocabularyScalarWhereInput[]
    id?: StringFilter<"Vocabulary"> | string
    bucketId?: StringFilter<"Vocabulary"> | string
    wordOrPhrase?: StringFilter<"Vocabulary"> | string
    createdAt?: DateTimeFilter<"Vocabulary"> | Date | string
  }

  export type VocabularyBucketCreateWithoutVocabularyInput = {
    id?: string
    title: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutVocabularyBucketsInput
  }

  export type VocabularyBucketUncheckedCreateWithoutVocabularyInput = {
    id?: string
    userId: string
    title: string
    createdAt?: Date | string
  }

  export type VocabularyBucketCreateOrConnectWithoutVocabularyInput = {
    where: VocabularyBucketWhereUniqueInput
    create: XOR<VocabularyBucketCreateWithoutVocabularyInput, VocabularyBucketUncheckedCreateWithoutVocabularyInput>
  }

  export type VocabularyBucketUpsertWithoutVocabularyInput = {
    update: XOR<VocabularyBucketUpdateWithoutVocabularyInput, VocabularyBucketUncheckedUpdateWithoutVocabularyInput>
    create: XOR<VocabularyBucketCreateWithoutVocabularyInput, VocabularyBucketUncheckedCreateWithoutVocabularyInput>
    where?: VocabularyBucketWhereInput
  }

  export type VocabularyBucketUpdateToOneWithWhereWithoutVocabularyInput = {
    where?: VocabularyBucketWhereInput
    data: XOR<VocabularyBucketUpdateWithoutVocabularyInput, VocabularyBucketUncheckedUpdateWithoutVocabularyInput>
  }

  export type VocabularyBucketUpdateWithoutVocabularyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutVocabularyBucketsNestedInput
  }

  export type VocabularyBucketUncheckedUpdateWithoutVocabularyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutRoleplayInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    Conversation?: ConversationCreateNestedManyWithoutUserInput
    Turn?: TurnCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleplayInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    password?: string | null
    image?: string | null
    autoGeneratedBucketId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    Conversation?: ConversationUncheckedCreateNestedManyWithoutUserInput
    Turn?: TurnUncheckedCreateNestedManyWithoutUserInput
    vocabularyBuckets?: VocabularyBucketUncheckedCreateNestedManyWithoutUserInput
    Subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    Entitlements?: EntitlementUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleplayInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleplayInput, UserUncheckedCreateWithoutRoleplayInput>
  }

  export type ConversationCreateWithoutRoleplayInput = {
    id?: string
    title: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutConversationInput
    Turn?: TurnCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutRoleplayInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
    Turn?: TurnUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutRoleplayInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutRoleplayInput, ConversationUncheckedCreateWithoutRoleplayInput>
  }

  export type ConversationCreateManyRoleplayInputEnvelope = {
    data: ConversationCreateManyRoleplayInput | ConversationCreateManyRoleplayInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRoleplayInput = {
    update: XOR<UserUpdateWithoutRoleplayInput, UserUncheckedUpdateWithoutRoleplayInput>
    create: XOR<UserCreateWithoutRoleplayInput, UserUncheckedCreateWithoutRoleplayInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoleplayInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoleplayInput, UserUncheckedUpdateWithoutRoleplayInput>
  }

  export type UserUpdateWithoutRoleplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUpdateManyWithoutUserNestedInput
    Turn?: TurnUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    autoGeneratedBucketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Conversation?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    Turn?: TurnUncheckedUpdateManyWithoutUserNestedInput
    vocabularyBuckets?: VocabularyBucketUncheckedUpdateManyWithoutUserNestedInput
    Subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    Entitlements?: EntitlementUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConversationUpsertWithWhereUniqueWithoutRoleplayInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutRoleplayInput, ConversationUncheckedUpdateWithoutRoleplayInput>
    create: XOR<ConversationCreateWithoutRoleplayInput, ConversationUncheckedCreateWithoutRoleplayInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutRoleplayInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutRoleplayInput, ConversationUncheckedUpdateWithoutRoleplayInput>
  }

  export type ConversationUpdateManyWithWhereWithoutRoleplayInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutRoleplayInput>
  }

  export type AccountCreateManyUserInput = {
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    sessionToken: string
    expires: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationCreateManyUserInput = {
    id?: string
    title: string
    roleplayId?: string | null
    createdAt?: Date | string
  }

  export type TurnCreateManyUserInput = {
    id?: string
    conversationId: string
    message: string
    reply: string
    totalTokens: number
    createdAt?: Date | string
  }

  export type RoleplayCreateManyUserInput = {
    id?: string
    title: string
    assistantRole: string
    userRole: string
    conversationTone: string
    conversationContext: string
    createdAt?: Date | string
  }

  export type VocabularyBucketCreateManyUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
  }

  export type EntitlementCreateManyUserInput = {
    id?: string
    feature: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Turn?: TurnUpdateManyWithoutConversationNestedInput
    Roleplay?: RoleplayUpdateOneWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    roleplayId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Turn?: TurnUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    roleplayId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutTurnNestedInput
    VocabAgentSuggestion?: VocabAgentSuggestionUpdateManyWithoutTurnNestedInput
  }

  export type TurnUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VocabAgentSuggestion?: VocabAgentSuggestionUncheckedUpdateManyWithoutTurnNestedInput
  }

  export type TurnUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleplayUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assistantRole?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    conversationTone?: StringFieldUpdateOperationsInput | string
    conversationContext?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutRoleplayNestedInput
  }

  export type RoleplayUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assistantRole?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    conversationTone?: StringFieldUpdateOperationsInput | string
    conversationContext?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutRoleplayNestedInput
  }

  export type RoleplayUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    assistantRole?: StringFieldUpdateOperationsInput | string
    userRole?: StringFieldUpdateOperationsInput | string
    conversationTone?: StringFieldUpdateOperationsInput | string
    conversationContext?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyBucketUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vocabulary?: VocabularyUpdateManyWithoutBucketNestedInput
  }

  export type VocabularyBucketUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Vocabulary?: VocabularyUncheckedUpdateManyWithoutBucketNestedInput
  }

  export type VocabularyBucketUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntitlementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntitlementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EntitlementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    feature?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TurnCreateManyConversationInput = {
    id?: string
    userId: string
    message: string
    reply: string
    totalTokens: number
    createdAt?: Date | string
  }

  export type TurnUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTurnNestedInput
    VocabAgentSuggestion?: VocabAgentSuggestionUpdateManyWithoutTurnNestedInput
  }

  export type TurnUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    VocabAgentSuggestion?: VocabAgentSuggestionUncheckedUpdateManyWithoutTurnNestedInput
  }

  export type TurnUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    reply?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabAgentSuggestionCreateManyTurnInput = {
    id?: string
    totalTokens: number
    words?: VocabAgentSuggestionCreatewordsInput | string[]
    enhancedText: string
    createdAt?: Date | string
  }

  export type VocabAgentSuggestionUpdateWithoutTurnInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    words?: VocabAgentSuggestionUpdatewordsInput | string[]
    enhancedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabAgentSuggestionUncheckedUpdateWithoutTurnInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    words?: VocabAgentSuggestionUpdatewordsInput | string[]
    enhancedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabAgentSuggestionUncheckedUpdateManyWithoutTurnInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalTokens?: IntFieldUpdateOperationsInput | number
    words?: VocabAgentSuggestionUpdatewordsInput | string[]
    enhancedText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyCreateManyBucketInput = {
    id?: string
    wordOrPhrase: string
    createdAt?: Date | string
  }

  export type VocabularyUpdateWithoutBucketInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordOrPhrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyUncheckedUpdateWithoutBucketInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordOrPhrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VocabularyUncheckedUpdateManyWithoutBucketInput = {
    id?: StringFieldUpdateOperationsInput | string
    wordOrPhrase?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateManyRoleplayInput = {
    id?: string
    title: string
    userId: string
    createdAt?: Date | string
  }

  export type ConversationUpdateWithoutRoleplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversationNestedInput
    Turn?: TurnUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutRoleplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Turn?: TurnUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutRoleplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationCountOutputTypeDefaultArgs instead
     */
    export type ConversationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TurnCountOutputTypeDefaultArgs instead
     */
    export type TurnCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TurnCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VocabularyBucketCountOutputTypeDefaultArgs instead
     */
    export type VocabularyBucketCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VocabularyBucketCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleplayCountOutputTypeDefaultArgs instead
     */
    export type RoleplayCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleplayCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionDefaultArgs instead
     */
    export type SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EntitlementDefaultArgs instead
     */
    export type EntitlementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EntitlementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationDefaultArgs instead
     */
    export type ConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TurnDefaultArgs instead
     */
    export type TurnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TurnDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VocabAgentSuggestionDefaultArgs instead
     */
    export type VocabAgentSuggestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VocabAgentSuggestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VocabularyBucketDefaultArgs instead
     */
    export type VocabularyBucketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VocabularyBucketDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VocabularyDefaultArgs instead
     */
    export type VocabularyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VocabularyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleplayDefaultArgs instead
     */
    export type RoleplayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleplayDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}