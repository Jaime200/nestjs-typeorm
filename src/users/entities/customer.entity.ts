import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn  } from 'typeorm'
@Entity()
export class Customer {

  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar', length:255})
  name: string;

  @Column({type: 'varchar', length:255 })
  lastName: string;

  @Column({type: 'varchar', length:100 })
  phone: string;

  
  @CreateDateColumn({type:'datetime', default : ()=>"CURRENT_TIMESTAMP"})
  createAt: Date

  @UpdateDateColumn({type:'datetime', default : ()=>"CURRENT_TIMESTAMP"})
  updateAt: Date

}
