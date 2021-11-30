const { response } = require("express");
const { find } = require("../models/events");
const evento = require("../models/events");


async function BuscareventName(req, res){
    const name = req.params.name; 
    try { 
        const eventodb =  await evento.find({"fullName": name }); 
        if (eventodb){
            res.json(eventodb)
        }
    } 
    catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    } 
}

async function BuscarEvent(req, res){
    try{
        const eventodb = await evento.find();
        res.json(eventodb)
    }catch(error){
        return res.status(400).json({ joa : 'ha ocurrido un error'})
    }
}

function saveevento(req,res){
    var newEvent = new evento(req.body);
    newEvent.save((err,result)=>{
    res.status(200).send({message:result});
    });
    }



async function Updateevento(req, res){ 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const eventoDB = await events.findByIdAndUpdate(_id, body, {new: true}); 
        res.json(eventoDB); 
    } catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error }) 
    } 
}

async function Deleteevento(req, res){

    //posible error
    const _id = req.params.id; 
    try { 
        
        const eventoDB = await evento.findByIdAndDelete({_id}); 
        if(!eventoDB){ 
            return res.status(400).json({ mensaje: 'No se encontró el id indicado', error }) 
        } 
            res.json(eventoDB); 
    } 
    catch (error) { 
            return res.status(400).json({ mensaje: 'Ocurrio un error', error }) 
    } 
}


module.exports = {BuscareventName, BuscarEvent, Updateevento, Deleteevento, saveevento};