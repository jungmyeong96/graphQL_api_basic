import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Employee {

  @Field()
  @PrimaryGeneratedColumn('uuid') //자동으로 프라이빗키 컬럼을 채워줌
  id: string

  @Field()
  @Column()
  firstName: string

  @Field()
  @Column()
  lastName: string

  @Field()
  @Column()
  designation: string

  @Field()
  @Column()
  city: string

  @ManyToOne(() => Project, project => project.employees)
  @Field(() => Project)
  project: Project

  @Field()
  @Column()
  projectId: string
}
