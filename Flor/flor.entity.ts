import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm';

@Entity('Flor')
export class Aluno {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 100 })
    nome!: string;

    @Column({ length: 1200 })
    descricao!: string;

    @Column({ type: 'int'})
    idade!: number;
}
