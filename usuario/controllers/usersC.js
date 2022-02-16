const user = require("../models/users");
const JWT = require("jsonwebtoken");


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
    console.log(req.body)
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

async function verifyData(req, res){
    let { password, email } = req.body;
    try{
        const userDB = await user.findOne({email});
        if ((userDB) && password == userDB.password){
            JWT.sign({
                user: userDB
            },
            "straightforward",
            (err, token)=>{
                res.json({token});
            })
        }
    }catch (error) { 
        return res.status(400).send(error);
    }
}

async function verifyToken(req, res, next){
    const beareHeader = req.headers['authorization'];

    if (typeof beareHeader !== 'undefined'){
        const bearerToken = beareHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

async function verifyTokenPt2(req, res){
    

    JWT.verify(req.token,
        "straightforward",
        (error, authData)=>{
            if(error){
                res.sendStatus(403);
            }else{
                res.json({
                    authData
                });
            }
        });
}

module.exports = {BuscarUsurioid, BuscarUsuario, UpdateUser, DeleteUser, saveUser, verifyData, verifyToken, verifyTokenPt2};