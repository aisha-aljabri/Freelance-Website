const { Comment } = require('../models/comment.model');


module.exports.addcomment = (request, response) => {
    const { freelancer_name, client_name, comment } = request.body;
    Comment.create({
        freelancer_name, 
        client_name, 
        comment
    })
        .then(user => response.json(user))
        .catch(err => response.json(err));
}

module.exports.getallcomment = (request, response) => {
    Comment.find()
    .then(users => response.json(users))
    .catch(err => response.json(err))
}

module.exports.deletecomment = (request, response) => {
    Comment.deleteOne({_id:request.params.id})
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}