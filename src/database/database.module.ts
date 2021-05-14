import { Module, Global } from '@nestjs/common';
import * as sql  from 'mssql'
const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';


const config :sql.config = {
  user: 'sa',
  port: 1433,
    password: '12345',
    server: 'DESKTOP-CVIG606\\SQLEXPRESS2019',
    database: 'platziST',
    options: {
      trustServerCertificate:true
    }
}


// const client = new sql.ConnectionPool(config)
// client.connect().then(async  c=>{
//   console.log('Conectado')
//   const result = await c.request().query("SELECT * FROM [dbo].[tasks]")
//   console.log(result);
// }).catch(err=>{
//   console.error(err.message)
// });


@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide : 'SQL',
      useValue: config
    }
  ],
  exports: ['API_KEY', 'SQL'],
})
export class DatabaseModule {}
