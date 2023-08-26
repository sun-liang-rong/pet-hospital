import { Entity, Column, CreateDateColumn,OneToOne, ManyToOne,JoinColumn } from 'typeorm'
import { BaseEntity } from './base.entity'
import { Clerk } from './clerk.entity'
import { Archives } from './archives.entity'
@Entity()
//预约就诊
export class Subscribe extends BaseEntity {
  @CreateDateColumn()
  createTime: Date
  @Column()
  subscribeTime: Date
  @ManyToOne(() => Clerk, clerk => clerk.subscribes)
  @JoinColumn()
  clerk: Clerk[]
  @Column()
  mainSuit: string
  @ManyToOne(() => Archives, archives => archives.subscribes)
  @JoinColumn()
  archives: Archives[]
}