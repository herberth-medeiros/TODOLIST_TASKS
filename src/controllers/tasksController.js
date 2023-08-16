import tasksModel from '../models/tasksModel.js';

const getALL = async (req, res) => {
  const tasks = await tasksModel.getALL();
  return res.status(200).json(tasks);
};

const createTask = async(req, res) => {
  const createdTasks = await tasksModel.createTask(req.body);
  return res.status(201).json(createdTasks);
}; 

const deleteTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.deleteTask(id);
  return res.status(204).json();
};

const updateTask = async (req, res) => {
  const { id } = req.params;

  await tasksModel.updateTask(id, req.body);
  return res.status(204).json();
};

export default {
  getALL,
  createTask,
  deleteTask,
  updateTask
};

