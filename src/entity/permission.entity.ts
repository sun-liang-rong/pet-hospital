import { Column, Entity, OneToOne } from 'typeorm'
import { BaseEntity } from './base.entity'
@Entity()
//权限控制
export class Permission extends BaseEntity {
  @Column()
  path: string
  @Column()
  isShow: boolean
  @Column()
  havePermission: boolean
  @Column()
  levelRoute: string
}