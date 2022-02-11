// Write your "actions" router here!
const express = require('express');

// I don't know where the below code came from
//const req = require('express/lib/request');

const { validateActionId, validateAction, logger } = require('./actions-middlware');

const router = express.Router();

router.get('/', (req, res) => {
    // Returns an array of actions (or an empty array) as the body of the response.
})

router.get('/:id', validateActionId, (req, res) => {
    // - Returns an action with the given `id` as the body of the response.
    // - If there is no action with the given `id` it responds with a status code 404.
})

router.post('/', (req, res) => {
    //   - Returns the newly created action as the body of the response.
    //   - If the request body is missing any of the required fields it responds with a status code 400.
    //   - When adding an action make sure the `project_id` provided belongs to an existing `project`.
})

router.put('/:id', validateActionId, (req, res) => {
    //   - Returns the updated action as the body of the response.
    //   - If there is no action with the given `id` it responds with a status code 404.
    //   - If the request body is missing any of the required fields it responds with a status code 400.
})

router.delete('/:id', validateActionId, (req, res) => {
    // - Returns no response body.
    // - If there is no action with the given `id` it responds with a status code 404.
})

module.exports = router;
