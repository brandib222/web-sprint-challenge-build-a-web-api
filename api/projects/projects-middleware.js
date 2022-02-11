// add middlewares here related to projects

function validateProject(req, res, next) {
    console.log('validateProject middleware')
}

module.exports = {validateProject};