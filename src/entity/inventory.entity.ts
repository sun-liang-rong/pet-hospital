import { Entity, Column, OneToOne, JoinColumn } from 'typeorm'
import { BaseEntity } from './base.entity'
import { PetCase} from './petCase.entity'
import { type } from 'os'
@Entity()
//库存
export class Inventory extends BaseEntity {
  @Column()
  type: string
  @Column()
  name: string
  @Column()
  totalConsume: number
  @Column()
  totalShop: number
  @Column()
  purchasingPrice: number
  @Column()
  price: number
  @OneToOne(type => PetCase)
  @JoinColumn()
  petCase: PetCase
}