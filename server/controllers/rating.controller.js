const { Ratings } = require('../models/ratings.model');


module.exports.addrating = (request, response) => {
    const {freelancer, client, comment, rating, state} = request.body;
    Ratings.create({
        freelancer,
        client,
        comment,
        rating,
        state
    })
    .then(rating => response.json(rating))
    .catch(err => response.json(err));
}
// module.exports.deleteratings = (request, response) => {
//     Ratings.deleteOne({_id:request.params.id})
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }
module.exports.deleteratings = (request, response) => {
    Ratings.remove()
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
module.exports.getAllRating = (request, response) => {
    Ratings.find()
    .then(ratings => response.json(ratings))
    .catch(err => response.json(err))
}
module.exports.editRating = (request, response) => {
    Ratings.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updateUser => response.json(updateUser))
        .catch(err => response.json(err))
}
