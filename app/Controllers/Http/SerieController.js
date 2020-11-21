'use strict'

const _serieService = use('Adonis/Services/SerieService')
const ApplicationException = use('App/Exceptions/ApplicationException')

class SerieController {

    async get ({params, request, response}) {
        try {
            const { id } = params;
            throw new Error();
            return _serieService.get(id);
        }
        catch (ex) {
            throw new ApplicationException()
        }
    }

    async getAll(){

    }

    async create ({ request, response }) {
        
    }

    async update(id){

    }

    async delete(id){

    }
}

module.exports = SerieController
