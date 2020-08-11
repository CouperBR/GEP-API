'use strict'

class SerieRepository{

    constructor(Serie){
        this._Serie = Serie;
    }
    async get(id){
        return await this._Serie.find(id);
    }
}

module.exports = SerieRepository