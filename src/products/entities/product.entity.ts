import { 
  PrimaryGeneratedColumn 
  ,Column
  ,Entity
  ,CreateDateColumn
  ,UpdateDateColumn
} from 'typeorm'

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type:'varchar', length: 255, unique:true })
  name: string;

  @Column({ type:'text'})
  description: string;

  @Column({ type:'money'})
  price: number;

  @Column({ type:'money'})
  stock: number;

  @Column({ type:'varchar'})
  image: string;

  @CreateDateColumn({type:'datetime', default : ()=>"CURRENT_TIMESTAMP"})
  createAt: Date

  @UpdateDateColumn({type:'datetime', default : ()=>"CURRENT_TIMESTAMP"})
  updateAt: Date
}
