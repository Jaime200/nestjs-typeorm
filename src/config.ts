import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      server :process.env.DATABASE_SERVER,
      name :process.env.DATABASE_NAME,
      password:process.env.DATABASE_PASSWORD,
      user:process.env.DATABASE_USER,
      port:process.env.DATABASE_PORT,

    },
    apiKey: process.env.API_KEY,
  };
});
