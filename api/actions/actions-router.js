// Write your "actions" router here!
const express = require('express');

// I don't know where the below code came from
//const req = require('express/lib/request');

const { validateActionId, validateAction, logger, } = require('./actions-middlware');

const Project = require('../projects/projects-model');
const Action = require('./actions-model');

const router = express.Router();

router.get('/', (req, res, next) => {
    // Returns an array of actions (or an empty array) as the body of the response. 
    //THIS ONE IS GOOD
    Action.get()
    .then(actions => {
        res.json(actions)
    })
    .catch(next)
})

router.get('/:id', validateActionId, (req, res) => {
    
    // - If there is no action with the given `id` it responds with a status code 404. STILL NEEDS THIS
    res.json(req.action)
})

router.post('/', (req, res, next) => {
    //   - Returns the newly created action as the body of the response.
    //   - If the request body is missing any of the required fields it responds with a status code 400.
    //   - When adding an action make sure the `project_id` provided belongs to an existing `project`.

    // THIS ONE IS GOOD. HOW? NO IDEA
    Action.insert(req.body)
		.then(action => {
			res.status(201).json(action);
		})
		.catch(error => {
			console.log(error);
			res.status(400).json({
				message: 'Error adding the action',
			});
		});
})

router.put('/:id', validateActionId, (req, res, next) => {
    //   - Returns the updated action as the body of the response.
    //   - If there is no action with the given `id` it responds with a status code 404.
    //   - If the request body is missing any of the required fields it responds with a status code 400.
    const changes = req.body;
	Action.update(req.params.id, changes)
		.then(action => {
			if (action) {
				res.status(200).json(action);
			} else {
				res.status(404).json({ message: 'The action could not be found' });
			}
		})
		.catch(error => {
			console.log(error);
			res.status(400).json({
				message: 'Error updating the action',
			});
		});
})

router.delete('/:id', validateActionId, async (req, res, next) => {
    // - Returns no response body.
    // - If there is no action with the given `id` it responds with a status code 404.
    try {
        const result = await Action.remove(req.params.id)
        res.json(result)
    } catch {
        res.status(404).json({
            message:'did not delete action'
        })
    }
    next()
		
})

module.exports = router;
