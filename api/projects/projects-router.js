// Write your "projects" router here!
const express = require('express');

const { validateProjectId } = require('./projects-middleware');

const router = express.Router();

router.get('/projects', (req, res) => {
    // - Returns an array of projects as the body of the response.
    // - If there are no projects it responds with an empty array.
})

router.get('/projects/:id', (req, res) => {
    //   - Returns a project with the given `id` as the body of the response.
    //   - If there is no project with the given `id` it responds with a status code 404.
})

router.post('/projects/', (req, res) => {
    // - Returns the newly created project as the body of the response.
    // - If the request body is missing any of the required fields it responds with a status code 400.
})

router.put('/projects/:id', (req, res) => {
    //   - Returns the updated project as the body of the response.
    //   - If there is no project with the given `id` it responds with a status code 404.
    //   - If the request body is missing any of the required fields it responds with a status code 400.
})

router.delete('/projects/:id', (req, res) => {
    // - Returns no response body.
    // - If there is no project with the given `id` it responds with a status code 404.
})

router.get('/projects/:id/actions', (req, res) => {
    // - Returns an array of actions (could be empty) belonging to a project with the given `id`.
    // - If there is no project with the given `id` it responds with a status code 404.
})

// export the router for the love of god if you get this error one more time I'm moving you back to Nepal to sit on a rock for the rest of your life
module.exports = router;