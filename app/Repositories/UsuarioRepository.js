'use strict'

// const Aluno = use('App/Models/Aluno')

class UsuarioRepository{

    constructor(Aluno){
        this._Aluno = Aluno;
    }
    async get(id){
        return await this._Aluno.all();
        // return id;
    }
}

module.exports = UsuarioRepository