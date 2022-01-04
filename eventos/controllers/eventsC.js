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
function saveImage(req, res){
    let sampleFile;
    console.log("saveimg")
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
}


sampleFile = req.files.poster;
uploadPath = './imagenes/' + sampleFile.name;

// console.log(sampleFile)
try{
    sampleFile.mv(uploadPath, function(err) {
        if (err)
            return res.status(500).send(err);
            res.send('File uploaded!'+ sampleFile.name);
    
    });}catch (error){
      console.log("ha salido algo mal");
  }

};

function saveevento(req,res){
    let uploadPath;
    let sampleFile;

    console.log("saveimg")
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
}


sampleFile = req.files.poster;
uploadPath = './imagenes/' + sampleFile.name;

// console.log(sampleFile)
try{
    sampleFile.mv(uploadPath, function(err) {
        if (err)
            return res.status(500).send(err);
            res.send('File uploaded!'+ sampleFile.name);
    
    });}catch (error){
      console.log("ha salido algo mal");
  }

    var newEvent = new evento(req.body);

    poster = sampleFile.name;
    newEvent.poster = '/imagenes/' + poster;

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



module.exports = {BuscareventName, BuscarEvent, Updateevento, Deleteevento, saveevento, saveImage};