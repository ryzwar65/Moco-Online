export default () => ({
    port: parseInt(process.env.APP_PORT,10) || 3000,
    database: {
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      host: process.env.DATABASE_HOST,
      type:process.env.DATABASE_TYPE,
      username:process.env.DATABASE_USERNAME,
      password:process.env.DATABASE_PASSWORD,
      database:process.env.DATABASE_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true
    }
});