import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn  } from 'typeorm'

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column({type:'varchar', length: 255})
  email: string;

  @Column({type:'varchar', length: 255})
  password: string;

  @Column({type:'varchar', length: 255})
  role: string;

  @CreateDateColumn({type:'datetime', default : ()=>"CURRENT_TIMESTAMP"})
  createAt: Date

  @UpdateDateColumn({type:'datetime', default : ()=>"CURRENT_TIMESTAMP"})
  updateAt: Date
  

}
