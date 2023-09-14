let {Game} = require("./game.js");

const config = {
    //Mi navegador se adapta alas tecnologias
    type : Phaser.AUTO,
    //Altura y ancho que tendra el juego
    width : 800,
    height : 500,
    //Las distintas pantallas que el juego (escenas) poseera
   //Permite separar las diferentes escenas
    scene : {Game},
    //¿Que sistema de fisica usare en Phaser? en esta ocasion el que viene x defecto : arcade
    physics : {
        default : "arcade",
        //Propiedades que le insertamos a este sistema arcade
        arcade : {
            gravity : {y : 400},
            debug : false
        }
    }

}

//Instanciamos (creamos el juego) indicandole su configuracion
let game = new Phaser.Game(config)
