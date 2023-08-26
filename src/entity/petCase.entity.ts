import { Entity, Column, CreateDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
import { Clerk } from './clerk.entity'
import { Archives} from './archives.entity'
import { Inventory } from './inventory.entity'
@Entity()
//宠物猫病例
export class PetCase extends BaseEntity {
  @CreateDateColumn()
  caseCreateTime: Date
  @Column()
  mainSuit: string
  @OneToOne(type => Clerk)
  @JoinColumn()
  clerk: Clerk
  @Column()
  weight: string
  @OneToOne(type => Inventory)
  @JoinColumn()
  inventory: Inventory
  @Column()
  caseDescription: string
  @Column()
  costStatus: string
  @ManyToOne(() => Archives, archives => archives.petCases)
  @JoinColumn()
  archives: Archives[]

} 