export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      timezone: env("DATABASE_TIMEZONE"),
      schema: env("DATABASE_SCHEMA", "public"), // Not Required
      ssl: env("DATABASE_SSL", false),
    },
    Optional: {
      // debug: true,
      pool: {
        min: 2,
        max: 30,
        createTimeoutMillis: 3000,
        acquireTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 100,
        propagateCreateError: false,
      },
    },
    debug: false,
    useNullAsDefault: true,
  },
});
