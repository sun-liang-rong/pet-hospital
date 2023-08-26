import { Column, Entity, OneToMany, JoinColumn } from 'typeorm'
import { BaseEntity } from './base.entity'
import { PetCase } from './petCase.entity'
import { Subscribe } from './subscribe.entity'
@Entity()
//宠物猫档案
export class Archives extends BaseEntity {
  //昵称
  @Column()
  nickname: string
  //主人电话
  @Column()
  masterPhone: string
  //主人姓名
  @Column()
  masterName: string
  //出生日期
  @Column()
  birthTime: string
  //第一次来医院时间
  @Column()
  firstTime: string
  //疫苗信息
  @Column()
  vaccineInfo: string
  //驱虫信息
  @Column()
  expellingInfo: string
  //性别
  @Column()
  sex: string
  //是否绝育
  @Column()
  isSterilization: string
  @OneToMany(() => Subscribe, subscribe => subscribe.archives)
  @JoinColumn()
  subscribes: Subscribe

  @OneToMany(() => PetCase, petCase => petCase.archives)
  @JoinColumn()
  petCases: PetCase
}