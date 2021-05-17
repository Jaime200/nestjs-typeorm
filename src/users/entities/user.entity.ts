import { 
  Entity
  , Column
  , PrimaryGeneratedColumn
  , CreateDateColumn
  , UpdateDateColumn  
  , OneToOne
  , JoinColumn
} from 'typeorm'

import { Customer } from './customer.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
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

  @OneToOne( ()=>Customer
  , (customer)=>customer.user 
  ,{ nullable: true} )
  @JoinColumn()
  customer:Customer
}
