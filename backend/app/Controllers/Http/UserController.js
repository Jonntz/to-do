'use strict'

const User = use('App/Models/User');

class UserController {
    index(){
        const data = User.all();
        return data;
    }

    async show ({ params }) {
        const user = await User.findOrFail(params.id);
        const data = await user.load(user);
      
        return data;
    }
}

module.exports = UserController
