import { Column, Entity, OneToOne, OneToMany, JoinColumn } from 'typeorm'
import { BaseEntity } from './base.entity'
import { Role } from './role.entity'
import { Subscribe } from './subscribe.entity'
import { join } from 'path'
@Entity()
//职员数据
export class Clerk extends BaseEntity {
  @Column()
  username: string
  @Column()
  password: string
  @Column()
  name: string
  @Column({ nullable: true})
  entryTime: string
  @Column({ nullable: true})
  personalProfile: string
  @Column({ nullable: true})
  jobStatus: string
  @Column({ nullable: true})
  avatar: string
  @OneToOne(type => Role)
  @JoinColumn()
  role: Role
  @OneToMany(() => Subscribe, subscribe => subscribe.clerk)
  @JoinColumn()
  subscribes: Subscribe[]
}