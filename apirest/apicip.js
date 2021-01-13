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

// -------------------------ENDPOINT ---- JUEGOS ------------------------------

// ---------------------------------- GET ---------------------------------Patig

  app.get("/juegos", (req, res) => {
    let game_name = req.query.name
    let game_pegi = req.query.pegi
    let game_platform = req.query.platform
    let params  = new Array();
    let query = `SELECT * FROM juegos JOIN juegos_plataforma ON juegos.id_juego = juegos_plataforma.id_juego WHERE `
    console.log(req.query.platform)

    if (game_name) {
      params.push(`%${game_name}%`);
      query += ` titulo_juego LIKE ? AND`
    }
    if (game_pegi) {
      params.push(game_pegi);
      query += ` pegi = ? AND`
    }
    if (game_platform) {
      params.push(game_platform);
      query += ` ${game_platform} AND`
    }
    if (game_name === "" && game_pegi === "" && game_platform === "") {
      myQuery = query.substring(0,query.length - 6)
    } else {
      myQuery = query.substring(0,query.length - 3)
    }
    console.log(myQuery)
      connection.query(myQuery, params, function(err, result) {
      if (err) {
        respuesta = "Ha ocurrido un error: " + err + "."
      } else if (result.length === 0) {
        respuesta = result
      } else {
          respuesta = result
          
      }
        res.send(respuesta)
      })
 });

// ---------------------------------- POST ---------------------------------Pati

app.post("/juegos", (req, res) => {
  let game_name = req.body.name
  let game_genre = req.body.genre
  let game_pegi = req.body.pegi
  let game_platform = req.body.platform
  let game_player = req.body.player
  let game_payment = req.body.payment
  let game_content = req.body.content
  let game_internet = req.body.internet
  let game_cover = req.body.cover
  let game_screen1 = req.body.screen1
  let game_screen2 = req.body.screen2
  let game_screen3 = req.body.screen3
  let game_screen4 = req.body.screen4
  let game_web = req.body.web
  let params = new Array(game_name, game_genre, game_pegi, game_player, game_payment, game_content, game_internet, game_cover, game_screen1, game_screen2, game_screen3, game_screen4, game_web)
  let params_platform = game_platform
  let query = "INSERT INTO juegos (id_juego, titulo_juego, genero, pegi, tarjeta_jugador, tarjeta_pagos, tarjeta_contenido, tarjeta_internet, caratula_juego, pantallazo1, pantallazo2, pantallazo3, pantallazo4, votos, puntuacionTotal, web_oficial) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, 0, ?)"

console.log(params)
console.log(params_platform)
console.log(game_platform)

  connection.query(query, params, function(err, result) {
    if (err) {
      respuesta = "Ha ocurrido un error: " + err + "."
      res.send(respuesta)
    } else {
      let query_platform = `INSERT INTO juegos_plataforma (id_juego, ps4, ps5, xbox_series, xbox_one, switch, pc) VALUES (${result.insertId}, ?, ?, ?, ?, ?, ?)`
      console.log(result.insertId)
      connection.query(query_platform, params_platform, function(err, result) {
        if (err) {
          respuesta = "Ha ocurrido un error: " + err + "."
        } else {
          respuesta = result
        }
        res.send(respuesta)
      })
    }
  })
})

// ---------------------------------- PUT ---------------------------------Pati

// app.put("/juegos", (req, res) => {
//   if (req.body.name.length == 0)
//     req.body.name = null
//   if (req.body.cover.length == 0)
//     req.body.cover = null
//   if (req.body.screen1.length == 0)
//     req.body.screen1 = null
//   if (req.body.screen2.length == 0)
//     req.body.screen2 = null
//   if (req.body.screen3.length == 0)
//     req.body.screen3 = null
//   if (req.body.screen4.length == 0)
//     req.body.screen4 = null
//   if (req.body.web.length == 0)
//     req.body.web = null

//   let params = [req.body.name, req.body.genre, req.body.pegi, req.body.platform, req.body.player, req.body.payment, req.body.content, req.body.internet, req.body.cover, req.body.screen1, req.body.screen2, req.body.screen3, req.body.screen4, req.body.web];
//   console.log(params)
//   // let query = "UPDATE juegos SET titulo_juego = COALESCE(?, titulo_juego), genero = COALESCE(?, genero), pegi = COALESCE(?, pegi), tarjeta_jugador = COALESCE(?, tarjeta_jugador), tarjeta_contenido = COALESCE(?, tarjeta_contenido), tarjeta_internet = COALESCE(?, tarjeta_internet), caratula_juego = COALESCE(?, caratula_juego), pantallazo1 = COALESCE(?, pantallazo1), pantallazo2 = COALESCE(?, pantallazo2), pantallazo3 = COALESCE(?, pantallazo3), pantallazo4 = COALESCE(?, pantallazo4), web_oficial = COALESCE(?, web_oficial) WHERE id_juego = ?";
//   let query2 = "UPDATE juegos SET titulo_juego = ?, genero = ?, pegi = ?, tarjeta_jugador = ?, tarjeta_pagos = ?, tarjeta_contenido = ?, tarjeta_internet = ?, caratula_juego = ?, pantallazo1 = ?, pantallazo2 = ?, pantallazo3 = ?, pantallazo4 = ?, web_oficial = ? WHERE juegos.id_juego = ?"
//   console.log(query2)
//   connection.query(query2, params, (err, result) => {
//     if (err) {
//       respuesta = "Ha ocurrido un error: " + err + "."
//     } else {
//       respuesta = result
//     }
//     res.send(respuesta)
//   })
// })

// ---------------------------------- DELETE ---------------------------------Pati

app.delete("/juegos", (req, res) => {
  let id = req.query.id
    if (id) {
      let params = [id]
      let query = "DELETE FROM juegos WHERE juegos.id_juego = ?"
        connection.query(query, params, function (err, result) {
          if (err) {
            respuesta = "Ha ocurrido un error: " + err + "."
          } else {
            respuesta = result
          }
            res.send(respuesta)
        })
    } else {
      respuesta = "No se ha podido borrar el juego."
    }
})
// ----------------- ENDPOINT SUGERENCIAS Y SUGERENCIAS ADMIN (USUARIO)-------------------pati

// app.get('/sugAdmin', (req, res) => {
//   let params = [req.query.id]
//   if(!id) {
//       let query = "SELECT * FROM sugerencias"
//     connection.query (query, params, function(error, result) {
//     if (error) {
//       respuesta = `Error: ${error}`
//     } else {
//       respuesta = result
//     }
//     res.send(respuesta)
//   })
//   } else {
//     let query = "SELECT * FROM sugerencias WHERE id_sugerencia = ?"
//         connection.query (query, params, function(error, result) {
//     if (error) {
//       respuesta = `Error: ${error}`
//     } else {p
//       respuesta = result
//     }
//     res.send(respuesta)
//   })
//   }
// })

app.post('/sugerirjuego', (req, res) => {
 let params = [req.body.name, req.body.platform]
 let query = "INSERT INTO sugerencias (id_sugerencia, titulo_juego, plataforma, id_usuario) VALUES (NULL, ?, ?, 1)"
 connection.query (query, params, function(error, result) {
   if (error) {
     respuesta = `Error: ${error}`
   } else if (result.length === 0) {
     respuesta = result
   } else {
     respuesta = result
   }
   res.send(respuesta)
 })
})

app.delete('/sugAdmin', (req, res) => {
  let id = req.query.id
  if (id) {
    let params = [id]
    let query = "DELETE FROM `sugerencias` WHERE `sugerencias`.`id_sugerencia` = ?"
         connection.query(query, params, function (err, result) {
          if (err) {
            respuesta = "Ha ocurrido un error: " + err + "."
          } else {
            respuesta = result
          }
            res.send(respuesta)
        })
    } else {
      respuesta = "No se ha podido borrar el juego."
    }
})
// ------------------------ ENDPOINT LOGIN -------------------------------

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

// ------------------------ ENDPOINT REGISTRO ----------------------------

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
    let params = []
    let query = `UPDATE usuarios SET `;
    let respuesta;
    let updates = new Array();

    if (req.body.nombre) {
        params.push(req.body.nombre)
        updates.push(` nombre = ?`)
        console.log(req.body.nombre)
    }
    if (req.body.apellido) {
        params.push(req.body.apellido)
        updates.push(` apellido = ?`)
        console.log(req.body.apellido)
    }
    if (req.body.hijos) {
        params.push(req.body.hijos)
        updates.push(` hijos = ?`)
        console.log(req.body.hijos)
    }
      if (req.body.email) {
        params.push(req.body.email)
        updates.push(` email = ?`)
        console.log(req.body.email)
    }

    query += updates.toString() + ` WHERE id_usuario = ${id}`
    console.log(query)
    console.log(params)
    console.log(updates)

    connection.query(query,params, function (error, results) {
            if (error) {
                respuesta = `Hubo un error : ${error}`
            } else {
                respuesta = results
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

// <-------------------------TOP 5------------------------------> YAIZA


app.get("/topfive", function(req, res){
    params = req.query.pegi
    let sql = "SELECT * FROM juegos AS s INNER JOIN juegos_plataforma AS m ON (s.id_juego = m.id_juego) WHERE pegi= ? ORDER BY puntuacionTotal DESC LIMIT 5";
    connection.query(sql,params, function(err, result){
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }

        res.send(result)
    })
})

// ------------------------ ENDPOINT CHARLAS ---------------------
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



app.get("/ranking", function(req, res){
    let sql = "SELECT * FROM juegos AS s INNER JOIN juegos_plataforma AS m ON (s.id_juego = m.id_juego) ORDER BY puntuacionTotal DESC LIMIT 5";
    connection.query(sql, function(err, result){
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }

        res.send(result)
    })
})

app.listen(3000);
