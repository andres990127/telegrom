exports.success = (req, res, message, status) =>{
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

exports.error = (req, res, err, status, details) =>{
    console.error('[Response error] '+ details);
    res.status(status || 500).send({
        error: err,
        body: ''
    });
}