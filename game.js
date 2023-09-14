export class Game extends Phaser.Scene  {
    //Ños siguientes metodos seran llamados en el momento que se los necesite


    //El constructor resume las tareas de inicializacion de los objetos
    //debo decirle que para incializar una escena le paso la key que corresponde a la escena que quiero que inicialize
    constructor() {
    super( {
    key : "game"
    });
    }

    //Hace una precarga de todo lo s elementos (assets) que vayamos a necesitar para inicializar el juegp
    // Una vez esta todo cargado invocamos el metodo create dejandole "todo listo"
    preload() {
        //Primero le indicamos el nombre del asset (con el cual lo identificaremos )
        /*. A la primera la hemos llamada "background" y a
la segunda "gameover". Estos nombres son únicos y podemos acceder a los recursos asociados
a lo largo de todo el juego. */
        
        this.load.image("background" , "./images/background.png")
        this.load.image("gameover" , "./images/gameover.png")

    }

    //Crea la escena colocando todos los elementos que van a formar parte de la escena
    create() {

        /*El método create se ejecuta cuando ya se han cargado todos los elementos y tiene el código
necesario para crear la escena. En este método se colocarán todos los elementos necesarios,
como el jugador, las plataformas, enemigos, decorados, etc.
En nuestro caso simplemente hemos agregado dos imágenes. Fíjate que algunas ocasiones las
imágenes las tenemos que almacenar en propiedades del objeto, porque así podremos
referirnos a ellas más adelante, mostrarlas, ocultarlas, cambiar su posición, definir
colisiones.... De hecho, lo normal es justamente que las guardemos como propiedades del
objeto escena, porque generalmente necesitamos acceder a ellas para muchas cosas. Sin
embargo, hay elementos como el fondo que quizás no hace falta hacer nada con él, porque
siempre va a estar ahí y por eso simplemente lo hemos añadido y punto.
Sobre los elementos hay que comentar que se colocan en una posición, que tiene como eje de
coordenadas la esquina superior izquierda. Pero el eje de referencia que posicionamos es el
centro de la imagen. Por ejemplo, en el caso de la imagen de "gameover" estamos colocándola
para que el centro de esta imagen se sitúe en el punto 400x90 con respecto a la esquina
superior izquierda. Como el juego mide 800 x 500, la imagen aparecerá centrada, y bastante
cerca del borde superior.
Tal cual está este proyecto observaríamos la imagen del fondo y encima otra imagen con el
motivo del "game over". */
        this.add.image(410, 250, 'background');
        this.gameoverImage = this.add.image(400, 90, 'gameover');
    }
}