const express = require('express');
const app = express();
const cors = require('cors')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

app.use(express.urlencoded({ extended: false}));
app.use(express.json())
app.use(cors())
let mysql = require('mysql');


let connection = mysql.createConnection({
                host : "localhost",
                user : "root",
                password : null,
                database: "caniplay",
                multipleStatements:true
})

connection.connect(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log("Conexion correcta")
    }    
});

// ------------------------ ENDPOINT LOGIN --------------------------------------------
app.post('/login', (req,res) => {
    let params = [req.body.email,req.body.password]
    let query = `SELECT * FROM usuarios WHERE email = ?  AND password = ?`;
    connection.query(query,params, function (error, results) {
        if (error) {
            respuesta = `Hubo un error : ${error}`
        } 
        else if (results.length === 0) {
            respuesta = `No se ha encotrando ningún resultado : ${error}`
        } else {
            respuesta = results
        }
        res.send(respuesta)    
  });
});


// ------------------------ ENDPOINT REGISTRO --------------------------------------------

/**
 * REGISTRO DE USUARIO CON PASSWORD CIFRADA
 */
app.post('/registro', (req,res) => {
    let params = [req.body.nombre,req.body.apellido,req.body.hijos,req.body.email,req.body.password]
    console.log(params)
    let query = `INSERT INTO usuarios (id_usuario, nombre, apellido, hijos, email, password, tipo_usuario) VALUES (NULL, ?, ?, ?, ?, ?, 'usuario');`;
    connection.query(query,params, function (error, results) {
        if (error) {
            respuesta = `Hubo un error : ${error}`
        } 
        else{
            respuesta = results
        }
        res.send(respuesta )    
  });
});

app.put('/registro', (req,res) => {
    let id = req.body.id_usuario
    let params = [req.body.nombre,req.body.apellido,req.body.hijos,req.body.email,req.body.password]
    let query = `UPDATE usuarios SET `;
    let respuesta;
    let updates = new Array();
    
    if (req.body.nombre) {
        params.push(req.body.nombre)
        updates.push(` nombre = ?`)
    }
    if (req.body.apellido) {
        params.push(req.body.apellido)
        updates.push(` apellido = ?`)
    }
    if (req.body.hijos) {
        params.push(req.body.hijos)
        updates.push(` hijos = ?`)
    }  
      if (req.body.email) {
        params.push(req.body.email)
        updates.push(` email = ?`)
    }    

    query += updates.toString() + ` WHERE id_usuario = ${id}`

    connection.query(query,params, function (error, results) {
        console.log("llego")
            if (error) {
                respuesta = `Hubo un error : ${error}`
            } else {
                respuesta = {codigo : 200, "mensaje" : `Se ha modifcado el disco com id: ${id}` }
            }
            res.send(respuesta)
        
      });
    });

    app.delete('/registro', (req,res) => {
        let params = [req.body.id_usuario]
        let query = `DELETE FROM usuarios WHERE id_usuario = ?`;
        let respuesta;
        connection.query(query,params, function (error, results) {
            console.log("llego")
                if (error) {
                    respuesta = `Hubo un error : ${error}`
                    console.log("UPS ERROR")
                } else {
                    if (results.affectedRows === 0) {
                        respuesta = 404
                    } else {
                        respuesta = 200;
                        
                    }
                }    
                res.sendStatus(respuesta)  
        });   
        
    });


app.listen(3000);