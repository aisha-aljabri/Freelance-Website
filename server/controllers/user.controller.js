const { Users } = require('../models/freelancer.model');


// The method below is new
module.exports.signup = (request, response) => {
    const { name, category, rate, projects, phone, password, userlevel } = request.body;
    Users.create({
        name,
        category,
        rate,
        projects,
        phone,
        password,
        userlevel
    })
        .then(user => response.json(user))
        .catch(err => response.json(err));
}

module.exports.getallusers = (request, response) => {
    Users.find()
    .then(users => response.json(users))
    .catch(err => response.json(err))
}

module.exports.getuser = (request, response) => {
    Users.findOne({name:request.params.name})
        .then(user => response.json(user))
        .catch(err => response.json(err))
}

// module.exports.updateauthor = (request, response) => {
//     Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
//         .then(updatedauthor => response.json(updatedauthor))
//         .catch(err => response.json(err))
// }

// module.exports.deletefreelancer = (request, response) => {
//     Users.deleteOne({name:request.params.name})
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }

module.exports.deletefreelancer = (request, response) => {
    Users.remove()
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.update = (request, response) => {
    Users.findOneAndUpdate({name: request.params.name}, request.body, {new:true})
        .then(updateUser => response.json(updateUser))
        .catch(err => response.json(err))
}
