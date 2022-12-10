var Productos;
var Servicios;
Servicios = [
    {
        "nombre": "Escaneado Vehicular",
        "descripcion": "valiosa herramienta que permite conectarse con el vehiculo y extraer informacion valiosa para su diagnostico automotriz",
        "img": "assets/img/servicios/escaneado.png"
    },
    {
        "nombre": "Limpieza de inyectores",
        "descripcion": "Realizamos la limpieza de los inyectores, para su vehiculo, con equipos de ultima generación.",
        "img": "assets/img/servicios/inyector.png"
    },
    {
        "nombre": "Instalacion de alarmas",
        "descripcion": "Instalación de alarmas para todo tipo de vehículo, reparacion y desinstalación de alarmas",
        "img": "assets/img/servicios/alarmaa.png"
    },
    {
        "nombre": "Instalacion de equipos de sonido",
        "descripcion": "Instalamos todo tipo de equipos de sonido, parlantes, amplificadores, bajos,etc",
        "img": "assets/img/servicios/sonidos.png"
    },
    {
        "nombre": "Reparacion sistema devidrios",
        "descripcion": "Reparamos y realizamos antenimiento de sistemas de vidrios electricos y manuales,",
        "img": "assets/img/servicios/vidrio.png"
    },
    {
        "nombre": "Reparacion de ventiladoras",
        "descripcion": "Reparamos y damos mantenimiento a ventiladoras principales y auxiliares, para todo tipo de vehículo en general",
        "img": "assets/img/servicios/ventiladora.png"
    },
    {
        "nombre": "Revisión y reparacion de tableros",
        "descripcion": "Reparamos su tablero y damos soluciones acertadas.",
        "img": "assets/img/servicios/tablero .png"
    },
    {
        "nombre": "Revision de bobinas",
        "descripcion": "Revicion de Bobinas en general",
        "img": "assets/img/servicios/revision de bobinas.png"
    },
    {
        "nombre": "Revision de sensores",
        "descripcion": "Revisamos cada uno de los sensores de su vehículo para detectar fallas posteriores",
        "img": "assets/img/servicios/rev sensores.png"
    },
    {
        "nombre": "Limpia parabrisas",
        "descripcion": "Instalamos y reparamos los limpiaparabrisas de su vehículo",
        "img": "assets/img/servicios/limpia parabriza.png"
    },
    {
        "nombre": "Revicion e instalación de centralizados",
        "descripcion": "Realizamos la revisión e instalacíon de centralizados para distintos modelos de auto",
        "img": "assets/img/servicios/centralizados.png"
    },
    {
        "nombre": "Instalación de GPS",
        "descripcion": "Instalamos GPS a su veículo",
        "img": "assets/img/servicios/INST GPS.png"
    }
];


var servicio = Servicios.map(function(element,index)
{
    return '<div class="col-lg-3 col-md-4 icon-box text-center my-3" data-aos="zoom-in" data-aos-delay="100">'+
           '<div style="align-items: center;"><img style="width: 150px;align-items: center;" src="'+element.img+'" className="rounded mx-auto d-block"></div>'+
           '<h5 className="title text-center">'+element.nombre+'</h5>' +
        '<div><button type="button" class="btn btn-outline-primary" onClick="verMas('+index+')" data-toggle="modal" data-target="#myModal">Ver mas</button></div></div>'
}
);
document.getElementById("demo").innerHTML= servicio.join("");

function verMas(index){
   // console.log(Servicios[index])
    document.getElementById('titulo').innerText= Servicios[index].nombre;
    document.getElementById('imagen').innerHTML = '<img src="'+Servicios[index].img+'" class="img-fluid" alt="Responsive image">'
    document.getElementById('descript').innerText= Servicios[index].descripcion;
}


Productos = [
    {
        "nombre": "Alarma k9",
        "descripcion": "2 controles biper, funciona a distancia 1000m, controles con alertas de golpeteo y bibración, bloqueo de motor",
        "img": "assets/img/productos/alarmabipper.png"
    },
    {
        "nombre": "Alarma Genius",
        "descripcion": "2 controles, funciona a 400m de distancia, bloqueo de motor",
        "img": "assets/img/productos/alarmagenius.png"
    },
    {
        "nombre": "Alarma k9 sin biper ",
        "descripcion": "2 controles, funciona a 800m de distancia, bloqueo de motor",
        "img": "assets/img/productos/alarmabipper.png"
    },
    {
        "nombre": "Ventiladora",
        "descripcion": "Ventiladora toyota",
        "img": "assets/img/productos/alarmabipper.png"
    },
    {
        "nombre": "Alarma",
        "descripcion": "valiosa herramienta que permite conectarse con el vehiculo y extraer informacion valiosa para su diagnostico automotriz",
        "img": "assets/img/productos/alarmabipper.png"
    },
    {
        "nombre": "Alarma",
        "descripcion": "valiosa herramienta que permite conectarse con el vehiculo y extraer informacion valiosa para su diagnostico automotriz",
        "img": "assets/img/productos/alarmabipper.png"
    },
    {
        "nombre": "Alarma",
        "descripcion": "valiosa herramienta que permite conectarse con el vehiculo y extraer informacion valiosa para su diagnostico automotriz",
        "img": "assets/img/productos/alarmabipper.png"
    },
    {
        "nombre": "Alarma",
        "descripcion": "valiosa herramienta que permite conectarse con el vehiculo y extraer informacion valiosa para su diagnostico automotriz",
        "img": "assets/img/productos/alarmabipper.png"
    }
];

var producto = Productos.map(function(element,index)
    {
        return '<div class="col-lg-3 col-md-6 d-flex align-items-stretch">' +
            '            <div class="member" data-aos="fade-up" data-aos-delay="100">' +
            '              <div class="member-img">' +
            '                <img src="'+element.img+'" class="img-fluid" alt="">' +
            '              </div>' +
            '              <div class="member-info">' +
            '                <h4>'+element.nombre+'</h4>' +
            '              </div>' +
            '            </div>' +
            '          </div>'
    }
);
document.getElementById("producto").innerHTML= producto.join("");
/*
function verMaspro(index){
    console.log(Servicios[index])
    document.getElementById('titulopro').innerText= Productos[index].nombre;
    document.getElementById('imagenpro').innerHTML = '<img src="'+Productos[index].img+'" class="img-fluid" alt="Responsive image">'
    document.getElementById('descriptpro').innerText= Productos[index].descripcion;
}*/
