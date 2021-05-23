import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('history')
class HistoryModel {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    city: string;

    @Column()
    country: string;

    @Column()
    temperature: number;

    @Column()
    humidity: number;

    @Column()
    weather: string;

    @CreateDateColumn()
    created_at: Date

}

export { HistoryModel }