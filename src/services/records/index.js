class RecordServices {

    constructor(){
        this.records = [];
        this.generateData();
    }

    generateData() {
        this.records = [
            {id: 1, name: "The Stooges", artist: "The Stooges", year: 1969},
            {id: 2, name: "Ramones", artist: "Ramones", year: 1976},
            {id: 3, name: "Never mind the bullocks, here's the Sex Pistols", artist: "Sex Pistols", year: 1977},
            {id: 4, name: "The Clash", artist: "The Clash", year: 1977}            
        ];
        
    }

    createRecord(newRecord){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                this.records.push(newRecord);
                resolve(this.records);
            },1000);
        });
    
    }

    queryAll(){
        // return this.records
        return new Promise ((resolve,reject) => {
            setTimeout(() => {
                resolve(this.records);
            },1000);
        })
    }

    getById(id){
        return new Promise((resolve, reject)=> {
            setTimeout(() =>{
                const foundedRecord = this.records.filter(record => record.id === parseInt(id))[0];
                if (foundedRecord){
                    resolve(foundedRecord)
                }else{
                    const error = new Error(`Record id:${id} not found`, {
                        cause: 404,
                    });
                    reject(error);
                }
            },1000);
        });
    }

    editPartial(id, newInfo){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                const index = this.records.findIndex(record => record.id === parseInt(id));
                const changeInfo = this.records[index];
                Object.assign(changeInfo, newInfo);
                resolve(changeInfo);
            }, 1000)
        })

    }
    editComplete(id, record){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = this.records.findIndex(record => record.id === parseInt(id));
                const updatedRecord = this.records[index] = record;
                if (index >= 0){
                    resolve(this.records);
                }else{
                    const error = new Error(`Record id:${id} not found`, {
                        cause: 404,
                    });
                    reject(error);
                }
            }, 1000);
        });
    };

    deleteRecord(id){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                const index = this.records.findIndex(record => record.id === parseInt(id));
                console.log(index)
                if (index >= 0){
                    this.records.splice(index, 1);
                    resolve(this.records);
                }else{
                    const error = new Error(`Record id:${id} not found`, {
                        cause: 404,
                    });
                    reject(error);
                }    
            },1000);
        })
    }
}

module.exports = RecordServices;