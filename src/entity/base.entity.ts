import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Entity } from 'typeorm';
@Entity()
export class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
    @CreateDateColumn()
    createTime: Date
    @UpdateDateColumn()
    updateTime: Date
}