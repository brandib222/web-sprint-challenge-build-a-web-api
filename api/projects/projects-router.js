// Write your "projects" router here!
const express = require('express');

const { validateProjectId } = require('./projects-middleware');

const Project = require('../projects/projects-model');

const router = express.Router();

router.get('/', (req, res, next) => {
    // - Returns an array of projects as the body of the response.
    // - If there are no projects it responds with an empty array.
    Project.get()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})

router.get('/:id', validateProjectId, (req, res) => {
    //   - Returns a project with the given `id` as the body of the response.
    //   - If there is no project with the given `id` it responds with a status code 404.
    Project.get(req.params.id)
        .then(project => {
            res.status(200).json(project)
        }) .catch(err => {
            console.log(err)
            res.status(404).json({
                message: 'error retrieving project'
            })
        })
})

router.post('/', (req, res) => {
    // - Returns the newly created project as the body of the response.
    // - If the request body is missing any of the required fields it responds with a status code 400.
    Project.insert(req.body)
		.then(project => {
			res.status(201).json(project);
		})
		.catch(error => {
			console.log(error);
			res.status(400).json({
				message: 'Error adding the project',
			});
		});
})

router.put('/:id', validateProjectId, (req, res) => {
    //   - Returns the updated project as the body of the response.
    //   - If there is no project with the given `id` it responds with a status code 404.
    //   - If the request body is missing any of the required fields it responds with a status code 400.
    const changes = req.body;
	Project.update(req.params.id, changes)
		.then(project => {
			if (project) {
				res.status(200).json(project);
			} else if (!project) {
				res.status(404).json({ message: 'The project could not be found' });
			} else {
                res.status(400).json({ message: 'The project is missing something' });
            }
		})
		.catch(error => {
			console.log(error);
		});
})

router.delete('/:id', validateProjectId, async (req, res, next) => {
    // - Returns no response body.
    // - If there is no project with the given `id` it responds with a status code 404.
    try {
        const result = await Project.remove(req.params.id)
        res.json(result)
    } catch {
        res.status(404).json({
            message:'did not delete project'
        })
    }
    next()
})

router.get('/:id/actions', validateProjectId, (req, res) => {
    // - Returns an array of actions (could be empty) belonging to a project with the given `id`.
    // - If there is no project with the given `id` it responds with a status code 404.
})

// export the router for the love of god if you get this error one more time I'm moving you back to Nepal to sit on a rock for the rest of your life
module.exports = router;