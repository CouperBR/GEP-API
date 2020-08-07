const { ServiceProvider } = require('@adonisjs/fold')
const UsuarioRepository = require('../../app/Repositories/UsuarioRepository');
const UsuarioService = require('../../app/Services/UsuarioService');

class AppProvider extends ServiceProvider {
  register() {
    this.app.singleton('Adonis/Repositories/UsuarioRepository', (app) => {
      return new UsuarioRepository();
    })

    this.app.singleton('Adonis/Services/UsuarioService', (app) => {
      const repo = this.app.use('Adonis/Repositories/UsuarioRepository')
      return new UsuarioService(repo);
    })
    
  }

  boot() {
    // optionally do some initial setup
  }
}

module.exports = AppProvider