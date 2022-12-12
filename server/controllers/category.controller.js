const { Category } = require('../models/category.model');


// The method below is new
module.exports.createcategory = (request, response) => {
    const { name } = request.body;
    Category.create({
        name
    })
        .then(category => response.json(category))
        .catch(err => response.json(err));
}

module.exports.getallcategories = (request, response) => {
    Category.find()
    .then(categories => response.json(categories))
    .catch(err => response.json(err))
}

module.exports.getcategory = (request, response) => {
    Category.findOne({_id:request.params.id})
        .then(category => response.json(category))
        .catch(err => response.json(err))
}

// module.exports.updateauthor = (request, response) => {
//     Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
//         .then(updatedauthor => response.json(updatedauthor))
//         .catch(err => response.json(err))
// }

// module.exports.deleteauthor = (request, response) => {
//     Author.deleteOne({ _id: request.params.id })
//         .then(deleteConfirmation => response.json(deleteConfirmation))
//         .catch(err => response.json(err))
// }