const express = require('express');
const app = express();
const cors = require('cors')
const { inflate } = require('zlib');

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



// ---------------------------------- JUEGOS ----------------------------------
// ---------------------------------- GET ---------------------------------Patig

 app.get("/juegos", (req, res) => {
   let game_name = req.query.name
   let game_pegi = req.query.pegi
   let game_platform = req.query.platform

    if (game_name != null) {
      let params = [game_name]
      let paramsComas = `%${params}%`;
      myQuery = `SELECT *
                FROM juegos
                JOIN juegos_plataforma ON juegos.id_juego = juegos_plataforma.id_juego
                WHERE titulo_juego LIKE ?`
        connection.query(myQuery,paramsComas, function(err, result) {
          if (err) {
            respuesta = "Ha ocurrido un error: " + err+ "."
          } else if (result.length === 0) {
            respuesta = "No se ha encontrado ningún resultado: " + err+ "."
          } else {
            respuesta = result
          }
          res.send(respuesta)
        })
    }

    if (game_pegi) {
      if (req.query.pegi) {
        let params = [game_pegi]
        myQuery = `SELECT *
                   FROM juegos
                   JOIN juegos_plataforma ON juegos.id_juego = juegos_plataforma.id_juego
                   WHERE pegi = ?`
        connection.query(myQuery, params, function(err, result) {
          if (err) {
            respuesta = "Ha ocurrido un error: " + err + "."
          } else if (result.length === 0) {
            respuesta = "No se ha encontrado ningún resultado: " + err + "."
          } else {
            respuesta = result
          }
          res.send(respuesta)
        })
      }
    }

    if (game_platform) {
      if (req.query.platform) {
        let plataforma = [game_platform]
        console.log(plataforma)
        myQuery = `SELECT * FROM juegos RIGHT JOIN juegos_plataforma ON juegos.id_juego = juegos_plataforma.id_juego WHERE ${plataforma}`
      connection.query(myQuery, function(err, result) {
        if (err) {
          respuesta = "Ha ocurrido un error: " + err + "."
        } else if (result.length === 0) {
          respuesta = "No se ha encontrado ningún resultado: " + err + "."
        } else {
          respuesta = result
        }
        res.send(respuesta)
      })
      }
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
            respuesta = results
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

// ------------------------ ENDPOINT CHARLAS --------------------------------------------    
app.get("/charlas", (req, res) => {
     myQuery = `SELECT charlas.*, usuarios.nombre,usuarios.apellido
     FROM charlas
     INNER JOIN usuarios 
     ON charlas.id_usuario = usuarios.id_usuario WHERE fecha_charla >= CURDATE()`
       connection.query(myQuery, function(err, result) {
         if (err) {
           respuesta = "Ha ocurrido un error: " + err+ "."
         } else if (result.length === 0) {
           respuesta = "No se ha encontrado ningún resultado: " + err+ "."
         } else {
           respuesta = result
         }
         res.send(respuesta)
       })
});

app.get("/charlasBuscador", (req, res) => {
  charla_titulo = req.query.charla_titulo;
  charla_fecha= req.query.charla_fecha;
  myQuery = `SELECT charlas.*, usuarios.nombre,usuarios.apellido
  FROM charlas
  INNER JOIN usuarios 
  ON charlas.id_usuario = usuarios.id_usuario WHERE `
  params= [];
  if (charla_titulo && charla_fecha) {
    params.push(`%${charla_titulo}%`)
    params.push(charla_fecha)
    myQuery += `titulo_charla  LIKE ? OR fecha_charla = ?`
  } else {
    if(charla_titulo) {
      myQuery += `titulo_charla  LIKE ?`
      params.push(`%${charla_titulo}%`)
    }
    if(charla_fecha) {
      myQuery += `fecha_charla = ?`
      params.push(charla_fecha)
    }
  }
  console.log(myQuery)
    connection.query(myQuery,params, function(err, result) {
      if (err) {
        respuesta = "Ha ocurrido un error: " + err+ "."
      } else {
        respuesta = result
      }
      res.send(respuesta)
    })
});

app.post("/charlas",(req, res) => {
  let params = [req.body.titulo_charla,req.body.fecha_charla,req.body.descripcion_charla,req.body.resumen_charla,req.body.lugar_charla,req.body.id_usuario]
  console.log(params)
  let query = `INSERT INTO charlas (id_charla,titulo_charla, fecha_charla, descripcion_charla, resumen_charla,lugar_charla,id_usuario) VALUES (NULL, ?, ?, ?, ?, ?, ?);`;
  console.log(query)
  connection.query(query,params, function (error, results) {
      if (error) {
          respuesta = `Hubo un error : ${error}`
      } 
      else{
          respuesta = results
      }
      res.send(respuesta )    
  });
})


app.post("/charlasApuntarse",(req, res) => {
  let params = [req.body.id_usuario,req.body.id_charla]
  console.log(params)
  let query = `INSERT INTO usuario_charla (id_usuario, id_charla) VALUES (?, ?);`;
  console.log(query)
  connection.query(query,params, function (error, results) {
      if (error) {
          respuesta = `Hubo un error : ${error}`
      } 
      else{
          respuesta = results
      }
      res.send(respuesta )    
  });
})

app.get("/charlasApuntarse",(req, res) => {
  let params = [req.query.id_charla]
  console.log(params)
  let query = `SELECT COUNT(*) as apuntados FROM usuario_charla WHERE id_charla = ?`;
  console.log(query)
  connection.query(query,params, function (error, results) {
      if (error) {
          respuesta = `Hubo un error : ${error}`
      } 
      else{
          respuesta = results
      }
      res.send(respuesta )    
  });
})

app.get("/charlasImpartidas",(req, res) => {
  let params = [req.query.id_usuario]
  console.log(params)
  let query = `SELECT * FROM charlas WHERE id_usuario =?`;
  console.log(query)
  connection.query(query,params, function (error, results) {
      if (error) {
          respuesta = `Hubo un error : ${error}`
      } 
      else{
          respuesta = results
      }
      res.send(respuesta )    
  });
})

app.get("/charlasAsistidas",(req, res) => {
  let params = [req.query.id_usuario]
  console.log(params)
  let query = `SELECT charlas.*,usuarios.nombre,usuarios.apellido
  FROM usuario_charla
  INNER JOIN charlas ON charlas.id_charla = usuario_charla.id_charla 
  INNER JOIN usuarios ON charlas.id_usuario = usuarios.id_usuario
  WHERE usuario_charla.id_usuario = ? `;
  console.log(query)
  connection.query(query,params, function (error, results) {
      if (error) {
          respuesta = `Hubo un error : ${error}`
      } 
      else{
          respuesta = results
      }
      res.send(respuesta )    
  });
})




app.listen(3000);
