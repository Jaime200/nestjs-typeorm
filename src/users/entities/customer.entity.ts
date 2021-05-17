import { 
    Entity
  , Column
  , PrimaryColumn
  , CreateDateColumn
  , UpdateDateColumn 
  , OneToOne
  , JoinColumn
} from 'typeorm'

import { User } from './user.entity';
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

  @OneToOne( ()=>User
  , (user)=>user.customer 
  ,{ nullable: true})
  user:User
}
