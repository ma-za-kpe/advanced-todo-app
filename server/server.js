var	mongoose	=	require('mongoose');
var	express	=	require('express');
var	bodyParser	=	require('body-parser');
const {ObjectID} = require('mongodb');

var	{mongoose}	=	require('./db/mongoose');
var	{Todo}	=	require('./models/todo');
var	{User}	=	require('./models/user');

var	app	=	express();

app.use(bodyParser.json());

//POST /todos route
app.post('/todos', (req, res) => {

    var	todo = new	Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
		res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

//GET /todos route
app.get('/todos', (req, res) => {
    Todo.find().then((todo) => {
        res.send({todo});
    }, (e) => {
        res.status(400).send(e);
    }).catch((e) => done(e));;
})

//GET /todos/:id
app.get('/todos/:id', (req, res) => {

    var	id = req.params.id;

	if(!ObjectID.isValid(id)) {
		return	res.status(404).send();
    }
    
    Todo.findById(id).then((todo)	=>	{
        if(!todo) {
            return	res.status(404).send();
        } else {
            res.send({todo});
        }
    }).catch((e)	=>	{
        res.status(400).send();
    });

})

//POST /users route
app.post('/users', (req, res) => {

    var	user = new	User({
        email: req.body.email
    });

    user.save().then((doc) => {
		res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

//GET /users route
app.get('/users', (req, res) => {
    User.find().then((user) => {
        res.send({user});
    }, (e) => {
        res.status(400).send(e);
    }).catch((e) => done(e));;
});

app.listen(3000, ()	=> {
    console.log('Started on	port 3000');
});

module.exports	= {app};