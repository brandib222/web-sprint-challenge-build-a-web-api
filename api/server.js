const express = require('express');

const { logger, validateAction, validateActionId} = require('./actions/actions-middlware');

const { validateProject } = require('./projects/projects-middleware');

const server = express();

const actionsRouter = require('./actions/actions-router');

const projectsRouter = require('./projects/projects-router');

server.use(express.json());

server.use(logger)

// error here: server.use requires a middleware function, but got an object
server.use('/api/actions', actionsRouter);

server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
    res.send(`<h2>OMG I HOPE THIS WORKS</h2>`)
})

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
