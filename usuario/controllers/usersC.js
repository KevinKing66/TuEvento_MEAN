const { response } = require("express");
const { find } = require("../models/users");
const user = require("../models/users");



async function BuscarUsurioid(req, res){
    const id = req.params._id; 
    try { 
        const userdb = await user.find({"id": id }); 
        if (userdb){
            res.json(userdb)
        }
    } 
    catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    } 
}

async function BuscarUsuario(req, res){
    try{
        const userdb = await user.find();
        res.json(userdb)
    }catch(error){
        return res.status(400).json({ joa : 'ha ocurrido un error'})
    }
}

function saveUser(req,res){
    var newUser= new user(req.body);
    newUser.save((err,result)=>{
    res.status(200).send(result);
    });
    }


//Actualizar usuario
async function UpdateUser(req, res){ 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const usuarioDB = await user.findByIdAndUpdate(_id, body, {new: true}); 
        res.json(usuarioDB); 
    } catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error }) 
    } 
}

async function DeleteUser(req, res){

    //posible error
    const _id = req.params.id; 
    try { 
        
        const userdb = await user.findByIdAndDelete({_id}); 
        if(!userdb){ 
            return res.status(400).json({ mensaje: 'No se encontró el id indicado', error }) 
        } 
            res.json(userdb); 
    } 
    catch (error) { 
            return res.status(400).json({ mensaje: 'Ocurrio un error', error }) 
    } 
}

async function Login(req, res){
    const { password, email } = req.body;
    try { 
        const userdb =  await user.findOne({email}); 
        userdb.status = true;
        (userdb) && password == userdb.password ? res.json(userdb) : res.json(userdb.status = false);
    } 
    catch (error) { 
        return res.status (400).json({ mensaje: 'Ocurrio un error', error })
    } 
}


module.exports = {BuscarUsurioid, BuscarUsuario, UpdateUser, DeleteUser, saveUser, Login};