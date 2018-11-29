'use strict';

module.exports = function(Appuser) {

    Appuser.afterRemote('login', async(ctx, user, next) =>{
        if (user) {
            user.token = user.id;
        }
    })
};
