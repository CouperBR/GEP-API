'use strict'

const _usuarioService = use('Adonis/Services/UsuarioService')

class UsuarioController {

    
    async get({ params, request, response }){
        return _usuarioService.get(100);
    }

    async getById({ request, response }){

    }

    async save({ request, response }){

    }

    async delete({ request, response }){

    }

}

module.exports = UsuarioController
