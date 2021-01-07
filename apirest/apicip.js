const express = require('express');
const app = express();
const cors = require('cors')

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


// <-------------------------TOP 5------------------------------> YAIZA


app.get("/juegos", function(req, res){
    params = req.query.pegi
    let sql = "SELECT * FROM juegos AS s INNER JOIN juegos_plataforma AS m ON (s.id_juego = m.id_juego) WHERE pegi= ?  AND  ORDER BY puntuacionTotal DESC LIMIT 5";
    connection.query(sql,params, function(err, result){
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }

        res.send(result)
    })
})



app.listen(3000);
