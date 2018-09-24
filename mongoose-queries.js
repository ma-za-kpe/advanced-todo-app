//import { mongoose } from './../server/db/mongoose';
//import { Todo } from './../server/models/todo';
const	{ObjectID}	=	require('mongodb');

const {mongoose} = require('./server/db/mongoose');
const {Todo} = require('./server/models/todo');
const {User} = require('./server/models/user');


User.findById('5ba8f4fc47abbf3aeb2d668f').then((user) => {
    if(!user)	{
        return	console.log('Unable	to	find	user');
    } else {
        console.log(JSON.stringify(user,	undefined,	2));
    }
}, (e) => {
    console.log(e);
});
