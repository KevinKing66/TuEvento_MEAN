
const evento = require("../models/events");


async function BuscareventID(req, res){
    const _id = req.params._id; 
    try { 
        const eventodb =  await evento.find({"_id": _id }); 
        if (eventodb){
            res.json(eventodb);
        }
    } 
    catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error });
    } 
}

async function BuscarEvent(req, res){
    try{
        const eventodb = await evento.find();
        res.json(eventodb)
    }catch(error){
        return res.status(400).json({ joa : 'ha ocurrido un error'});
    }
}

function files(req,res){
    let ruta = __dirname.replace('controllers','imagenes/');
    res.sendFile(ruta+req.params.file);
}



function saveevento(req,res){
    let data = req.body.poster.files;

        // Generamos un nnombre aleatorio
        let crypto                          = require('crypto');
        let seed                            = crypto.randomBytes(20);
        let uniqueSHA1String                = crypto.createHash('sha1').update(seed).digest('hex');
        let uniqueRandomImageName  = `imagenes/${uniqueSHA1String}.jpg`;
        let NF = uniqueRandomImageName;
        
        let xd = data.replace(/^data:image\/\w+;base64,/, '');


        // guardamos la imagen

        try{
        require('fs').writeFile(uniqueRandomImageName, xd,{encoding: 'base64'}, ()=> console.log("bueno"));
        }
        catch(error)
        {
            console.log('ERROR:', error);
        }

    var newEvent = new evento(req.body);
    newEvent.poster = NF;
        console.log(newEvent.poster);
    newEvent.save((err,result)=>{
    res.status(200).send({message:result});
    });
    }
    



async function Updateevento(req, res){ 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const eventoDB = await evento.findByIdAndUpdate(_id, body, {new: true}); 
        res.json(eventoDB); 
    } catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error }) ;
    } 
}

async function Deleteevento(req, res){


    const _id = req.params.id; 
    try { 
        
        const eventoDB = await evento.findByIdAndDelete({_id}); 
        if(!eventoDB){ 
            return res.status(400).json({ mensaje: 'No se encontró el id indicado', error });
        } 
            res.json(eventoDB); 
    } 
    catch (error) { 
            return res.status(400).json({ mensaje: 'Ocurrio un error', error });
    } 
}


async function desactivate(req, res){

    const _id = req.params.id; 
    try { 
        const resultado =  await evento.findOne({"_id":_id}); 
        if (resultado){
            //en la posicion 0 estara el objeto que usaremos
            const _id = resultado._id;

            //reutilizamos la la informacion ya existente, pero cambiamos el valos de "estado" a false
            resultado.activo ? resultado.activo = false : resultado.activo = true;
            const body = resultado;

        //     //usando la informacion ant, buscara el objeto y se guardara el cambio hecho
            const DB = await evento.findByIdAndUpdate(_id, body, {new: true}); 
            res.json(DB);
        }
    } 
    catch (error) { 
        return res.status(400).json({ mensaje: 'Lo sentimos, no existe el producto que estas buscando o escribiste su nombre mal' });
    } 
}
async function asistir(req, res){

    const _idE = req.params.id; 
    const asistente = req.body;
    console.log(asistente)
    try {  
        
        let resultado =  await evento.findOne({"_id":_idE});
            if (!resultado.asistentes){
                resultado.asistentes = [];
            }
            if(resultado.asistentes){
                if (!resultado.asistentes.includes(asistente.id)){
                    resultado.asistentes.push(asistente);

                    //usando la informacion ant, buscara el objeto y se guardara el cambio hecho
                    const DB = await evento.findByIdAndUpdate(_idE, resultado, {new: true}); 
                    res.json(DB);
                }else{
                    return res.json({estado: "usuario ya estaba inscripto"});
                }
            }
    } 
    catch (error) { 
        console.log(error)
        return res.status(400).json(error);
    } 
}




module.exports = {BuscareventID, BuscarEvent, Updateevento, Deleteevento, saveevento, files, desactivate, asistir};