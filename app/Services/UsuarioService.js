'use strict'

class UsuarioService{

    constructor(usuarioRepository){
        this._usuarioRepository = usuarioRepository;
    }
    async get(id){
        return this._usuarioRepository.get(id);
    }
}

module.exports = UsuarioService