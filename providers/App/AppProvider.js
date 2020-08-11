const { ServiceProvider } = require('@adonisjs/fold')
const UsuarioRepository = require('../../app/Repositories/UsuarioRepository');
const UsuarioService = require('../../app/Services/UsuarioService');
const SerieRepository = require('../../app/Repositories/SerieRepository');
const SerieService = require('../../app/Services/SerieService');

class AppProvider extends ServiceProvider {
  register() {
   /*Aluno dependencies*/ 
    this.app.singleton('Adonis/Repositories/UsuarioRepository', (app) => {
      const Aluno = use('App/Models/Aluno')
      return new UsuarioRepository(Aluno);
    })
    this.app.singleton('Adonis/Services/UsuarioService', (app) => {
      const repo = this.app.use('Adonis/Repositories/UsuarioRepository')
      return new UsuarioService(repo);
    })

    /*Serie dependencies*/ 
    this.app.singleton('Adonis/Repositories/SerieRepository', (app) => {
      const Serie = use('App/Models/Serie')
      return new SerieRepository(Serie);
    })
    this.app.singleton('Adonis/Services/SerieService', (app) => {
      const repo = this.app.use('Adonis/Repositories/SerieRepository')
      return new SerieService(repo);
    })
    
  }

  boot() {
    // optionally do some initial setup
  }
}

module.exports = AppProvider