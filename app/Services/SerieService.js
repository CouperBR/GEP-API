'use strict'

const ApplicationException = use('App/Exceptions/ApplicationException')

class SerieService{

    constructor(serieRepository){
        this._serieRepository = serieRepository;
    }
    async get(id){
        try{
            const serie = await this._serieRepository.get(id);
            throw new Error("error message");
        }
        catch(ex){
            throw new ApplicationException(ex.message, 200)
        }
    }
}

module.exports = SerieService