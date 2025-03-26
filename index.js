const Coche = {
    marca: 'Audi',
    modelo:'A3',
    matricula:'6062WRT'
}

const Casa = {
    codPostal: 48002,
    calle: 'Calle 123',
    portal: 25,
    piso: 3
}

const FullStackDeveloper = {
    lenguajes:[],
    proyectos: []
}

const Perro = {
    nombre: 'Sachi',
    raza:'Puber',
    color:'negro',
    edad:10,
    ladrar: function(){return console.log('guau')},
    popo: function(){return Math.random()*3}
}

let marcaPortatil= Portatil.marca

let marcaPortatil2= Portatil["marca"]

let grupos = Concierto.grupos

let RGB = [Led.rojo, Led.verde, Led.azul]

Portatil.modelo= 'P345'
Concierto.cartelera.push('Guns N\' Roses')
Concierto.fecha= new Date()
Impresora.imprimiendo= {nombreArchivo: "aaa", copias: 2, numPaginas: 8}

const Noticia={
    titular:'aa',
    cuerpo:'aaaa'
}

const Persona ={
    nombre: 'Www',
    apellidos:'aaaa',
    edad: 88
}

const Avion ={
    numPasajeros: 4,
    despegar: function(){console.log('despegando')},
    volar: function(){console.log('llegando al destino')},
    aterrizar:function(){console.log('aterrizando')}
}

const Paquete ={
    contenido: ['aa', 'pp', 'ppp']
}

const Pais= {
    numHabitantes: 99999,
    continente: 'Asia',
    gentilicio: 'asiaticos'
}


let codError= O_Error.codigo

let integrantes= Grupo.integrantes

let nivelesTinta= Impresora.tinta

let pixeles = Pantalla.pixeles

let especificaciones = Movil["especificaciones"]

Grupo.numIntegrantes= 5

Pantalla.dimensiones='1920x1080'

Led.encendido= !Led.encendido

Movil.temperatura="20º"


