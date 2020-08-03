'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Usuario extends Model {

    static boot () {
        super.boot()
    
        /**
         * A hook to hash the user password before saving
         * it to the database.
         */
        this.addHook('beforeSave', async (userInstance) => {
            userInstance.SENHA_USUARIO = await Hash.make(userInstance.SENHA_USUARIO)
          })
      }
    
      /**
       * A relationship on tokens is required for auth to
       * work. Since features like `refreshTokens` or
       * `rememberToken` will be saved inside the
       * tokens table.
       *
       * @method tokens
       *
       * @return {Object}
       */
      tokens () {
        return this.hasMany('App/Models/Token')
      }


    static get primaryKey () {
        return 'ID_USUARIO'
      }
    static get table () {
        return 'USUARIO'
    }
}

module.exports = Usuario
