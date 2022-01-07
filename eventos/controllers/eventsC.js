const evento = require("../models/events");

async function BuscareventName(req, res){
    const ubicacion = req.params.ubicacion; 
    try { 
        const eventodb =  await evento.find({"ubicacion": ubicacion }); 
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

// function saveevento(req,res){
    

//     var newEvent = new evento(req.body);

//     // saveImage(req, res)
//     // console.log(uploadPath)
//     // uploadPath  ? console.log("todo bien") : newEvent.img = "";
//     // newEvent.img = uploadPath;

//     newEvent.save((err,result)=>{
//     res.status(200).send({message:result});
//     });
//     }


function saveevento(req,res){
    let data = req.body.files

    try
    {
                 // Generamos un nnombre aleatorio
                 var crypto                          = require('crypto');
                 var seed                            = crypto.randomBytes(20);
                 var uniqueSHA1String                = crypto.createHash('sha1').update(seed).digest('hex');
        var uniqueRandomImageName  = `imagenes/${uniqueSHA1String}.jpg`
        

        // guardamos la imagen

        var xd = data.replace(/^data:image\/\w+;base64,/, '');
        try
        {
        require('fs').writeFile(uniqueRandomImageName, xd,{encoding: 'base64'}, ()=> console.log("bueno"));
        }
        catch(error)
        {
            console.log('ERROR:', error);
        }

    }
    catch(error)
    {
        console.log('ERROR:', error);
    }


    var newEvent = new evento(req.body);

    newEvent.poster = uniqueRandomImageName;

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