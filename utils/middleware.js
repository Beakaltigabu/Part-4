const logger=require('./logger')

const unknownEndpoint=(req,res,next)=>{
    res.status(404).send({error: "unknown endpoint"})
}


const errorHandler=(error, req, res, next)=>{
    logger.error(error.message)
    if(error.name==='CastError'){
        return res.status(400).send({error:'malformatted id'})
    }else if(error.name==='ValidationError'){
        return response.status(400).json({error: error.message})
    }
    next(error)
}


const requestLogger=(req,res,next)=>{
    logger.info('method:', req.method)
    logger.info('Path:', req.path)
    logger.info('Body:', req.body)
    logger.info('----')
    next()
}


module.exports={
    unknownEndpoint,
    errorHandler,
    requestLogger
}
