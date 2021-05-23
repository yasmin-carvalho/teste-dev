import { getRepository, Repository } from 'typeorm';
import { HistoryModel } from '../models/HistoryModel';


class HistoryService {
    private connectHistory: Repository<HistoryModel>
    constructor() {
        this.connectHistory = getRepository(HistoryModel)
    }

    async create(city: string, country: string, temperature: number, humidity: number, weather: string){
        try {
            const history = this.connectHistory.create({
                city, 
                country,
                temperature,
                humidity,
                weather
            })
            await this.connectHistory.save(history)
            return { status: 201, obj: history} 
        } catch (error) {
            throw error 
        }  
    }

    async readTopFiveSearchedCities(){
        try {
            // SELECT city, COUNT(city) AS qtd FROM history GROUP BY city ORDER BY qtd DESC LIMIT 5
            return await this.connectHistory.createQueryBuilder('history')
            .select('city')
            .addSelect('COUNT(city)', 'qtd')
            .groupBy('city')
            .orderBy('qtd', 'DESC')
            .limit(5)
            .getRawMany()
        } catch (error) {
            throw error
        }
    }

    async readLastCities() {
        try {
            // SELECT * FROM history ORDER BY created_at DESC LIMIT 5
            return await this.connectHistory.find({ 
                order: { created_at: 'DESC' },
                take: 5
            })
        } catch (error) {
            throw error
        }
    }
}

export { HistoryService }