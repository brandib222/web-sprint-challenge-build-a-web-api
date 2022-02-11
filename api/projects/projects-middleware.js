// add middlewares here related to projects

const Project = require('./projects-model');

async function validateProjectId(req, res, next) {
    try {
        const project = await Project.get(req.params.id)
        if(!project) {
            res.status(400).json({
                message: 'this action does not exist'
            })
        } else{
            req.action = project
            next()
        }
    } catch(err) {
        res.status(500).json({
            message: 'problems finding action'
        })
    }
}

module.exports = { validateProjectId, };