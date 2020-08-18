'use strict'

const User = use('App/Models/User');

class UserController {
    index(){
        const data = User.all();
        return data;
    }

    async show ({ params }) {
        try {
            const user = await User.findOrFail(params.id)
            return user;

        } catch (error) {
            console.log("erro", error);
        }

    }
}

module.exports = UserController
