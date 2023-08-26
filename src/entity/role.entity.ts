import { Column, OneToOne, JoinColumn, Entity } from 'typeorm'
import { BaseEntity } from './base.entity'
import { Permission } from './permission.entity'
import { Clerk } from './clerk.entity'
@Entity()
//角色
export class Role extends BaseEntity {
  @OneToOne(type => Permission)
  @JoinColumn()
  permission: Permission
  @Column()
  name: string
  @OneToOne(type => Clerk)
  @JoinColumn()
  clerk: Clerk
}