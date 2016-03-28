'use strict';

const app = require('./app');
const port = 3031;

const server = app.setup();
   
const todos = app.service('todos'); 
todos.get(1).then((todo) => {
    todos.patch(1, {
        text: 'hellodfsadsdf!'
    });
});