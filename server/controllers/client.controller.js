const { Client } = require('../models/client.model');


// The method below is new
module.exports.signup = (request, response) => {
    const { name, password, userlevel } = request.body;
    Client.create({
        name,
        password,
        userlevel
    })
        .then(user => response.json(user))
        .catch(err => response.json(err));
}

module.exports.getallclient = (request, response) => {
    Client.find()
    .then(users => response.json(users))
    .catch(err => response.json(err))
}


module.exports.getclient = (request, response) => {
    Client.findOne({name:request.params.name})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}
// module.exports.deleteclient = (request, response) => {
//     Client.deleteOne({name:request.params.name})
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }

module.exports.deleteclient = (request, response) => {
    Client.remove()
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Client.findOneAndUpdate({name: request.params.name}, request.body, {new:true})
        .then(updateUser => response.json(updateUser))
        .catch(err => response.json(err))
}

// module.exports.deleteauthor = (request, response) => {
//     Author.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }