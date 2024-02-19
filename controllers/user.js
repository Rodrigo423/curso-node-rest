const { response } = require('express');

const usersGet = (req, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const usersPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'post API - controlador',
        body
    });
}
const usersPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - controlador 1',
        id
    });
}
const usersDelete = (req, res = response) => {

    res.json({
        msg: 'delete API - controlador',
        
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete 
}