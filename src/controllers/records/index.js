const RecordService = require('../../services/records/index');
const recordService = new RecordService();

const get = async (req, res) => {
    try {
        const records = await recordService.queryAll();
        res.status(200).json(records);
    } catch(error){
        res.status(404).send( { message: 'no hay discos'} );
    }
}

const getById = async(req, res) => {
    try {
        const id = req.params.id;
        const foundedRecord = await recordService.getById(id);
        res.status(200).json(foundedRecord);
    } catch(error){
        res.status(404).json( { message: 'disco no encontrado'} );
    }
}


const create = async(req, res) => {
    try{
        const newRecord = req.body;
        const records = await recordService.createRecord(newRecord);
        res.status(201).json(records);
    } catch(error){
        res.status(500).send({message: 'error fatal'})
    }   
}

const editPartial = async(req, res) => {
    try{
        const id = req.params.id;
        const newInfo = req.body;
        const updatedInfo = await recordService.editPartial(id, newInfo);
        res.status(201).json(updatedInfo);
    } catch(error){
        res.status(500).send({message: 'error fatal'})
    }   
}

const editComplete = async(req, res) => {
    try{
        const id = req.params.id;
        const newRecord = req.body
        const updatedRecord = await recordService.editComplete(id, newRecord);
        res.status(200).json(updatedRecord);
    } catch(error){
        const id = req.params.id;
        res.status(404).send({message: `Record id:${id} not found`})
    }
}

const deleteRecord = async(req, res) => {
    try{
        const id = req.params.id;
        const deleteRecord = await recordService.deleteRecord(id)
        res.status(200).json(deleteRecord);
    }catch(error){
        res.status(404).send({message: 'no record match'})
    }

}

module.exports = {
    get,
    getById,
    create,
    editPartial,
    editComplete,
    deleteRecord,
}