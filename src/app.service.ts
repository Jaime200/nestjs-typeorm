import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';
import * as sql  from 'mssql'
@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject('SQL') private clientSQL : sql.ConnectionPool
  ) {}
  getHello(): string {
    const apiKey = this.configService.apiKey;
    const name = this.configService.database.name;
    return `Hello World! ${apiKey} ${name}`;
  }

  getTasks(){
    //return this.clientSQL.connect()
    return this.clientSQL.connect().then(async  c=>{
      
      const result = await c.request().query("SELECT * FROM [dbo].[tasks]")
      return result.recordset;
    }).catch(err=>{
      
      return err.message
    });
  }
}
