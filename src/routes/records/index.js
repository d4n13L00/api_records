const express = require('express');
const { get, getById, create, editComplete, editPartial, deleteRecord } = require('../../controllers/records/index');
const recordRouter = express.Router();


recordRouter.get('/', get);

recordRouter.get('/:id', getById);

recordRouter.post('/', create);

recordRouter.patch('/:id', editPartial);

recordRouter.put('/:id', editComplete);

recordRouter.delete('/:id', deleteRecord);

module.exports = recordRouter;