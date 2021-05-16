import { Module, Global } from '@nestjs/common';
import * as sql  from 'mssql'
import configAPP from '../config'
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';




@Global()
@Module({
  imports : [
    TypeOrmModule.forRootAsync({
      inject : [configAPP.KEY],
      useFactory: (configService: ConfigType<typeof configAPP>) =>{
        const { name, port, password, server, user } = configService.database
        return {
          type : 'mssql',
          username: user,
          password: password,
          port: port,
          host: server,
          database: name,
          synchronize: true,
          autoLoadEntities: true,
          options:{
            encrypt: false
          }
          
        }
        //return new sql.ConnectionPool(config)
      },
    })
  ],  
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    // {
    //   provide : 'SQL',
    //   useValue: client
    // }
    {
      provide:'SQL',
      useFactory: (configService: ConfigType<typeof configAPP>) =>{
        const { name, port, password, server, user } = configService.database
        const config :sql.config = {
          user: user,
          port: port,
          password:password,
          server: server,
          database: name,
            options: {
              trustServerCertificate:true
            }
        }
        return new sql.ConnectionPool(config)
      },
      inject : [configAPP.KEY]
    },
    
  ],
  exports: ['API_KEY', 'SQL', TypeOrmModule],
})
export class DatabaseModule {}
