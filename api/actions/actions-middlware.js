// add middlewares here related to actions
const Action = require('./actions-model')


function logger (req, res, next) {
    const timestamp = new Date().toLocaleString()
    const method = req.method
    const url = req.originalUrl
    console.log(`[${timestamp}] ${method} to ${url}`)
    next()
}
 
async function validateActionId(req, res, next) {
    try {
        const action = await Action.get(req.params.id)
        if(!action) {
            res.status(404).json({
                message: 'this action does not exist'
            })
        } else{
            req.action = action
            next()
        }
    } catch(err) {
        res.status(500).json({
            message: 'problems finding action'
        })
    }
}

function validateAction(req, res, next) {
    console.log('validateAction middleware')
    const { id } = req.body
    if (!id) {
        req.status(404).json({
            message: 'missing a name, ya dingo'
        })
    } else {
        next()
    }    
}

module.exports = {
    logger, 
    validateAction,
    validateActionId,
}