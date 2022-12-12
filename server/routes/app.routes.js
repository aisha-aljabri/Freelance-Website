// const CategoryController = require('../controllers/category.controller');
const UserController = require('../controllers/user.controller');
const ClientController = require('../controllers/client.controller');
const CommentController = require('../controllers/comment.controller');
const RatingsController = require('../controllers/rating.controller');

module.exports = function(app){

    app.post('/users/signup', UserController.signup);
    app.get('/users', UserController.getallusers);
    app.get('/freelancer/:name', UserController.getuser);
    app.delete('/freelancer/delete', UserController.deletefreelancer);
    app.put("/freelancer/edit/:name", UserController.update);

    app.post('/client/signup', ClientController.signup);
    app.get('/client', ClientController.getallclient);
    app.get('/client/:name', ClientController.getclient);
    app.delete('/client/delete', ClientController.deleteclient);
    app.put("/client/edit/:name", ClientController.update);

    app.post('/comment/new', CommentController.addcomment);
    app.get('/comment', CommentController.getallcomment);
    app.delete('/comment/:id', CommentController.deletecomment);

    app.post('/rating/new', RatingsController.addrating);
    app.get('/ratings', RatingsController.getAllRating);
    app.delete('/ratings/delete', RatingsController.deleteratings);
    app.put("/ratings/:id/edit", RatingsController.editRating);

}