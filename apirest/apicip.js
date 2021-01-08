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

app.get('/', (req,res) => {
    console.log("Prueba")
});

// ---------------------------------- JUEGOS ----------------------------------
// ---------------------------------- GET ---------------------------------Patig

//  app.get("/juegos", (req, res) => {
//    let game_name = req.query.name
//    let game_pegi = req.query.pegi
//    let game_platform = req.query.platform

//     if (game_name != null) {
//       let params = [game_name]
//       let paramsComas = `%${params}%`;
//       myQuery = `SELECT *
//                 FROM juegos
//                 JOIN juegos_plataforma ON juegos.id_juego = juegos_plataforma.id_juego
//                 WHERE titulo_juego LIKE ?`
//         connection.query(myQuery,paramsComas, function(err, result) {
//           if (err) {
//             respuesta = "Ha ocurrido un error: " + err+ "."
//           } else if (result.length === 0) {
//             respuesta = "No se ha encontrado ningún resultado: " + err+ "."
//           } else {
//             respuesta = result
//           }
//           res.send(respuesta)
//         })
//     }

//     if (game_pegi) {
//       if (req.query.pegi) {
//         let params = [game_pegi]
//         myQuery = `SELECT *
//                    FROM juegos
//                    JOIN juegos_plataforma ON juegos.id_juego = juegos_plataforma.id_juego
//                    WHERE pegi = ?`
//         connection.query(myQuery, params, function(err, result) {
//           if (err) {
//             respuesta = "Ha ocurrido un error: " + err + "."
//           } else if (result.length === 0) {
//             respuesta = "No se ha encontrado ningún resultado: " + err + "."
//           } else {
//             respuesta = result
//           }
//           res.send(respuesta)
//         })
//       }
//     }

    // if (game_platform) {
    //   if (req.query.platform) {
    //     let plataforma = [game_platform]
    //     console.log(plataforma)
    //     myQuery = `SELECT * FROM juegos RIGHT JOIN juegos_plataforma ON juegos.id_juego = juegos_plataforma.id_juego WHERE ${plataforma}`
    //   connection.query(myQuery, function(err, result) {
    //     if (err) {
    //       respuesta = "Ha ocurrido un error: " + err + "."
    //     } else if (result.length === 0) {
    //       respuesta = "No se ha encontrado ningún resultado: " + err + "."
    //     } else {
    //       respuesta = result
    //     }
    //     res.send(respuesta)
    //   })
    //   }
    // }
//  });

  app.get("/juegos", (req, res) => {
    let game_name = req.query.name
    let game_pegi = req.query.pegi
    let game_platform = req.query.platform
    let params  = new Array();
    // let and = new Array();
    let query = `SELECT * FROM juegos JOIN juegos_plataforma ON juegos.id_juego = juegos_plataforma.id_juego WHERE `
    console.log(req.query.platform)

    if (game_name) {
      params.push(`%${game_name}%`);
      // and.push(` titulo_juego LIKE ? AND`)
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

    myQuery = query.substring(0,query.length - 3)
    console.log(myQuery)
    console.log(params)

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

  })

app.listen(3000);
