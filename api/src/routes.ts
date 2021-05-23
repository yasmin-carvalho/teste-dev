import { Router } from 'express';
import { HistoryController } from '../src/app/controllers/HistoryController'
 
const router = Router();
const historyController = new HistoryController();

router.post('/history', historyController.create);
router.get('/history/topFive', historyController.readTopFiveSearchedCities)
router.get('/history/lastCities', historyController.readLastCities)

export default router;