const jwt = require("jsonwebtoken");
const user = require("../models/userModel");


async function verifyData(req, res){
    let { password, email } = req.body;
    try { 
        const userdb =  await user.findOne({email});
        if (userdb) userdb.status = true;
        if ((userdb) && password == userdb.password){
            //we create the token
            jwt.sign({
                user: userdb
            },
            'secretsKey',
            (err, token)=>{
                res.json({token})
            },
            );
        };
    }catch (error) { 
        return res.status(400).send(error)
    }
}




function verifyToken(req, res, next){ //"next" is used if all get out succesfull

    const bearerHeader =  req.headers['authorization'];//is [bearer : <token>]
    
    if( bearerHeader!== 'undefined'){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next()//if all is good, next to execute
    }else{
        res.sendStatus(403);//this status tell us that we´re unauthorized user or url is mistake
    }
}
function verefyTokenPt2(req, res) {
    jwt.verify(req.token, 
        'secretsKey',// we should give de previous word
        (error, authData)=>{
            if(error){
                res.sendStatus(403);
            }else{
                res.json({
                        authData
                    },
                    );
            };
        },
    );
};

function createUser(req, res){
    let newUser = new user(req.body);
    newUser.save((err, result)=>{
        res.status(200).send(result);
    })
}

module.exports = { verifyData, verifyToken, verefyTokenPt2, createUser };







