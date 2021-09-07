const {request, response }= require('express');

const usuariosGet = (req=request, res=response) => {
    const query = req.query;
    res.json({
        msg:'get API Controlador',
        query
    });
}

const usuariosPost = (req=request, res=response) => {
    res.json({
        msg:'post API Controlador'
    });
}


const usuariosPut = (req=request, res=response) => {
    const id = req.params.id;
    res.json({
        msg:'put API Controlador',
        id
    });
}


const usuariosDelete = (req=request, res=response) => {
    res.json({
        msg:'delete API Controlador'
    });
}

const usuariosPatch = (req=request, res=response) => {
    res.json({
        msg:'patch API Controlador'
    });
}


module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}