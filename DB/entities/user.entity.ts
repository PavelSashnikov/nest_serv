import { IUser } from 'src/entities/interface/user.interface';
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('User')
@Unique(['login'])
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  login: string;

  @Column('varchar', { select: false })
  password: string;
}
