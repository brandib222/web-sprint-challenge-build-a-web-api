// add middlewares here related to actions
function logger (req, res, next) {
    const timestamp = new Date().toLocaleString()
    const method = req.method
    const url = req.originalUrl
    console.log(`[${timestamp}] ${method} to ${url}`)
    next()
}

function validateAction(req, res, next) {
    console.log('validateAction middleware')
}

module.exports = {
    logger, 
    validateAction,
}