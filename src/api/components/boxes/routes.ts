import { Router } from 'express';
import boxController from './controllers';
const boxRouter = Router();

boxRouter.get('/:id', boxController.getBox);
boxRouter.post('/', boxController.createBox);
boxRouter.put('/:id', boxController.updateBox);
boxRouter.put('/:id/vocabluaries', boxController.updateBoxVocabluaries);
boxRouter.delete('/:id', boxController.deleteBox);
export { boxRouter };