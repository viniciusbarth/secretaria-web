import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('turmas')
class Turma {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    nome: string;

    @Column('varchar')
    periodo: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Turma;