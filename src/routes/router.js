import express from 'express';
import tasksController from '../controllers/tasksController.js';
import tasksMiddleware from '../middlewares/tasksMiddleware.js';

const router = express.Router();

router
  .get('/tasks', tasksController.getALL)
  .post('/tasks', tasksMiddleware.validateBody, tasksController.createTask)
  .delete('/tasks/:id', tasksController.deleteTask)
  .put('/tasks/:id', tasksController.deleteTask);

  
export default router;