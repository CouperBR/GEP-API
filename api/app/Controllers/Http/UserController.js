'use strict'

const Database = use('Database')
const User = use("App/Models/User")

class UserController {

    async create({ request }) {
        try {
            const data = request.only(["username", "email", "password"]);
            const user = await User.query().where('username',  data.username).fetch();
            console.log(true, user);
        } catch (error) {
            console.log(error);
            return error;
        }
        
        // if(User.where('username', data.username) != null){
        //     const user = await User.create(data)

        //     return user
        // }
        // else{
        //     return "Usuário já existe na nossa base de dados.";
        // }
        
    }

    async list() {
        const users = await User.all();

        return users;
    }

}

module.exports = UserController
