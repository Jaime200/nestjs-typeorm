import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      server :process.env.DATABASE_SERVER,
      name :process.env.DATABASE_NAME,
      password:process.env.DATABASE_PASSWORD,
      user:process.env.DATABASE_USER,
      port:parseInt(process.env.DATABASE_PORT,10),

    },
    apiKey: process.env.API_KEY,
  };
});
