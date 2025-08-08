import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text', nullable: false })
  content: string;

  @CreateDateColumn() // auto set when row is first inserted
  createdAt: Date;

  @UpdateDateColumn() // auto set on every update
  updatedAt: Date;
}
